import React from "react";
import catImage from "../../assets/images/cat 1.png";
import Banner from "../../components/common/banner/banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import AdoptionGuidelines from "../../components/petListingsComponents/adoptionGuidelines/adoptionGuidelines";
import PetCards from "../../components/petListingsComponents/petCards/petCards";
import PetListingHeader from "../../components/petListingsComponents/petListings/Header/petListingHeader";
import PetPages from "../../components/petListingsComponents/petPages/petPages";
import "./Pets.css";

function Pets() {
  return (
    <div className="pets-page">
      <Header className="pet-page-header" />

      {/* Phần chứa hình ảnh và text chồng lên */}
      <Banner name="Pet Listings" content="Pet Listings" />
      <AdoptionGuidelines />
      <PetListingHeader />
      <PetCards
        name="Lemon"
        breed="Tabby"
        sex="Female"
        neutered={true}
        location="Place"
        date="xx/xx/2024"
        imgSrc={catImage}
      />
      <PetPages />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Pets;
