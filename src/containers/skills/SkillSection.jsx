import React from "react";
import "./skills.css";
import {skills} from "../../PortfolioDetails";
import { Fade } from "react-awesome-reveal";
import Logo from "../../components/logos/Logo";
const SkillSection = () => {
    return (
        <div>
            {
                skills.data.map((skill,index) => {
                    return (
                        <div key={index} className="skill">
                            <Fade direction="left" duration={1000} triggerOnce>
                                <h2>{skill.title}</h2>
                            </Fade>
                            <Fade direction="right" duration={2000} triggerOnce>
                                <Logo logos={skill.softwareSkills} />
                            </Fade>
                            <Fade direction="up" duration={3000} triggerOnce>
                                {skill.skillPhases.map((sentence,index) => {
                                    return (
                                        <p key={index}>{sentence}</p>
                                    )
                                })}
                            </Fade>
                        </div>
                    )
                }
                )}
        </div>
    );
}
export default SkillSection;