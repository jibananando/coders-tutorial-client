import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {

    const data = useLoaderData();

    return (
        <div className='container'>
            <h3>Course Name: {data?.name}</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="phone" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" placeholder="Enter Your Address" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Login">
                    Check Out
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;