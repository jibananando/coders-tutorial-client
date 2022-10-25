import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                        <span className='text-white m-4'>{user?.email}</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;