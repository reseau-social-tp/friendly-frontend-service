import {React, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import {
Person2,
Tag,
Dialpad,
Email,
EditOutlined,
DeleteOutlined
} from "@mui/icons-material";

// Useful icons
// import MolIcon from "../../../assets/images/Mol.svg"
// import passwordIcon from "../../../assets/images/password.svg"
// import togglePassword from "../../../assets/images/toggle_password.svg"

import "./style.css"
import Entry from "../../../components/Entry"
import FormValidation from "../../../components/FormValidation"
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import imageCompression from 'browser-image-compression';
import Dropzone from 'react-dropzone';
import FlexBetween from '../../FlexBetween';

export const ProfileInfo
 = ({user}) => {
     
     // States for registration
     const [fullName, setFullName] = useState('');
     const [mobile, setMobile] = useState('');
     const [website, setWebsite] = useState('');
     const [email, setEmail] = useState('');
     const [adresse, setAdresse] = useState('');
     const [gender, setGender] = useState('');
     const [avatar, setAvatar] = useState('');
     const [avatarData, setAvatarData] = useState('');
     
     // Navigation handler
     const navigate = useNavigate()
     
     // States for checking when saving
     const [saving, setSaving] = useState(false);
    
    // Email validator
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Handling changes
    const handleFullName = (e) => {
        setFullName(e.target.value);
    };
    const handleMobile = (e) => {
        setMobile(e.target.value);
    };
    const handleWebsite = (e) => {
        setWebsite(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleAdresse = (e) => {
        setAdresse(e.target.value);
    };
    const handleAvatar = (e) => {
        setAvatar(e.target.files[0]);
        compressImage(e.target.files[0])
    };
    
    // React toastify boxes
    const generateError = (err) =>
    toast.error(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })
    const generateSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        })
     
    const compressImage = async function(image){
        console.log(image);
        setAvatar(image);
        const imageFile = image
        const option = {
            maxSizeMB:0.05,
            maxWidthOrHeight:1000
        }
        try {
            const compressedFile = await imageCompression(imageFile, option)
            var reader = new FileReader()
            reader.readAsDataURL(compressedFile)
            reader.onload = () =>{
                console.log(reader.result);
                setAvatarData(reader.result)
                // setValue({...values,image: reader.result})
            }
            reader.onerror = error => {
                console.log("Error: ", error);
            };
        } catch (error) {
                console.log(error);
        }   
    }
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSaving(true)
        
        
        if (fullName === '' || mobile === '' || email === '' || adresse === '' || gender === '' ||  website === '' || avatar === '') {
            if (fullName === ""){
                setFullName(user.fullName)
            } 
            else if (mobile === ""){
                setMobile(user.mobile)
            } 
            else if (email === ""){
                setEmail(user.email)
            } 
            else if (adresse === ""){
                setAdresse(user.address)
            } 
            else if (gender === ""){
                setGender(user.gender)
            } 
            else if (website === ""){
                setWebsite(user.website)
            } 
            else if (avatar === ""){
                setAvatar(user.avatar)
            }else{

            }
        } else {
            return save()
        }
    };
    
    const save = async (id) => {
        // const response = await fetch(`http://localhost:5000/api/user/${user._id}`, {
        const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/unfollow`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },	
        
        body: JSON.stringify({
            _id: user._id,
            avatar: avatarData,
            banner: user.banner,
            fullname: fullName,
            mobile: mobile,
            address: adresse, 
            story: '',
            website: website,
            gender: gender
        })
      });
      const data = await response.json();
      console.log(data)
      setSaving(false)
      return generateSuccess("Succesfully updated!")
    };

    return (
        <form className="client-register-form">
            <Entry handler={handleFullName} type="text" identifier="full-name-text" label="Full name" value={user.fullname}/>
            <Entry handler={handleMobile} type="text" identifier="mobile-text" label="Phone" value={user.mobile}/>
            <Entry handler={handleWebsite} type="text" identifier="website-text" label="Website" value={user.website}/>
            <Entry handler={handleEmail} type="text" identifier="email-text" label="Email" value
            ={user.email}/>
            <Entry handler={handleAdresse} type="text" identifier="adresse-text" label="Adresse" value
            ={user.address}/>
            <Form.Group className="gender">
                <Form.Label className='name'>Gender</Form.Label>
                <div className='options'>
                    
                    <Form.Check type="radio" name="gender"  className="gender-value" label="Male" value="Male"  onClick={(e) => {
                    setGender(e.target.value)
                    }}/>
                    <Form.Check type="radio"  name="gender" className="gender-value" label="Female"  value="Female"  onClick={(e) => {
                    setGender(e.target.value)
                    }}/>
                </div>
            </Form.Group>
            
            {/* <input type='file' onChange={handleAvatar}/> */}
            <Box
            border={`1px solid var(--secondary)`}
            borderRadius="5px"
            mt="1rem"
            p="1rem"
            >
            <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) => compressImage(acceptedFiles[0])}
            >
                {({ getRootProps, getInputProps }) => (
                <FlexBetween>
                    <Box
                    {...getRootProps()}
                    border={`2px dashed var(--secondary)`}
                    p="1rem"
                    width="100%"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                    <input {...getInputProps()} />
                    {!avatar ? (
                        <p style={{color:"var(--primary)"}}>Add Image Here</p>
                    ) : (
                        <FlexBetween>
                        <Typography sx={{color:"black"}}>{avatar.name}</Typography>
                        <EditOutlined />
                        </FlexBetween>
                    )}
                    </Box>
                    {avatarData
                     && (
                    <IconButton
                        onClick={() => setAvatar(null)}
                        sx={{ width: "15%" }}
                    >
                        <DeleteOutlined />
                    </IconButton>
                    )}
                </FlexBetween>
                )}
            </Dropzone>
            </Box>
            <div className="validation">
                <div className='progress'>
                    {saving && <Box sx={{ width: '95%'}}>
                        <CircularProgress color="success" />
                    </Box>}
                </div>
                <Button handler={handleSubmit} class="primary" label={"Save"}/>                
            </div>
            {/* <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Save"/> */}
        </form>

    );
};
export default ProfileInfo
;
