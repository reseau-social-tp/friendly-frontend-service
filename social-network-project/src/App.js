import './App.css';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import UserSignUp from './pages/signUp';
import UserLogIn from './pages/logIn';
function App() {   
    
    return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route index element={<UserLogIn/>} />
        <Route path='/sign-up' element={<UserSignUp/>}/>
        <Route path='/log-in' element={<UserLogIn/>}/>
        {/* TODO */}
        
        </Routes>
    </BrowserRouter>
    </div>
    
    )
    
    
    
}

export default App;