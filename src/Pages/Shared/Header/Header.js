import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Coders Tutorial</Navbar.Brand>
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
                        {user?.photoURL ?
                            <Image className='m-4' style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                            : <FaUser></FaUser>
                        }
                        <span className='text-white m-4'>{user?.email}</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;