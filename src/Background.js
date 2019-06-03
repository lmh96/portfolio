import React from "react";
import Orbit from './Orbit';

import "./Background.css";

function Background(props) {
    let visible = 'orbit';
    let isActive = true;
    let areVisible = true;

    if(props.className === 'bgTop') {
        isActive = false;
    }
    else {
        isActive = true;
    }

    let borderClick = () => {
        if(areVisible) {
            areVisible = false;
        }
        else {
            areVisible = true;
        }
    }

    return (
        <div className={props.className}>
            <button className="center" onClick={borderClick}></button>
            <Orbit className={visible} oDiameter={200} pDiameter={20} dur={'8.796s'} start='right' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={275} pDiameter={30} dur={'22.468s'} start='left' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={350} pDiameter={30} dur={'36.526s'} start='right' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={425} pDiameter={25} dur={'68.698s'} start='left' active={isActive} visible={areVisible}></Orbit>

            <Orbit className={visible} oDiameter={590} pDiameter={0} dur={'70s'} start='left' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={600} pDiameter={0} dur={'72s'} start='right' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={610} pDiameter={0} dur={'74s'} start='left' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={620} pDiameter={0} dur={'76s'} start='right' active={isActive} visible={areVisible}></Orbit>

            
            <Orbit className={visible} oDiameter={800} pDiameter={80} dur={'433.271s'} start='right' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={960} pDiameter={60} dur={'1075.144s'} start='left' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={1095} pDiameter={55} dur={'3068.555s'} start='right' active={isActive} visible={areVisible}></Orbit>
            <Orbit className={visible} oDiameter={1220} pDiameter={50} dur={'6015.565s'} start='left' active={isActive} visible={areVisible}></Orbit>
        </div>
    );
}

export default Background;