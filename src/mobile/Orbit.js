import React from 'react';

import './css/Orbit.css';

function Orbit(props) {
    let orbit = {
        height: props.oDiameter,
        width: props.oDiameter,
        top: 'calc(50% - ' + ((props.oDiameter / 2) + 1) + 'px)',
        left: 'calc(50% - ' + ((props.oDiameter / 2) + 1) + 'px',
        animation: 'spin-right ' + props.dur + ' linear infinite',
    }

    if (props.visible) {
        orbit.borderStyle = 'dashed';
        orbit.borderWidth = 1;
    }
    else {
        orbit.border = 'none';
    }

    let planet = {
        height: props.pDiameter,
        width: props.pDiameter,
        left: 'calc(50% - ' + ((props.pDiameter / 2) + 2) + 'px)',
    }

    if (props.start === 'bottom') {
        planet.bottom = 'calc(100% - ' + ((props.pDiameter / 2) + 2) + 'px)';
    }
    else {
        planet.top = 'calc(100% - ' + ((props.pDiameter / 2) + 2) + 'px)';
    }

    let totalRingDiameter = props.pDiameter + (props.rDiameter * 2) + (props.rDistance * 2)
    let ring = {
        height: totalRingDiameter,
        width: 0,
        padding: 0,
        top: 'calc(50% - ' + ((totalRingDiameter / 2) + 1) + 'px',
        transform: 'rotate(' + (props.rRotation + 90) + 'deg)',
    }

    let planetaryOrbitDiameter = props.pDiameter * 3
    let planetaryOrbit = {
        height: planetaryOrbitDiameter,
        width: planetaryOrbitDiameter,
        top: 'calc(50% - ' + (planetaryOrbitDiameter / 2) + 'px)',
        animation: 'spin-right 6s linear infinite',
    }

    if (props.visible) {
        planetaryOrbit.borderStyle = 'dashed';
        planetaryOrbit.borderWidth = 1;
    }
    else {
        planetaryOrbit.border = 'none';
    }

    if (props.dur === '0s') {
        planetaryOrbit.animation = 'spin-right 0s linear infinite';
    }
    else {
        planetaryOrbit.animation = 'spin-right 6s linear infinite';
    }

    if (props.start === 'left') {
        planetaryOrbit.right = 'calc(100% - ' + ((planetaryOrbitDiameter / 2) + 1) + 'px)';
    }
    else {
        planetaryOrbit.left = 'calc(100% - ' + ((planetaryOrbitDiameter / 2) + 1) + 'px)';
    }

    return (
        <div className={props.className} style={orbit}>
            <div className='mobile-planet' style={planet}>
                {props.rDiameter === 0 ? false : <div className='ring' style={ring}></div>}
            </div>
        </div>
    );
}

export default Orbit;