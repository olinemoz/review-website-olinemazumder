import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import {DataContext} from "../../App";
import DisplayTopCourses from "./DisplayTopCourses";

const TopCourses = () => {
    const [courses] = useContext(DataContext)
    // Here I have Filtered Courses Which Courses Ratings Are 4.4 and Above
    const topCourses = courses.filter(course => course.rating >= 4.4)
    return (
        <Row className="mt-3">
                {
                    topCourses.map(courses => {
                        return (
                            <Col xs={12} sm={12} md={6} lg={4} key={courses.key}>
                                <DisplayTopCourses topCourses={courses}/>
                            </Col>
                        )
                    })
                }
        </Row>
    );
};

export default TopCourses;