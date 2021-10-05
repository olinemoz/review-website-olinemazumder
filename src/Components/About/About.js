import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {aboutUs} from "./AboutContent";
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <Container style={{marginTop: "70px", marginBottom: "80px"}}>
            <h2 className="text-center bg-primary text-white py-3 rounded">About Us</h2>

            <Row>
                {
                    aboutUs.map((about, index) => {
                        return (
                            <Col key={index} xs={12} sm={12} md={6} lg={4}>
                                <Card
                                    style={{width: '18rem'}}
                                    className="mt-3 mx-auto gx-5 shadow-lg"
                                >
                                    <Card.Body className="bg-success rounded">
                                        <div className="text-white">
                                            {
                                                <Typewriter
                                                    onInit={(typewriter) => {
                                                        typewriter.typeString(`${about.content}`)
                                                            .callFunction(() => {
                                                                console.log('String typed out!');
                                                            })
                                                            .pauseFor(2500)
                                                            .callFunction(() => {
                                                                console.log('All strings were deleted');
                                                            })
                                                            .start();
                                                    }}
                                                />
                                            }
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    );
};

export default About;