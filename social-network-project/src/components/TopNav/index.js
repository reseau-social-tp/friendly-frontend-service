import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
// import Logo from '../../assests/images/Recho.png'
import "./style.css"

const TopNav = () => {
    // let user = ''
    // if (localStorage.getItem('recho')) {
    //     user = JSON.parse(localStorage.getItem('recho'))
    // }
    // console.log(user);
    // const logout2 = () => {
    //     logout()
    // }
    return (
        <div>
            <Navbar sticky='top' expand="lg" className="header" style={{backgroundColor:"#132211", width:"100vw", height:"50vh"}} >
                <Container >
                    <Navbar.Brand  >
                        <Link to="/">
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "flex-start"
                            }}>
                                {/* <img src={Logo} alt="Logo" style={{height:"4rem"}} /> */}
                                
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" style={{color:"white"}}/>
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        {/* <Nav className="me-auto ">
                            <Navbar.Brand><Link to='/' style={{ color: 'var(--secondary)' }}>Accueil</Link></Navbar.Brand>
                            {
                                user.user_type === 'user' && (
                                    <>
                                        <Navbar.Brand><Link to='/obstetricale' style={{ color: 'var(--secondary)' }}>Obstetricale</Link></Navbar.Brand>
                                        <Navbar.Brand><Link to='/pelvienne' style={{ color: 'var(--secondary)' }}>Pelvienne</Link></Navbar.Brand>
                                        <Navbar.Brand><Link to='/echoGene' style={{ color: 'var(--secondary)' }}>EchoGene</Link></Navbar.Brand>
                                    </>
                                )
                            }

                            {user.user_type === 'admin' && (
                                
                                <>
                                    <Navbar.Brand><Link to='/userControl' style={{ color: 'var(--secondary)' }}>UserControl</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to='/controlObs' style={{ color: 'var(--secondary)' }}>Obstetricale</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to='/controlPel' style={{ color: 'var(--secondary)' }}>Pelvienne</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to='/controlEcho' style={{ color: 'var(--secondary)' }}>EchoGene</Link></Navbar.Brand>
                                </>
                            )
                            }


                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
                <Button className='justify-content-end' variant="outline-primary" style={{backgroundColor:"var(--background)", border:"1px solid var(--background)", color:"var(--primary)", fontWeight:"bolder",marginRight:"1rem"}}>Deconnexion</Button>

            </Navbar>
        </div>
    )
}

export default TopNav;