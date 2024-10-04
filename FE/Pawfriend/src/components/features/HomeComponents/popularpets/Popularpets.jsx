import React from "react";
import "./Popularpets.css";

export default function Popularpets() {
  return (
    <div className="container-popular">
      <div className="container-popular-title">
        <h1>Search for popular pets</h1>
        <p>
          Whilst you browse our page, we thought you'd like to check out these
          popular pet searches!
        </p>
      </div>
      <div className="popular-list">
        <div className="card-small">
          <div className="card-popular-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-popular-info">
            <h2>Small Cat</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card-large">
          <div className="card-popular-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-popular-info">
            <h2>Big Cat</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card-large">
          <div className="card-popular-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-popular-info">
            <h2>Big Dog</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card-small">
          <div className="card-popular-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-popular-info">
            <h2>Small Dog</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
