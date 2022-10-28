import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    //console.log(category);
    const course = useLoaderData();
    // console.log(course);
    return (
        <Row xs={12} lg={3} className='g-4'>

            {

                course.map(c => <Col key={c.id}> <Card>
                    <Card.Img height={280} variant="" src={c.img} />
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