import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory()

    const handleSubmit = () => {
        history.push(`/contact/submitted`)
    }

    return (
        <Container style={{marginTop: "70px", marginBottom: "80px"}}>
            <h2 className="text-center bg-primary text-white py-3 rounded">Contact Us</h2>
            <Container>
                <Form style={{width: "50%"}} className="d-block mx-auto mt-5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)}
                                      type="text" value={name}
                                      placeholder="Your Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)}
                                      type="email" value={email}
                                      placeholder="name@example.com"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe Your Problems</Form.Label>
                        <Form.Control onChange={(e) => setDescription(e.target.value)}
                                      as="textarea" value={description}
                                      rows={3}/>
                    </Form.Group>
                    <Button type="submit" onClick={handleSubmit}
                            disabled={!name.length || !email.length || !description.length}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Container>
    );
};

export default ContactUs;