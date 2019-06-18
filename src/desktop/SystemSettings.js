import React from "react";

import "./css/SystemSettings.css";

function SystemSettings(props) {
    return (
        <div className={props.className}>
            <button className='exitButton' onClick={props.toggleSettingsClick}><i className="far fa-times-circle"></i></button><br></br><br></br>
            show orbits: 
            <button className='toggleButton' onClick={props.orbitsClick}>{props.orbits ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button><br></br><br></br>
            animate orbits:
            <button className='toggleButton' onClick={props.animateClick}>{props.animate ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button><br></br><br></br>
            show all rings:
            <button className='toggleButton' onClick={props.ringsClick}>{props.rings ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button><br></br><br></br>
            show pluto:
            <button className='toggleButton' onClick={props.plutoClick}>{props.pluto ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>}</button><br></br><br></br>
        </div>
            )
        }
        
export default SystemSettings;