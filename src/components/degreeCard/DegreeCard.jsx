import React from "react";
import "./degreeCard.css";
import Buttom from "../buttom/Buttom";
import { degrees } from "../../PortfolioDetails";
import { Fade } from "react-awesome-reveal";
const DgreeCard = () => {
    let direction = "";
    const animation = (index)=>{
        if (index%2===0){
            direction = "left";
        }
        else{
            direction = "right";
        }
    }
    return (
        <>
            {degrees.degree.map((degree,index) => {
                {animation(index)}
                return (
                    <Fade direction={direction} duration={1000} triggerOnce>
                        <div className="degree_card">
                            <div className="degree_head">
                                <div className="head_title">
                                    <h3 className="card-title">{degree.institutionName}</h3>
                                    <h4 className="card-subtitle">{degree.degreeTitle}</h4>
                                </div>
                                <div class="time">
                                    <h4>{degree.duration}</h4>
                                </div>
                            </div>
                            <div class="degree_body">
                                {degree.remarks.map((remark) => {
                                    return (<p>{remark}</p>);
                                })}

                                {/* <div class="uni-visit">
                    <a href="#">
                        Visit
                    </a>
                </div> */}
                                <div className="degree-btn">
                                    <Buttom title="Marksheet"
                                    link={degree.marksheetLinks} 
                                    style={{backgroundColor:"rgba(14, 107, 168, 0.467)",border:"none",
                                    color:"rgb(0, 28, 85)"}} hover={false}/>
                                </div>
                            </div>

                        </div>
                    </Fade>
                );

            })}
        </>
    );
}
export default DgreeCard;