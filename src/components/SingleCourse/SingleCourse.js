import React from 'react';

const SingleCourse = (props) => {
    const { title, details, price, img, auth } = props.course;
    return (
        <div>
            <img src={require('../../images/' + img)} alt='img not found' />
            <h3>{title}</h3>
            <h4>{details}</h4>
            <h3>Course By <span>{auth}</span></h3>
            <h3>${price}</h3>
            <button>Enroll Now</button>
        </div>
    );
};

export default SingleCourse;