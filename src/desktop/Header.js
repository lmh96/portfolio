import React from "react";
import { Link } from "react-router-dom"

import "./css/Header.css";

function Header(props) {
    return (
        <header>
            <h1 className="title">Logan Hill</h1>
            <div className="linkedin-and-git">
                <a className="git" href="https://github.com/lmh96" target="__blank"><i className="fab fa-github-square"></i></a>
                <a className="linkedin" href="https://www.linkedin.com/in/logan-hill-86828b166/" target="__blank"><i className="fab fa-linkedin"></i></a>
            </div>
            <nav>


                <button className='navBtn' onClick={props.aboutClick}>
                    <Link
                        to={window.location.pathname === "/about" ? "/" : "/about"} 
                        className="navBtn"
                    >
                        About
                </Link>
                </button>
                <button className='navBtn' onClick={props.projectClick}>
                    <Link
                        to={window.location.pathname === "/projects" ? "/" : "/projects"}
                        className="navBtn"
                    >
                        Projects
                </Link>
                </button>
            </nav>
        </header>
    )
}

export default Header;