import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import Education from "../pages/education/Education";
import Project from "../pages/project/Project";
import Contact from "../pages/contact/Contact";
import Error404 from "../pages/errorPage/Error404";
const Main = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element = {
                    <About/>}/>
                <Route path="/experience" Component={Experience} />
                <Route path="/education" Component={Education} />
                <Route path="/project" Component={Project} />
                <Route path="/contact" Component={Contact} />
                <Route path="*" Component={Error404} />
            </Routes>
        </>
    );
}
export default Main;