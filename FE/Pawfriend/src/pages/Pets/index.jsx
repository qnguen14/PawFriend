import React from 'react';
import './Pets.css';
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Image from "../../assets/images/dog-cat img.jpg";

function Pets() {
  return (
    <div className="pets-page">
      <Header className="pet-page-header"/>
      
      {/* Phần chứa hình ảnh và text chồng lên */}
      <div className="image-container">
        <img src={Image} alt="Dog and Cat" />
        
       
        <div className="text-overlay">
          <h1>PET LISTINGS</h1>
          <p>Home Pets</p>
          
        </div>
      </div>
      
      <div className="pet-contents">
      <h1>Adoption Guidelines</h1>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum arcu, vulputate eu dapibus et, ullamcorper a tortor. Fusce dignissim enim quam, ac vulputate nunc mollis quis. Suspendisse lacinia mauris ex, egestas porttitor magna egestas nec. Pellentesque faucibus cursus arcu eu feugiat. Vestibulum at facilisis nulla, vel facilisis turpis. Suspendisse diam nulla, ullamcorper id elit et, pretium hendrerit urna. Duis gravida vehicula tempor.
        Praesent volutpat, libero at efficitur cursus, est enim condimentum lacus, ac fermentum mi dolor vel quam. Donec scelerisque felis ante, in semper orci faucibus et. Phasellus laoreet mauris eu justo viverra congue. Donec ac elit justo. Donec ut sem nec sem malesuada faucibus et ut velit. Mauris congue metus at suscipit finibus. Mauris justo quam, congue eu est ac, bibendum posuere odio. Sed in ex porttitor, ultrices augue sit amet, elementum orci. Ut feugiat tortor vitae arcu commodo pulvinar. Mauris vehicula blandit dolor nec maximus.
        Suspendisse placerat consectetur viverra. Integer felis quam, rutrum at libero sed, mollis lobortis dui. In nisi nisl, varius euismod nibh at, gravida tempus ligula. Maecenas vel luctus nunc. Etiam vitae faucibus odio. Nulla sed quam sed libero consequat venenatis eget vel dolor. Quisque ut mi ac eros tincidunt facilisis. Sed sit amet aliquam quam, quis congue sapien. Nulla justo nunc, ultrices dapibus eros sit amet, blandit facilisis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec egestas mi, vitae mollis est. Nunc ac commodo nunc, vel porttitor purus. Sed consequat ultrices nunc mollis rhoncus. Praesent ullamcorper pellentesque lacus a sollicitudin. Etiam eleifend, ipsum sit amet vulputate tristique, massa leo rhoncus mauris, tincidunt consectetur quam dui vitae dolor.
      </p>
      </div>
      <div className="pet-listings-header">
        <h1>Pet Listings</h1>
        <div className="rectangles">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Pets;
