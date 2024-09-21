import React from "react";
import "./FindPet.css";

export default function FindPet() {
  return (
    <div className="pet-adopt-section">
      <h2>Find a pet to adopt</h2>

      <div className="pet-buttons">
        <button className="dog-button">Dog</button>
        <button className="cat-button">Cat</button>
      </div>

      <div className="breed-selectors">
        <div>
          <p>Select breed</p>
          <select className="breed-select">
            <option>...</option>
            {/* Other options */}
          </select>
        </div>
        <div>
          <p>Select breed</p>
          <select className="breed-select">
            <option>...</option>
            {/* Other options */}
          </select>
        </div>

        <button className="find-button">Find</button>
      </div>
    </div>
  );
}
