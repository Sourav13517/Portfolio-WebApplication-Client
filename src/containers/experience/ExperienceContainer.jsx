import React from "react";
import "./experience.css"
import ExperienceImg from "./ExperienceImg";
import { Fade } from "react-awesome-reveal";
import { experiences } from "../../PortfolioDetails";
const ExperienceContainer = () => {
    return (
        <>
            <div className="experience">
                <Fade direction="up" duration={1000} triggerOnce>
                    <div className="layer1">
                        <div className="exp_image">
                            <ExperienceImg />
                        </div>
                        <div className="exp_content">
                            <h1>
                                Experience
                            </h1>
                            <p>
                                {experiences.intro}
                            </p>
                        </div>
                    </div>
                </Fade>

            </div>
        </>
    );
}
export default ExperienceContainer;