
import { useState } from 'react';
// import './styleC.css';
import CustomAlert from '../Alert';
import {Form} from "react-bootstrap"
import { useNavigate,  Link } from "react-router-dom";
import {CircularProgress, Box} from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import  axios  from "axios";
import 'react-toastify/dist/ReactToastify.css';

export default function UserLogIn() {

    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [message, setmessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate()


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // const [validated, setValidated] = useState(false);

    // Handling changes
    
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

        if ( email === '' || password === '') {
            setError(true); 
            setAlertType("error")
            
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
        navigate("/sign-up")
    };
    
    const signUp = () =>  {
        const values = { 
            "email":email,
            "password":password
        };

        axios.post('https://social-network-auth-service.onrender.com/api/login', values).then((response) => {
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
                        <p className='intro'>Nice to see you again</p>
                        <p className='welcome'>Welcome back to the website</p>
                        <p className='encourager'>Here is a very nice social network where you can have <strong>infinite fun</strong>. So, if you need to <span>beautify your days</span>, you are at the right place.</p>

                    </div>
                </div>
            </div>
            <div className="recorder-c">
                
                <div className="form">
                    <div className='heading'>
                        <p>Log in</p>
                    </div>
                    <form className="client-register-form">
                        
                        <div className="email">
                            <input onChange={handleEmail} type="text" className="input-area" required id="email-text" />
                            <label for="email-text" className="label">Email</label>

                        </div>
                        <div className="password">
                            <input onChange={handlePassword} type="password" className="input-area" required id="password-text" />
                            <label for="password-text" className="label">Password</label>

                        </div>
                        
                        <div className="validation">
                            <div className='progress'>
                                {isLoading && <Box sx={{ width: '95%'}}>
                                    
                                    <CircularProgress color="success" />
                                </Box>}
                            </div>
                            <button onClick={handleSubmit} className="btn-submit" type="submit">
                                Log in
                            </button>
                            <div className="login">
                                <p>Don't have an account yet ?</p>
                                <button onClick={handleAbort} className="btn-login" type="submit">
                                    Sign up
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