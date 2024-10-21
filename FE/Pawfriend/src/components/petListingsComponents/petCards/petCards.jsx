import React from "react";
import petImage from "../../../assets/images/cat 1.png";
import "./petCards.css";

const PetCards = ({ name, breed, sex, neutered, location, date, imgSrc }) => {
  return (
    <section className="pet-listings">
      <div className="cards-container">
        {[...Array(16)].map((_, index) => (
          <div key={index} className="listCard pet-card">
            <div className="pet-card-header">
              <img
                src={petImage}
                alt={"lemon"}
                className="card-img-top pet-image"
              />
            </div>

            {/* Pet Info */}
            <div className="card-body">
              <h5 className="pet-name">{name}</h5>
              <p className="pet-info">
                <strong>Breed:</strong> {breed}
              </p>
              <p className="pet-info">
                <strong>Sex:</strong> {sex}
              </p>
              <p className="pet-info">
                <strong>Neutered:</strong> {neutered ? "Yes" : "No"}
              </p>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <div>
                <i className="fas fa-map-marker-alt"></i> {location}
              </div>
              <div>{date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCards;
