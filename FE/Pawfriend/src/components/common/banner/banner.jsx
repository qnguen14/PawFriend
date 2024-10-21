import React from "react";
import Image from "../../../assets/images/dog-cat img.jpg";
import "./banner.css";

const Banner = ({ name, content }) => {
    return (
        <div className="image-container">
            <img src={Image} alt="Dog and Cat" />

            <div className="text-overlay">
                <h1>{name}</h1>
                <p>
                    Home &gt; <b>{content}</b>
                </p>
            </div>
        </div>
    );
};

export default Banner;
