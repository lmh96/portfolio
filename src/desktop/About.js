import React from "react";

import "./css/About.css";

function About(props) {
    return (
        <div className={'about'} id={props.className}>
            <h1 id={'aboutTitle'}>
                About
            </h1>
            <div id='about-content'>
                {props.content}
            </div>
        </div>
    );
}

export default About;