//navbar
import React from "react";
const Nav = () => {
    return (
        <div className="nav">
            <h1 id="navicon">&#9776;</h1>
            <div className="nav-modal navr" id="navmodal">
                <ul>
                    <li href="#skills">Skills</li>
                    <hr></hr>
                    <li href="#about">About</li>
                    <hr></hr>
                    <li href="#projects">Projects</li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;