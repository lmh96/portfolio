import React from "react";

import "./css/SystemSettings.css";

function SystemSettings(props) {
    return (
        <div className={props.className}>
            <div className="row" style={{marginTop: -10}} onClick={props.toggleSettingsClick}>
                <div className="prompt">System Settings</div>
                <button className='mobile-exitButton' onClick={props.toggleSettingsClick}><i className="far fa-times-circle"></i></button>
            </div>
            <div className="row" onClick={props.orbitsClick}>
                <div className="prompt">
                    show orbits:
                </div>
                <div className="check">
                    <button className='mobile-toggleButton'>{props.orbits ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
            <div className="row" onClick={props.animateClick}>
                <div className="prompt">
                    animate orbits:
                </div>
                <div className="check">
                    <button className='mobile-toggleButton'>{props.animate ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
            <div className="row" onClick={props.ringsClick}>
                <div className="prompt">
                    show all rings:
                </div>
                <div className="check">
                    <button className='mobile-toggleButton'>{props.rings ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button>
                </div>
            </div>
        </div>
    )
}

export default SystemSettings;