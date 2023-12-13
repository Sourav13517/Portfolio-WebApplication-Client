import React from "react";
import "./intro.css";
import { Fade } from "react-awesome-reveal";
import Buttom from "../../components/buttom/Buttom";
import { intro } from "../../PortfolioDetails";
const Intro = () => {
    return (
        <>
            <Fade direction="up" duration={2000} triggerOnce>
                <div className="content">
                    <div className="content-details">
                        <h3>Welcome! I'm</h3>
                        <h1>{intro.name}</h1>
                        <p>{intro.introPhrase}</p>
                        <div className="intro-btn">
                            <Buttom link = {intro.resume_link} title="See my Resume" hover={true}/>
                        </div>
                    </div>
                    <div className="profile-pic">
                        <img src={require("../../assests/images/photo_2.jpg")} alt="profile-pic"></img>
                    </div>
                </div>

            </Fade>
        </>
    );
}
export default Intro;