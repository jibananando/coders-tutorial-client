import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SocialSignUp = () => {

    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }

    return (
        <div>
            <ButtonGroup className='mt-3 mb-3'>
                <Button onClick={handleGoogleSignIn} variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant='outline-dark'> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
        </div>
    );
};

export default SocialSignUp;