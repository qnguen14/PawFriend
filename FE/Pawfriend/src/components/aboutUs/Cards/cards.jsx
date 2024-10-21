import React from "react";
import "./cards.css";

const Cards = ({ image, title, description }) => {
    return (
        <div className="cards">
            <img src={image} alt={title} className="cards-img" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Cards;
