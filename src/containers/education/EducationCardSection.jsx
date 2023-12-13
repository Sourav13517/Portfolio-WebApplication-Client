import React from "react";
import "./education.css";
import DgreeCard from "../../components/degreeCard/DegreeCard";
import { Fade } from "react-awesome-reveal";
const EducationCardSection = () => {
    return (
        <>
            <div class="degree">
                <Fade direction="up" duration={1000} triggerOnce>
                    <div className="heading">
                        <h1 >Degree Received</h1>
                    </div>
                </Fade>
                <DgreeCard />
                
            </div>
        </>
    );
}
export default EducationCardSection;