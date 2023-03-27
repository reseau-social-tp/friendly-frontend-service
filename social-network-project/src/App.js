import './App.css';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import UserSignUp from './pages/signUp';
import UserLogIn from './pages/logIn';
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {   
    
    return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route index element={<UserLogIn/>} />
            <Route path='/sign-up' element={<UserSignUp/>}/>
            <Route path='/log-in' element={<UserLogIn/>}/>
            <Route path='/' element={<Layout/>}>
                <Route path='/home' element={<UserSignUp/>}/>
                {/* <Route path="dashboard" element={<Dashboard />} />
                <Route path="admin" element={<Admins />} />
                <Route path="client" element={<Clients />} />
                <Route path="destination" element={<Destinations />} />
                <Route path="transaction" element={<Transactions />} />
                <Route path="user" element={<Destinations />} /> */}
            </Route>
        
        </Routes>
    </BrowserRouter>
    </div>
    
    )
    
    
    
}

export default App;