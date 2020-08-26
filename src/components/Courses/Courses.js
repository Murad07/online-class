import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const first14 = fakeData.slice(0, 13);
    const [courses, setCourses] = useState(first14);
    console.log(courses);
    return (
        <div>
            {
                courses.map((course) => (
                    <SingleCourse key={course.id} course={course}></SingleCourse>
                ))
            }
        </div>
    );
};

export default Courses;