import React from "react";
import "./Featurepets.css";


export default function Featurepets() {
  return (
    <div className="container-feature">
      <h1>Featured Pets</h1>

      <div className="feature-list">
        <div className="card-feature">
          <div className="card-feature-img-container"></div>
          <div className="card-feature-info">
            <p className="card-feature-breed">Giống loài</p>
            <h2 className="card-feature-name">Tên</h2>
            <p className="card-feature-place">
              <i className="fa fa-map-marker"></i> Nơi
            </p>
            <p className="card-feature-date">xx/xx/2024</p>
          </div>
        </div>

        <div className="card-feature">
          <div className="card-feature-img-container"></div>
          <div className="card-feature-info">
            <p className="card-feature-breed">Giống loài</p>
            <h2 className="card-feature-name">Tên</h2>
            <p className="card-feature-place">
              <i className="fa fa-map-marker"></i> Nơi
            </p>
            <p className="card-feature-date">xx/xx/2024</p>
          </div>
        </div>

        <div className="card-feature">
          <div className="card-feature-img-container"></div>
          <div className="card-feature-info">
            <p className="card-feature-breed">Giống loài</p>
            <h2 className="card-feature-name">Tên</h2>
            <p className="card-feature-place">
              <i className="fa fa-map-marker"></i> Nơi
            </p>
            <p className="card-feature-date">xx/xx/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
