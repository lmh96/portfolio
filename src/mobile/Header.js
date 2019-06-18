import React from "react";

import "./css/Header.css";

function Header(props) {
    let menuCSS = {
        height: props.menuHeight,
    }
    return (
        <header id="mobile-header">
            <h1 id="mobile-title">Logan Hill</h1>
            <button id="mobile-nav-expand" onClick={props.showHideClick}>{props.menuHeight === 0 ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</button>
            <div id="mobile-header-buttons" style={menuCSS}>
                <div id="mobile-linkedin-and-git">
                    <a id="mobile-git" href="https://github.com/lmh96" target="__blank"><i className="fab fa-github-square"></i></a>
                    <a id="mobile-linkedin" href="https://www.linkedin.com/in/logan-hill-86828b166/" target="__blank"><i className="fab fa-linkedin"></i></a>
                </div>
                <nav id="mobile-nav">
                    <button className='mobile-navBtn' onClick={props.aboutClick}>
                        About
                </button>
                    <button className='mobile-navBtn' onClick={props.projectClick}>
                        Projects
                </button>
                </nav>
            </div>
            <div id={props.menuHeight === 0 ? 'hide-nav-hidden' : 'hide-nav'} onClick={props.showHideClick}>
            </div>
        </header>
    )
}

export default Header;