import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


const Category = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container'>
            <div className='bg-primary p-3 d-flex justify-content-between'>
                <h3 className='text-white'>{data?.name}</h3>
                <button className='btn btn-danger'>Download PDF</button>
            </div>
            <Card className='w-75 mx-auto'>
                <Card.Img className='w-25 mx-auto' variant="top" src={data?.img} />
                <Card.Body>
                    {/* <Card.Title>{data?.name}</Card.Title> */}
                    <Card.Text>
                        <h5>Course Detail</h5>
                        {data?.detail}
                    </Card.Text>
                    <Link className='text-decoration-none text-white' to={`/checkout/${data?.id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>

            </Card>

            <div className='w-75 mx-auto'>
                <h4 className='text-center'>Course lecture and quiz chart:</h4>
                <BarChart
                    width={300}
                    height={400}
                    data={[data]}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="lecture" fill="#8884d8" />
                    <Bar dataKey="quiz" fill="#82ca9d" />
                </BarChart>
            </div>

        </div>
    );
};

export default Category;