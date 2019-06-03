import React from "react";

import "./About.css";

function About(props) {
    return (
        <div className={'about'} id={props.className}>
            <h1 id={'title'}>
                About
            </h1>
            <div id='about-content'>
            
            </div>
        </div>
    );
}

export default About;