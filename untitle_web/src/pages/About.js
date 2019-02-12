import React from 'react';

const About = ({match}) => {
    return (
        <div>
            <h2>소개</h2>
            <p>
                리액트 라우터 {match.params.name}
            </p>
        </div>
    );
};

export default About;