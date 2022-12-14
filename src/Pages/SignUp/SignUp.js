import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import SocialSignUp from './SocialSignUp';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        if (password.length < 6) {
            setError('Password should be 6 charcters or more');
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" value="Login">
                    Sign Up
                </Button>
            </Form>
            <SocialSignUp></SocialSignUp>
            <p>Already have an account? <Link to='/login' >Login</Link> </p>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default SignUp;