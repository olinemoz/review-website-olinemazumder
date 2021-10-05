import React from 'react';
import {Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import AllCourses from "./AllCourses";

const Courses = (props) => {

    const handleSearch = props.handleSearch
    const searchFound = props.searchFound

    return (
        <Container style={{marginTop: "70px", marginBottom: "80px"}}>
            <h3 className="text-center bg-primary text-white py-3 rounded">All Courses</h3>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search your courses"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
            </InputGroup>
            <Row>
                {
                    searchFound.map((course, index) => {
                        return (
                            <Col key={index} xs={12} sm={12} md={6} lg={4}>
                                <AllCourses courses={course}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Courses;