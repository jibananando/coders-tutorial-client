import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container'>
            <Card className='w-75 mx-auto'>
                <Card.Img className='w-25 mx-auto' variant="top" src={data?.img} />
                <Card.Body>
                    <Card.Title>{data?.name}</Card.Title>
                    <Card.Text>
                        <h5>Course Detail</h5>
                        {data?.detail}
                    </Card.Text>
                    <Link className='text-decoration-none text-white' to={`/checkout/${data?.id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Category;