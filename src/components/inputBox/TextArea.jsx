import React from "react";
import "./input.css";
const TextArea = (props)=>{
    const handleOnchange = (e)=>{
        props.onChange(e.target.value,e.target.name);
    }
    return(
        <>
            <div className="input-box">
                <textarea onChange={handleOnchange} value={props.value}
                name={props.name} id="" rows="4" placeholder="Your message" ></textarea>
            </div>
        </>
    );
}
export default TextArea;