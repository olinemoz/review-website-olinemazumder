import React from 'react';
import {useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import Rating from "react-rating";
import UseCourses from "../customHooks/useCourses";


const CourseDetails = () => {
    const [courses] = UseCourses()
    // console.log("courses default", courses)
    const {id} = useParams()
    // console.log(id)
    const filterSingleCourse = courses.filter(course => course.path === id)
    // console.log(filterSingleCourse)


    return (
        <div style={{marginTop: "70px", marginBottom: "80px"}}>
            {
                filterSingleCourse.map((course, index) => {
                    return (
                        <Card key={index} style={{width: '30rem'}} className="mx-auto shadow-lg">
                            <Card.Img variant="top" src={course.image} style={{height: "280px"}}/>
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text>
                                    <span className="fw-bold">Category:</span> {course.category} <br/>
                                    <span className="fw-bold">Price:</span> {course.price} <br/>
                                    <span className="fw-bold">Rating:</span>
                                    <Rating style={{color: "gold", marginLeft: "4px"}}
                                            initialRating={course.rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            readonly
                                    />
                                </Card.Text>
                                <Button variant="primary" onClick={() => alert("Purchase Successfully")}>
                                    Buy Now
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
};

export default CourseDetails;