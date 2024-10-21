import React from "react";
import "./RegisterBanner.css";

const RegisterBanner = () => {
    return (
        <div>
            <section className='register-container'>
                <div className='register-section'>
                    <div className='register-content'>
                        <h2>Create Your Free Account Today</h2>
                        <p>
                            The best way to save a beloved pet is to keep them out of the shelter system.
                            Rehoming a dog, cat or rabbit is a better kind of pet adoption, in every way.
                        </p>
                    </div>
                    <button className='register-button'>REGISTER</button>
                </div>
            </section>
        </div>
    );
};

export default RegisterBanner;