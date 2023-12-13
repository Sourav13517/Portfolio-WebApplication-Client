import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Intro from "../../containers/intro/Intro";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/goTopButton/TopButton";
const About = () => {
    return (
        <div>
            <Header />
            <div className="main-wrapper">
                <Intro />
                <Skills />
            </div>
            <Footer />
            <TopButton />
        </div>
    );
}
export default About;