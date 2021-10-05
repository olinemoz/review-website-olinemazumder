import React from 'react';
import {Col, Row} from "react-bootstrap";
import DisplayTopCourses from "./DisplayTopCourses";

const TopCourses = (props) => {
    const courses = props.courses
    // console.log("Courses",courses)
    // Here I have Filtered  Courses Which Courses Ratings Are 4.4 and Above
    const topCourses = courses.filter(course => course.rating >= 4.4)

    return (
        <Row className="mt-3">
                {
                    topCourses.map((courses,index) => {
                        return (
                            <Col key={index} xs={12} sm={12} md={6} lg={4} >
                                <DisplayTopCourses topCourses={courses}/>
                            </Col>
                        )
                    })
                }
        </Row>
    );
};

export default TopCourses;