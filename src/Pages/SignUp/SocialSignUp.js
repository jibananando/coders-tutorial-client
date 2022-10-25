import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignUp = () => {
    return (
        <div>
            <ButtonGroup className='mt-3 mb-3'>
                <Button variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant='outline-dark'> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
        </div>
    );
};

export default SocialSignUp;