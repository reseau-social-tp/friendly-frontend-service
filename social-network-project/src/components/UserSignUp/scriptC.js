
import { useState } from 'react';
import './styleC.css';
import {Form} from "react-bootstrap"
import { useNavigate,  Link } from "react-router-dom";
import {CircularProgress, Box} from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import  axios  from "axios";
import 'react-toastify/dist/ReactToastify.css';

export default function UserSignUp() {

    // States for registration
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate()


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // const [validated, setValidated] = useState(false);

    // Handling changes
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setSubmitted(false);
    };
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    
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
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        if (fullName === '' || username === '' || email === '' || password === '' || gender === '') {
            setError(true); 
            setAlertType("error")
            if (fullName === ""){
                setIsLoading(false)
                return generateError("Please enter your full name.")
            } 
            else if (username === ""){
                setIsLoading(false)
                return generateError("Please enter your username.")
            } 
            else if (email === ""){
                setIsLoading(false)
                return generateError("Please enter your email.")
            } 
            else if (password === ""){
                setIsLoading(false)
                return generateError("Please enter your password.")
            } 
            else if (gender === ""){
                setIsLoading(false)
                return generateError("Please select your gender.")
            }else{

            }
        }
        else if (!isValidEmail(email)) {
            setError(true);
            setIsLoading(false)
            return generateError('Email is invalid')
        } else {
            setError(false);
            return signUp()
        }
    };
    const handleAbort = (e) => {
        e.preventDefault();
        navigate("/log-in")
    };
    
    const signUp = () =>  {
        const values = { 
            "fullname": fullName,
            "username":username,
            "email":email,
            "password":password,
            "gender":gender
        };

        axios.post('https://social-network-auth-service.onrender.com/api/register', values).then((response) => {
            setIsLoading(false);
            return generateSuccess(response.data.msg)
        })
        .catch((error) => {
            setIsLoading(false);
            return generateError(error.response.data.msg)
        });
    }

    return (
        <div className='main-c'>
            <div className="descriptor-c" >
                <div className='normalizer-c'>
                    <div className='contain'>
                        <p className='intro'>Nice to see you</p>
                        <p className='welcome'>Welcome to the website</p>
                        <p className='encourager'>Here is a very nice social network where you can have <strong>infinite fun</strong>. So, if you need to <span>beautify your days</span>, you are at the right place.</p>

                    </div>
                </div>
            </div>
            <div className="recorder-c">

                
                <div className="form">
                    <div className='heading'>
                        <p>Sign up</p>
                    </div>
                    <form className="client-register-form">
                        
                        <div className="full-name">
                            <input onChange={handleFullName} type="text" className="input-area" id="full-name-text" required/>
                            <label for="full-name-text" className="label">Full name</label>

                        </div>
                        <div className="username">
                            <input onChange={handleUsername} type="text" className="input-area" required id="username-text" />
                            <label for="username-text" className="label">Username</label>

                        </div>
                        <div className="email">
                            <input onChange={handleEmail} type="text" className="input-area" required id="email-text" />
                            <label for="email-text" className="label">Email</label>

                        </div>
                        <div className="password">
                            <input onChange={handlePassword} type="password" className="input-area" required id="password-text" />
                            <label for="password-text" className="label">Password</label>

                        </div>
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
                        
                        <div className="validation">
                            <div className='progress'>
                                {isLoading && <Box sx={{ width: '95%'}}>
                                    
                                    <CircularProgress color="success" />
                                </Box>}
                            </div>
                            <button onClick={handleSubmit} className="btn-submit" type="submit">
                                Sign up
                            </button>
                            <div className="login">
                                <p>Already have an account ?</p>
                                <button onClick={handleAbort} className="btn-login" type="submit">
                                    Log in
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            
            <ToastContainer/>
        </div>
        
    );
}