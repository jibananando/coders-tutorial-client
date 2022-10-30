import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isLight, setIsLight] = useState(false);
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg={isLight ? 'light' : 'dark'} variant="dark">
            <Container>
                <img className='m-2' style={{ height: '40px' }} src="https://thecodersguild.org.uk/images/logo/TCG-logo.svg" alt="" />
                <Navbar.Brand><Link to='/' className='text-decoration-none fs-3 text-info'>Coders Tutorial</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none m-4' to="courses">Courses</Link>
                        <Link className='text-decoration-none m-4' to="faq">FAQ</Link>
                        <Link className='text-decoration-none m-4' to="blog">Blog</Link>

                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <Link className='text-decoration-none m-4' to="signup" onClick={logOut}>Log Out</Link>
                                :
                                <>
                                    <Link className='text-decoration-none m-4' to="login">Login</Link>
                                    <Link className='text-decoration-none m-4' to="signup">Sign Up</Link>
                                </>
                        }
                    </Nav>
                    <Nav>
                        <Button className='m-4' variant="outline-primary" onClick={() => setIsLight(!isLight)}>
                            {isLight ? 'light' : 'dark'}
                        </Button>
                        <div data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName}>
                            {user?.photoURL ?
                                <Image className='m-4' style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;