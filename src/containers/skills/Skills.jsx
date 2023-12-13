import React from "react";
import "./skills.css"
import { Fade } from "react-awesome-reveal";
import SkillSection from "./SkillSection";
const Skills = () => {
    return (
        <>
            <div className="skills">
                <Fade direction = "up" duration={1000} triggerOnce>
                    <div id="skills-heading">
                        <h1>What I Can Offer You?</h1>
                    </div>
                </Fade>
                <div className="skill-container">
                    <SkillSection/>
                </div>
                

            </div>
        </>
    );
}
export default Skills;