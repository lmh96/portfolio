import React from "react";

import "./css/About.css";

function About(props) {
    return (
        <div className={'mobile-about'} id={props.className}>
            <h1 id={'mobile-aboutTitle'}>
                About
            </h1>
            <button id="about-hide-btn" onClick={props.closeClick}><i className="fas fa-times"></i></button>
            <div id='mobile-about-content'>
            
            </div>
        </div>
    );
}

export default About;