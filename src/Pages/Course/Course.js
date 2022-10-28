import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    //console.log(category);
    const course = useLoaderData();
    // console.log(course);
    return (
        <Row xs={12} lg={3} className='gx-3'>

            {

                course.map(c => <Col key={c.id}> <Card className='h-200 w-100' style={{ width: '18rem' }}>
                    <Card.Img variant="" src={c.img} />
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Time: {c.time}</ListGroup.Item>
                        <ListGroup.Item>Lccture: {c.lecture}</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Link to={`/courses/${c.id}`}>See detail</Link>

                    </Card.Body>
                </Card>
                </Col>
                )
            }
        </Row>
    );
};

export default Course;