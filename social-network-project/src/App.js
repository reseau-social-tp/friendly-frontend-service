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
        {/* <Route path='/confirmation' element={<div> Confirmation page not yet implemented</div>}/> */}
        
        {/* <Route path='/signin' element={<Signin/>}/>
        <Route path='/rooms' element={<Room/>}/>
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path='/new-room' element={<NewRoom/>}/>
        <Route path="*" element={<Home/>} /> */}
        
        </Routes>
    </BrowserRouter>
    </div>
    
    )
    
    
    
}

export default App;