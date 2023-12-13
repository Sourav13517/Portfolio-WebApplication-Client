import React from "react";
import "./header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

function Header() {
    const handleOnMouseEnter = (event) => {
        const temp = event.target;
        temp.style.padding = "15px 15px";
        temp.style.backgroundColor = "#A6E1FA";
    }
    const handleOnMouseOut = (event) => {
        const temp = event.target;
        temp.style.padding = 0;
        temp.style.backgroundColor = "transparent";
    }
    const handleOnClick = ()=>{
        const content = document.querySelector(".main-wrapper");
        if (document.getElementById("check-box").checked){
            content.style.marginTop = "340px";
        }
        else{
            content.style.marginTop = "0";
        }
    }
    return (
        < Fade direction="down" duration={500}>
            <header className="header">
                <NavLink to="/" className="logo">
                    <span style={{ color: "#001C55", fontSize: "1.9em" }}>&lt;</span>
                    <span className="logo-name" style={{ color: "#001C55" }}>Portfolio</span>
                    <span style={{ color: "#001C55", fontSize: "1.9em" }}>/&gt;</span>

                </NavLink>
                <input className="input-btn" type="checkbox" id="check-box" onChange={handleOnClick} />
                <label for="check-box" className="menu-btn" >
                    <div className="btn-list">
                        <Icon icon="line-md:menu" id="menu-open" className="btn-lcon"/>
                        <Icon icon="akar-icons:cross" id="menu-close" className="btn-lcon"/>
                    </div>
                </label>
                <nav className="navbar">
                    <ul className="nav_menu" >
                        <li>
                            <NavLink  className="nav-link" to="/" style={{ color: "#001C55" }}
                                onMouseEnter={handleOnMouseEnter}
                                onMouseOut={handleOnMouseOut}>
                                AboutMe
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/education" style={{ color: "#001C55" }}
                                onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/experience" style={{ color: "#001C55" }}
                                onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className="nav-link" to="/project" style={{ color: "#001C55" }}
                                onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className="nav-link" to="/contact" style={{ color: "#001C55" }}
                                onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                

            </header>
        </Fade>
    )
}
export default Header;