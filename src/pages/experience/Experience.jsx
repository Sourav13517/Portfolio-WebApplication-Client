import React from "react";
import "./experience.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceContainer from "../../containers/experience/ExperienceContainer";
import TopButton from "../../components/goTopButton/TopButton";
const Experience = ()=>{
    return(
        <>
            <Header/>
            <div className="main-wrapper">
                <ExperienceContainer/>
            </div>
            <Footer/>
            <TopButton/>
        </>
    );
}
export default Experience;