import React from 'react';

import './Orbit.css';

function Orbit(props) {
    let orbit = {
        height: props.oDiameter,
        width: props.oDiameter,
        top: 'calc(50% - ' + ((props.oDiameter / 2) + 1) + 'px)',
        left: 'calc(50% - ' + ((props.oDiameter / 2) + 1) + 'px',
        animation: 'spin-right ' + props.dur + ' linear infinite',
    }

    if(props.visible) {
        orbit.borderStyle = 'dashed';
        orbit.borderWidth = 1;
    }
    else {
        orbit.border = 'none';
    }

    let planet = {
        height: props.pDiameter,
        width: props.pDiameter,
        top: 'calc(50% - ' + ((props.pDiameter / 2) + 2) + 'px)',
    }

    if(props.start === 'left') {
        planet.right = 'calc(100% - ' + ((props.pDiameter / 2) + 2) + 'px)';
    }
    else {
        planet.left = 'calc(100% - ' + ((props.pDiameter / 2) + 2) + 'px)';
    }

    return(
        <div className={props.className} style={orbit}>
            <div className='planet' style={planet}></div>
        </div>
    );
}

export default Orbit;