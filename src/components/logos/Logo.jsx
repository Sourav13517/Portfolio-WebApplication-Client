import React from "react";
import "./logo.css"
import { Icon } from '@iconify/react';
const Logo = (props) => {
    return (
            <div className="skills-web-icons">
                {props.logos.map((logo,index) => {
                    return(
                        <div key={index} className="icons">
                            <Icon icon={logo.logo} style={logo.style}/>
                        </div>
                    );
                })}
            </div>
    );
}
export default Logo;
