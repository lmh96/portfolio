import React from "react";

import "./css/SystemSettings.css";

function SystemSettings(props) {
    return (
        <div className={props.className}>
            <div className="row">
                <div className="prompt">
                    SystemSettings
                </div>
                <div className="check">
                    <button className='exitButton' onClick={props.toggleSettingsClick}><i className="far fa-times-circle"></i></button>
                </div>
            </div>
            <div className="row">
                <div className="prompt">
                    show orbits:
                </div>
                <div className="check">
                    <button className='toggleButton' onClick={props.orbitsClick}>{props.orbits ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
            <div className="row">
                <div className="prompt">
                    animate orbits:
                </div>
                <div className="check">
                    <button className='toggleButton' onClick={props.animateClick}>{props.animate ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
            <div className="row">
                <div className="prompt">
                    show all rings:
                </div>
                <div className="check">
                    <button className='toggleButton' onClick={props.ringsClick}>{props.rings ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
            <div className="row">
                <div className="prompt">
                    show pluto:
                </div>
                <div className="check">
                    <button className='toggleButton' onClick={props.plutoClick}>{props.pluto ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
        </div>
    )
}

export default SystemSettings;