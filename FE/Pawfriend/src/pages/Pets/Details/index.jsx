import React from "react";
import Header from "../../../components/common/header/Header";
import "../Pets.css";

const PetDetails = () => {
    const { petId } = useParams();

    return (
        <div>
            <Header />
            <h1>Details for {petId}</h1>
            {/* Add more details here */}
            <Footer />
        </div>
    );
};

export default PetDetails;