// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"

// Pages import
import UserSignUp from './pages/signUp';
import UserLogIn from './pages/logIn';
import Home from './pages/home'

// Container import (except for login and signUp)
import Layout from './components/Layout'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {   
    
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<UserLogIn/>} />
                <Route path='/sign-up' element={<UserSignUp/>}/>
                <Route path='/log-in' element={<UserLogIn/>}/>
                <Route path='/' element={<Layout/>}>
                    <Route path='home' element={<Home/>}/>
                </Route>
            
            </Routes>
        </BrowserRouter>
        </div>
    
    )
    
    
    
}

export default App;