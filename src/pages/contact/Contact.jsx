import React from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactContainer from "../../containers/contact/ContactContainer";
import TopButton from "../../components/goTopButton/TopButton";
const Contact = ()=>{
    return(
        <>
            <Header/>
            <div className="main-wrapper">
                <ContactContainer/>
            </div>
            <Footer/>
            <TopButton/>
        </>
    );
}
export default Contact;