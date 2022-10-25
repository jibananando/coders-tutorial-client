import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting
                        HTTP headers, that determines whether browsers block frontend JavaScript code from
                        accessing responses for cross-origin requests. The same-origin security policy forbids
                        cross-origin access to resources.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money.
                        Each feature works independently, and they work even better together.

                        Usually, authentication by a server entails the use of a user name and password. Other ways
                        to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money.
                        Each feature works independently, and they work even better together.

                        Usually, authentication by a server entails the use of a user name and password. Other ways
                        to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        A node is a basic unit of a data structure, such as a linked list or tree data structure.
                        Nodes contain data and also may link to other nodes. Links between nodes are often implemented
                        by pointers.

                        It is a used as backend service where javascript works on the server-side of the application.
                        This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which
                        converts javascript code into machine code, it is highly scalable, lightweight, fast, and
                        data-intensive
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;