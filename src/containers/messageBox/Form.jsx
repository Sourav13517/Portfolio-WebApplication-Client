import React, { useState } from "react";
import "./form.css";
import Input from "../../components/inputBox/Input";
import TextArea from "../../components/inputBox/TextArea";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const handleOnchange = (value, inputName) => {
        setData({ ...data, [inputName]: value })
        // if (inputName === "name") {
        //     setData((pre) => {
        //         return {
        //             name: data,
        //             email: pre.email,
        //             phone: pre.phone,
        //             message: pre.message
        //         }
        //     })
        // }
        // if (inputName === "email") {
        //     setData((pre) => {
        //         return {
        //             name: pre.name,
        //             email: data,
        //             phone: pre.phone,
        //             message: pre.message
        //         }
        //     })
        // }
        // if (inputName === "phone") {
        //     setData((pre) => {
        //         return {
        //             name: pre.name,
        //             email: pre.email,
        //             phone: data,
        //             message: pre.message
        //         }
        //     })
        // }
        // if (inputName === "message") {
        //     setData((pre) => {
        //         return {
        //             name: pre.name,
        //             email: pre.email,
        //             phone: pre.phone,
        //             message: data

        //         }
        //     })
        // }
    }
    const handleOnSumbit = async (e) => {
        // e.preventDefault();
        // try{
        //     const responce = await axios.post("/",{
        //         key:data
        //     })
        // }
        // catch(err){
        //     console.log(err);
        // }

        const userData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        };
        
        axios.defaults.withCredentials = true;
        try {
            e.preventDefault();
            await axios.post(process.env.REACT_APP_SERVER_URL + "/api/user/push", userData).then((response) => {
                if(response.status===200){
                    window.alert("Message Send Successfully ;)");
                    console.log(response);
                }
                
            });
        } catch (error) {
            window.alert(error);
        }
        // window.alert("Message Send Successfully ;)");
        setData(
            {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        )
    }
    return (
        <>
            <Fade direction="down" duration={1000} triggerOnce>
                <div className="form-main-div">

                    <form action="POST">
                        <Fade direction="left" duration={1800} triggerOnce>
                            <Input key={1} name="name" value={data.name} onChange={handleOnchange} type="text" placeholder="Enter your name" />
                        </Fade>
                        <Fade direction="right" duration={1800} triggerOnce>
                            <Input key={2} name="email" value={data.email} onChange={handleOnchange} type="email" placeholder="Enter your email adress" />
                        </Fade>
                        <Fade direction="left" duration={1800} triggerOnce>
                            <Input key={3} name="phone" value={data.phone} onChange={handleOnchange} type="number" placeholder="Enter phone number" />
                        </Fade>
                        <Fade direction="right" duration={1800} triggerOnce>
                            <TextArea key={4} value={data.message} onChange={handleOnchange} name="message" />
                        </Fade>
                        <div className="form-btn">
                            <Fade direction="up" duration={2000} triggerOnce>
                                <button className="btn" onClick={handleOnSumbit} type="submit">Send Message</button>
                            </Fade>
                        </div>
                    </form>


                </div>
            </Fade>
        </>
    );
}
export default Form;