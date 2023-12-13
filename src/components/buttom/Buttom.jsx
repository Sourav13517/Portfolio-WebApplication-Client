import React from "react";
import "./buttom.css";
import { NavLink } from "react-router-dom";
const Buttom = (props)=>{
    const handleOnMouseEnter = (event)=>{
        const evt = event.target;
        evt.style.color = "rgb(0, 28, 85)";
        evt.style.backgroundColor = "#EDF9FE"
    }
    const handleOnMouseOut = (event)=>{
        const evt = event.target;
        evt.style.color = "#EDF9FE";
        evt.style.backgroundColor = "rgb(0, 28, 85)"
    }
    return(
        <NavLink target="_blank" rel="noreferrer" to={props.link}  style={props.style}  className="btn"
        onMouseEnter={props.hover?handleOnMouseEnter:null} type="submit"
        onMouseOut={props.hover?handleOnMouseOut:null}>{props.title}</NavLink>
    );
}
export default Buttom;