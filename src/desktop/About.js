import React from "react";

import "./css/About.css";

function About(props) {
    return (
        <div className="about">
            <h2 className="aboutTitle">
                About Me
            </h2>
            <div className="aboutContent">
                {props.content}
            </div>
        </div>
    );
}

export default About;