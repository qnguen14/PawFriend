import FindPet from "../../components/findpets/FindPet";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Login from "../../components/login/Login";
import React, { useState } from 'react';
const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };
  return (
    <div>
    <Header onLoginClick={handleLoginClick} />
    <Slider />
    <FindPet />
    <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />
  </div>
  );
};

export default Home;