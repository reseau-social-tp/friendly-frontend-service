import './App.css';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import UserSignUp from './components/UserSignUp/scriptC';
function App() {   
    
    return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route index element={<UserSignUp/>} />
        <Route path='/sign-up' element={<UserSignUp/>}/>
        {/* TODO */}
        
        </Routes>
    </BrowserRouter>
    </div>
    
    )
    
    
    
}

export default App;