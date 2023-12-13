import React from "react";
import "./projectCard.css";
import Logo from "../logos/Logo";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const ProjectCard = (props) => {
    return (
        <>
            <NavLink to={props.project.link} className="pro-card-main">
                <Fade direction="up" duration={2000} triggerOnce>
                    <div className="title">
                        <h3>{props.project.title.length > 36 ? props.project.title.substring(0, 35) + "..." : props.project.title}</h3>
                    </div>
                    <div className="project-despription">
                        <p>{props.project.description.length > 70 ? props.project.description.substring(0, 69) + "..." : props.project.description}</p>
                    </div>
                    <div className="project-details">
                        <div className="project-date">
                            <p>{"Created on " + props.project.date}</p>
                        </div>
                        <div>
                            <Logo logos={props.project.languages} />
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </>
    );
}
export default ProjectCard;
