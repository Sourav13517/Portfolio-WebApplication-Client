import React from "react";
import "./education.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EducationImg from "./EducationImg";
import { compitativeLinks } from "../../PortfolioDetails";
import EducationCardSection from "../../containers/education/EducationCardSection";
import { Fade } from "react-awesome-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TopButton from "../../components/goTopButton/TopButton";
const Education = () => {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="education">
                    <Fade direction="up" duration={1000} triggerOnce>
                        <div className="layer1">
                            <EducationImg />
                            <div className="edu_content">
                                <h1>Education</h1>
                                <h3>Basic Qualification & Certification</h3>
                                <SocialMedia medias = {compitativeLinks.links}/>
                            </div>
                        </div>
                    </Fade>
                    <EducationCardSection />
                </div>
            </div>
            <Footer />
            <TopButton/>
        </>
    );
}
export default Education;