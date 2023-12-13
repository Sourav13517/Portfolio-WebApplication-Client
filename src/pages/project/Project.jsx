import React from "react";
import "./project.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectContainter from "../../containers/project/ProjectContainer";
import TopButton from "../../components/goTopButton/TopButton";

const Project = ()=>{
    return(
        <>
            <Header/>
            <div className="main-wrapper">
                <ProjectContainter/>
            </div>
            <Footer/>
            <TopButton/>
        </>
    );
}
export default Project;