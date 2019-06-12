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
        top: 'calc(50% - ' + ((props.pDiameter / 2) + 2) + 'px)',
    }

    if (props.start === 'left') {
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

    let planetaryOrbitDiameter = props.pDiameter * 3
    let planetaryOrbit = {
        height: planetaryOrbitDiameter,
        width: planetaryOrbitDiameter,
        top: 'calc(50% - ' + (planetaryOrbitDiameter / 2) + 'px)',
        animation: 'spin-right 6s linear infinite',
    }

    if(props.visible) {
        planetaryOrbit.borderStyle = 'dashed';
        planetaryOrbit.borderWidth = 1;
    }
    else {
        planetaryOrbit.border = 'none';
    }

    if(props.dur === '0s') {
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

    let primary = {
        height: props.pDiameter,
        width: props.pDiameter,
        top: 'calc(50% - ' + ((props.pDiameter / 2) + 2) + 'px)',
        right: 'calc(100% - ' + ((props.pDiameter / 2) + 2) + 'px)',
    }

    let secondaryDiameter = props.pDiameter * .6;
    let secondary = {
        height: secondaryDiameter,
        width: secondaryDiameter,
        top: 'calc(50% - ' + ((secondaryDiameter / 2) + 2) + 'px)',
        left: 'calc(100% - ' + ((secondaryDiameter / 2) + 2) + 'px)',
    }

    return (
        <div className={props.className} style={orbit}>
            {props.isBiPlanetary ?
                <div className={props.className} style={planetaryOrbit}>
                    <div className='planet' style={primary}></div>
                    <div className='planet' style={secondary}></div>
                </div>
                :
                <div className='planet' style={planet}>
                    {props.rDiameter === 0 ? false : <div className='ring' style={ring}></div>}
                </div>
            }
        </div>
    );
}

export default Orbit;