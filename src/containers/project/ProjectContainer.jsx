import React from "react";
import "./project.css";
import ProjectImg from "./ProjectImg";
import { projects } from "../../PortfolioDetails";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "../../components/projectCard/ProjectCard";

const ProjectContainter = () => {
    return (
        <div className="projects">
            <Fade direction="up" duration={1000} triggerOnce>
                <div className="layer1">
                    <div className="pro_image">
                        <ProjectImg />
                    </div>
                    <div className="pro_content">
                        <h1>
                            Projects
                        </h1>
                        <p>
                            {projects.intro}
                        </p>
                    </div>
                </div>
            </Fade>
            <div className="project-main-card">
                {projects.project.map((proj) => {
                    return(<ProjectCard project={proj} />);
                })}
            </div>

        </div>
    );
}
export default ProjectContainter;