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

    let totalRingDiameter = props.pDiameter + (props.rDiameter * 2) + (props.rDistance * 2)
    let ring = {
        height: totalRingDiameter,
        width: 0,
        padding: 0,
        top: 'calc(50% - ' + ((totalRingDiameter / 2) + 1) + 'px',
        transform: 'rotate(' + props.rRotation + 'deg)',
    }

    return(
        <div className={props.className} style={orbit}>
            <div className='planet' style={planet}>
            {props.rDiameter === 0 ? false : <div className='ring' style={ring}></div>}
            </div>
        </div>
    );
}

export default Orbit;