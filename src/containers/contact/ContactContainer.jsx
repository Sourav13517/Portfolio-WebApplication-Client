import React from "react";
import "./contact.css";
import { Fade } from "react-awesome-reveal";
import ContactImg from "./ContactImg";
import { contactDetails } from "../../PortfolioDetails";
import Buttom from "../../components/buttom/Buttom";
import Form from "../messageBox/Form";
import SocialMedia from "../../components/socialMedia/SocialMedia";
const ContactContainer = () => {
    return (
        <div className="contact">
            <Fade direction="up" duration={1000} triggerOnce>
                <div className="layer1">
                    <div className="contact_image">
                        <ContactImg />
                    </div>
                    <div className="contact-header-content">
                        <h1>Get In Touch</h1>
                        <p>{contactDetails.intro}</p>
                            <SocialMedia medias={contactDetails.socialMedia}/>
                        <div className="address">
                            <h2>Address</h2>
                            <p>{contactDetails.address.title}</p>

                            <Buttom link={contactDetails.address.link} title="Visit on Google Map" hover={true} />

                        </div>
                    </div>
                </div>
            </Fade>
            <div className="contact-body">
                <Fade direction="up" duration={1000} triggerOnce>
                    <h2>Leave your message</h2>
                </Fade>
                <Form />
            </div>
        </div>
    );
}
export default ContactContainer;