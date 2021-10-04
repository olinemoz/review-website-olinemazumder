import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
    return (
        // Whole Application Wrapped By Router
        <Router>
            <Header/>
            <Switch>
                {/*Route Paths Added*/}
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/courses" component={Courses}/>
                <Route exact path="/course/:id" component={CourseDetails}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/contact/submitted" component={Submitted}/>
                <Route path="*" component={NotFound}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
