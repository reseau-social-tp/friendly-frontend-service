
import { useState } from 'react';
import './styleC.css';
import CustomAlert from '../Alert';
import { useNavigate,  Link } from "react-router-dom";
import {LinearProgress, Box} from '@mui/material';

export default function UserSignUp() {

    // States for registration
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    
    const [message, setmessage] = useState('');
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
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName === '' || username === '' || email === '' || password === '' || gender === '') {
            setError(true); 
        } else {
            setIsLoading(true);
            setError(false);
        }
    };
    const handleAbort = (e) => {
        // e.preventDefault();
            setError(true); 
    };
    

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
                {submitted && <CustomAlert alertType={alertType} msg={message}/>}
                
                <div className="form">
                    <div className='heading'>
                        <h2>Sign up</h2>
                    </div>
                    {isLoading && <Box sx={{ width: '95%'}}>
                        <LinearProgress />
                    </Box>}
                    <form className="client-register-form">
                        
                        <div className="full-name">
                            <input onChange={handleFullName} type="text" className="input-area" required id="full-name-text" />
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
                        <div className="gender">
                            <input onChange={handleGender} type="text" className="input-area" required id="gender-text" />
                            <label for="gender-text" className="label">Gender</label>

                        </div>
                        
                        <div className="validation">
                            <Link to="/login"className="Link" >Already have an account ?</Link>
                            <button onClick={handleSubmit} className="btn-submit" type="submit">
                                Sign up
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            
        </div>
        
    );
}