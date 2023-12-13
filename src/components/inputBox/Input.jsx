import React from "react";
import "./input.css";
const Input = (props)=>{
    const handleOnchange = (e)=>{
        props.onChange(e.target.value,e.target.name);
    }
    
    return(
        <>
            <div className="input-box">
                <input
                onChange={handleOnchange} type={props.type} placeholder={props.placeholder} name={props.name} value={props.value}></input>
            </div>
        </>
    );
}
export default Input;