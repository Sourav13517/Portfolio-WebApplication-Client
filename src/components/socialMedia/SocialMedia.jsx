import React from "react";
import "./socialMedia.css";
import { Icon } from '@iconify/react';
const SocialMedia = (props)=>{
    return (
        <div className="social-div">
            {
                props.medias.map((media)=>{
                    return(
                        <a href={media.link} title={media.title} className="media" target="_blank" rel="noreferrer">
                            <div className="media-div">
                                <Icon icon={media.logo} style={media.style}/>
                            </div>
                        </a>
                    );
                })
            }
        </div>
    );
}

export default SocialMedia;