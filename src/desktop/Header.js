import React from "react";
import { Link } from "react-router-dom";

import "./css/Header.css";

function Header(props) {
    let bgColor = "rgba(37,37,37,0.8)";

    return (
        <header>
            <h1 className="headerTitle" onClick={props.titleClick}>
                <Link to="/" className="headerLink">
                    Logan Hill
                </Link>
            </h1>
            {props.isMobile ?
                <button className={props.showMenu ? "fas fa-times headerButton" : "fas fa-bars headerButton"} onClick={props.menuClick}>

                </button>
                :
                null
            }
            <div className="headerNavContainer" style={props.showMenu ? { maxHeight: 257, height: 257 } : { maxHeight: 0, height: 0 }}>
                <div className="linkedin-and-git">
                    <a className="git" href="https://github.com/lmh96" target="__blank"><i className="fab fa-github-square"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/logan-hill-86828b166/" target="__blank"><i className="fab fa-linkedin"></i></a>
                </div>
                <nav>
                    <Link to="/about" className="headerLink">
                        <button className="aboutBtn" onClick={props.aboutClick}>
                            About
                        </button>
                    </Link>
                    <Link to="/projects" className="headerLink">
                        <button className="projectsBtn" onClick={props.projectsClick}>
                            Projects
                        </button>
                    </Link>
                </nav>
            </div>
            {props.showMenu && props.isMobile ?
                <button className="headerClose" onClick={props.menuClick}>

                </button>
                :
                null
            }
        </header>
    );
}

export default Header;