import React from "react";

import "./css/About.css";

class About extends React.Component {
    state = {
        didMount: false,
    }

    render() {
        return (
            <div className={'about'} id={"aboutActive"}>
                <h1 id={'aboutTitle'}>
                    About
            </h1>
                <div id='about-content'>
                    {this.props.content}
                </div>
            </div>
        );
    }

}

export default About;