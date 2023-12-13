import React from "react";
import "./topButton.css";
import { Icon } from '@iconify/react';
const TopButton = () => {
    const handleOnClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function scrollFunction() {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            document.getElementById("top-Button").style.visibility = "visible";
        } else {
            document.getElementById("top-Button").style.visibility = "hidden";
        }
    }

    window.onscroll = function () {
        scrollFunction();
    };
    return (
        <div id="top-Button" onClick={handleOnClick} title="Go Top"
            style={{
                backgroundColor: "#001c55",
            }}>
            <Icon id="arrow" icon="mingcute:arrow-up-fill" color="#EDF9FE" height="2rem"/>
        </div>
    );





}

export default TopButton;