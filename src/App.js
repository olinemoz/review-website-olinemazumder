import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import ContactUs from "./Components/ContactUs/ContactUs";
import Submitted from "./Components/ContactUs/Submitted";
import CourseDetails from "./Components/CourseDetails/CourseDetails";


function App() {
    const [courses, setCourses] = useState([])
    const [searchFound, setSearchFound] = useState([])


    useEffect(() => {
        fetch("./data/courses.JSON")
            .then(response => response.json())
            .then(data => {
                setCourses(data)
                setSearchFound(data)
            })
    }, [])

    // Search Function
    const handleSearch = event => {
        const searchText = event.target.value;
        // Search using Course Name and Course Category
        const searchItem = courses.filter(course => course.name.toLowerCase().includes(searchText.toLowerCase()) || course.category.toLowerCase().includes(searchText.toLowerCase()))
        setSearchFound(searchItem)
    }

    return (
        // Whole Application Wrapped By Router
        <Router>
            <Header/>
            <Switch>
                {/*Route Paths Added*/}
                <Route exact path="/" render={() => <Home courses={courses}/>}/>
                {/*I have use Render Function To send data as Props. I saw it from Documentation*/}
                <Route exact path="/home"><Redirect to="/"/></Route>
                <Route exact path="/courses"
                       render={() => <Courses handleSearch={handleSearch} searchFound={searchFound}/>}
                />
                <Route exact path="/course/:id" component={CourseDetails}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/contact/submitted" component={Submitted}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
