import React from 'react';
import {Container} from "react-bootstrap";
import BannerInfo from "./BannerInfo";
import TopCourses from "../TopCourses/TopCourses";


const Home = (props) => {

    const courses = props.courses;
    // console.log("Home Props",courses);
    return (
        <Container style={{marginTop: "70px", marginBottom: "80px"}}>
            <h3 className="text-center bg-primary text-white py-3 rounded">Our Features</h3>
            <BannerInfo/>
            <h3 className="text-center mt-4 bg-primary text-white py-3 rounded">Top Courses</h3>
            <TopCourses courses={courses}/>
        </Container>
    )
};


export default Home;