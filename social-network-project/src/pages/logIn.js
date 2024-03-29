// React imports
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Axios import
import  instanceAuth from "../axiosAuthService";

// Usefull components
import Entry from "../components/Entry"
import Descriptor from "../components/Descriptor"
import FormValidation from "../components/FormValidation"

// Styles
import 'react-toastify/dist/ReactToastify.css';
import '../styles/logIn.css';

// Images
import Logo from '../assets/images/logo2.png'

export default function UserLogIn() {

    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Navigation handler
    const navigate = useNavigate()


    // States for checking when loading
    const [isLoading, setIsLoading] = useState(false)

    // Email validation handler
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Handling changes
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
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

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        if ( email === '' || password === '') {            
            if (email === ""){
                setIsLoading(false)
                return generateError("Please enter your email.")
            } 
            else if (password === ""){
                setIsLoading(false)
                return generateError("Please enter your password.")
            }else{

            }
        }
        else if (!isValidEmail(email)) {
            setIsLoading(false)
            return generateError('Email is invalid')
        } else {
            return signUp()
        }
    };
    const handleAbort = (e) => {
        e.preventDefault();
        navigate("/sign-up")
    };
    
    // Funtion called on form submission
    const signUp = () =>  {
        const values = { 
            "email":email,
            "password":password
        };

        // Axios API call
        instanceAuth.post('/api/login', values)
        .then((response) => {
            setIsLoading(false);
            
            localStorage.setItem('user', JSON.stringify(response.data.user))
            navigate("/home")
            return generateSuccess(response.data.msg)
        })
        .catch((error) => {
            setIsLoading(false);
            return generateError(error.response.data.msg)
        });
    }

    return (
        <div className='main-c'>
            <Descriptor intro="Nice to see you again"  welcome={<p className='welcome'>Welcome back to <span style={{color:"var(--hero-highlight)"}}>friendly</span></p>} encourager={<p className='encourager'>Here is a very nice social network where you can have <strong>infinite fun</strong>. So, if you need to <span>beautify your days</span>, you are at the right place.</p>}/>
            <div className="recorder-c">
                <div className="form">
                    <div className='heading'>
                        <img src={Logo} alt="Logo" style={{height:"4rem"}} />
                    </div>
                    <form className="client-login-form">
                        <Entry handler={handleEmail} type="text" identifier="email-text" label="Email"/>
                        <Entry handler={handlePassword} type="password" identifier="password-text" label="Password"/>
                        
                        <FormValidation isLoading={isLoading} submitHandler={handleSubmit} primaryLabel="Log in" secondaryMessage="Don't have an account ?" abortHandler={handleAbort} secondaryLabel="Sign up"/>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}