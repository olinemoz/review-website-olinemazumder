import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AllCourses from "./AllCourses";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("./data/courses.JSON")
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
    }, [])

    return (
        <Container style={{marginTop: "70px", marginBottom: "80px"}}>
            <h3 className="text-center bg-primary text-white py-3 rounded">All Courses</h3>
            <Row>
                {
                    courses.map(course => {
                        return(
                            <Col xs={12} sm={12} md={6} lg={4} key={courses.key}>
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