import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AllCourses = (props) => {
    const {image, name, category, price,path} = props.courses

    const history = useHistory()
    const handleCourseDetails = () => {
        history.push(`/course/${path}`)
    }
    return (
        <Card style={{width: '18rem'}} className="mt-3 mx-auto gx-5 shadow-lg">
            <Card.Img variant="top" src={image} style={{width: '100%', height: "160px"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <span className="fw-bold">Category:</span> {category} <br/>
                    <span className="fw-bold">Price:</span> {price}
                </Card.Text>
                <Button onClick={handleCourseDetails} variant="primary" className="d-block mx-auto">View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default AllCourses;