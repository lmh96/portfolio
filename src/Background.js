import React from "react";
import Orbit from './Orbit';

import "./Background.css";

function Background(props) {
    let visible = 'orbit';
    let isActive = props.areSpinning;
    let areVisible = props.hasVisibleOrbits;
    let leftStart = 'left';
    let rightStart = 'right';

    if(props.className === 'bgTop') {
        isActive = false;
    }
    else {
        if(props.areSpinning)
            isActive = true;
        else
            isActive = false;
    }

    return (
        <div className={props.className}>
            <button className="center" onClick={props.centerClick}><i class="fas fa-cog"></i></button>
            <Orbit className={visible} oDiameter={200} pDiameter={10} dur={props.areSpinning ? '8.796s' : '0s'} start={rightStart} active={isActive} visible={areVisible} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={275} pDiameter={30} dur={props.areSpinning ? '22.468s' : '0s'} start={leftStart} active={isActive} visible={areVisible} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={350} pDiameter={30} dur={props.areSpinning ? '36.526s' : '0s'} start={rightStart} active={isActive} visible={areVisible} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={425} pDiameter={15} dur={props.areSpinning ? '68.698s' : '0s'} start={leftStart} active={isActive} visible={areVisible} rDiameter={0} rDistance={0} rRotation={0}></Orbit>

            <Orbit className={visible} oDiameter={590} pDiameter={0} dur={props.areSpinning ? '70s' : '0s'} start={leftStart} active={isActive} visible={true} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={600} pDiameter={0} dur={props.areSpinning ? '72s' : '0s'} start={rightStart} active={isActive} visible={true} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={610} pDiameter={0} dur={props.areSpinning ? '74s' : '0s'} start={leftStart} active={isActive} visible={true} rDiameter={0} rDistance={0} rRotation={0}></Orbit>
            <Orbit className={visible} oDiameter={620} pDiameter={0} dur={props.areSpinning ? '76s' : '0s'} start={rightStart} active={isActive} visible={true} rDiameter={0} rDistance={0} rRotation={0}></Orbit>

            
            <Orbit className={visible} oDiameter={800} pDiameter={90} dur={props.areSpinning ? '433.271s' : '0s'} start={rightStart} active={isActive} visible={areVisible} rDiameter={props.visibleRings ? 1 : 0} rDistance={60} rRotation={357}></Orbit>
            <Orbit className={visible} oDiameter={990} pDiameter={80} dur={props.areSpinning ? '1075.144s' : '0s'} start={leftStart} active={isActive} visible={areVisible} rDiameter={40} rDistance={15} rRotation={334}></Orbit>
            <Orbit className={visible} oDiameter={1145} pDiameter={55} dur={props.areSpinning ? '3068.555s' : '0s'} start={rightStart} active={isActive} visible={areVisible} rDiameter={props.visibleRings ? 2 : 0} rDistance={25} rRotation={262}></Orbit>
            <Orbit className={visible} oDiameter={1270} pDiameter={50} dur={props.areSpinning ? '6015.565s' : '0s'} start={leftStart} active={isActive} visible={areVisible} rDiameter={props.visibleRings ? 15 : 0} rDistance={15} rRotation={332}></Orbit>
        </div>
    );
}

export default Background;