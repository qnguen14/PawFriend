import React from 'react';
import './Shelterpet.css';
import { FaSearch } from 'react-icons/fa';
import ImagePet from "../../../assets/images/pet.jpg";
const Shelterpet = () => {
    return (
        <div className="pet-page">
            <h2 className="title">Add New Pet</h2>
            
            <div className="form-and-image">
                <form className="pet-form">
                    <div className="form-container">
                        <label>
                            Name:
                            <input type="text" placeholder="Name" name="name" required />
                        </label>
                        <label>
                            Type:
                            <input type="text" placeholder="Type" name="type" required />
                        </label>
                        <label>
                            Breed:
                            <input type="text" placeholder="Breed" name="breed" required />
                        </label>
                        <label>
                            Age:
                            <input type="text" placeholder="Age" name="age" required />
                        </label>
                        <label>
                            Date:
                            <input type="date" name="date" required />
                        </label>
                        <button type="button" className="upload-btn">Upload Image</button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
                <div className="pet-image-container">
                    <img src={ImagePet} alt="Pet" className="pet-image" />
                </div>
            </div>

            <div className="search-area">
                <div className="search-input-container">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search pets..." className="search-input" />
                </div>
            </div>

            <h3 className="pet-list-title">Pet List</h3>
            <div className="pet-list">
                <button className="pet-category active">Dogs</button>
                <button className="pet-category">Cats</button>
            </div>
        </div>
    );
};

export default Shelterpet;
