import React from "react";

import "./SystemSettings.css";

function SystemSettings(props) {
    return (
        <div className={props.className}>
            <button className='exitButton' onClick={props.toggleSettingsClick}><i class="far fa-times-circle"></i></button><br></br><br></br>
            show orbits: 
            <button className='toggleButton' onClick={props.orbitsClick}>{props.orbits ? <i class="far fa-check-circle"></i> : <i class="far fa-circle"></i>}</button><br></br><br></br>
            animate orbits:
            <button className='toggleButton' onClick={props.animateClick}>{props.animate ? <i class="far fa-check-circle"></i> : <i class="far fa-circle"></i>}</button><br></br><br></br>
            show all rings:
            <button className='toggleButton' onClick={props.ringsClick}>{props.rings ? <i class="far fa-check-circle"></i> : <i class="far fa-circle"></i>}</button><br></br><br></br>
        </div>
            )
        }
        
export default SystemSettings;