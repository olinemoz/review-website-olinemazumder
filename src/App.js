import React, {createContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import ContactUs from "./Components/ContactUs/ContactUs";

// Context Api Created
export const DataContext = createContext([])

function App() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("./data/courses.JSON")
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
    }, [])

    return (
        // Whole Application Wrapped By Router and Context Api
        <Router>
                <DataContext.Provider value={[courses, setCourses]}>
                    <Header/>
                    <Switch>
                        {/*Route Paths Added*/}
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/courses" component={Courses}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact-us" component={ContactUs}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                    <Footer/>
                </DataContext.Provider>
        </Router>
    );
}

export default App;
