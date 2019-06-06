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
            <Orbit className={visible} oDiameter={200} pDiameter={10} dur={isActive ? '8.796s' : '0s'} start={rightStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={275} pDiameter={30} dur={isActive ? '22.468s' : '0s'} start={leftStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={350} pDiameter={30} dur={isActive ? '36.526s' : '0s'} start={rightStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={425} pDiameter={15} dur={isActive ? '68.698s' : '0s'} start={leftStart} active={isActive} visible={areVisible}></Orbit>

            <Orbit className={visible} oDiameter={590} pDiameter={0} dur={isActive ? '70s' : '0s'} start={leftStart} active={isActive} visible={true}></Orbit>
            <Orbit className={visible} oDiameter={600} pDiameter={0} dur={isActive ? '72s' : '0s'} start={rightStart} active={isActive} visible={true}></Orbit>
            <Orbit className={visible} oDiameter={610} pDiameter={0} dur={isActive ? '74s' : '0s'} start={leftStart} active={isActive} visible={true}></Orbit>
            <Orbit className={visible} oDiameter={620} pDiameter={0} dur={isActive ? '76s' : '0s'} start={rightStart} active={isActive} visible={true}></Orbit>

            
            <Orbit className={visible} oDiameter={800} pDiameter={90} dur={isActive ? '433.271s' : '0s'} start={rightStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={990} pDiameter={80} dur={isActive ? '1075.144s' : '0s'} start={leftStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={1145} pDiameter={55} dur={isActive ? '3068.555s' : '0s'} start={rightStart} active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={1270} pDiameter={50} dur={isActive ? '6015.565s' : '0s'} start={leftStart} active={isActive} visible={areVisible}></Orbit>
        </div>
    );
}

export default Background;