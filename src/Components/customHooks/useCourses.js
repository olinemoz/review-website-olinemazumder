import {useEffect, useState} from 'react';

const UseCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(() => {
        fetch("/data/courses.JSON")
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
    }, [])
    return [courses,setCourses]
};

export default UseCourses

