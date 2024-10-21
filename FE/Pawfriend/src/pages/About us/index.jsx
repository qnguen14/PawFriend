import React from 'react';
import aboutUsImage from '../../assets/images/aboutUs.png';
import CardsImage from '../../assets/images/aboutUsCards.png';
import Cards from '../../components/aboutUs/Cards/cards';
import Banner from '../../components/common/banner/banner';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import RegisterBanner from '../../components/features/HomeComponents/registerbanner/RegisterBanner';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <Banner name="About Us" content="About Us" />
            <section className="about-us-content">
                <div className='text-content'>
                    <h1>Welcome to <b>PawFriend</b>,</h1>
                    <p>
                        your trusted companion in finding forever homes for pets in need. At PawFriend,
                        we believe that every pet deserves a loving family, and we are dedicated to making
                        that connection happen. Our mission is simple: to bring together caring individuals
                        and rescue animals to create heartwarming stories of adoption, companionship, and love.
                    </p>
                </div>
                <img src={aboutUsImage} alt="about-us-image" />
            </section>

            <section className='who-we-are'>
                <img src={aboutUsImage} alt="about-us-image" />
                <div className='who-we-are-text'>
                    <h1>Who we are?</h1>
                    <p>PawFriend is a community-driven pet adoption platform built with compassion and care.
                        We work closely with shelters, rescue organizations, and animal lovers to help pets
                        find a second chance at happiness. Our team is passionate about animal welfare, and
                        we are committed to making the adoption process smooth, transparent, and rewarding for
                        both adopters and pets.</p>
                </div>
            </section>

            <div className='why-choose'><p2>Why Choose <b>PawFriend</b>?</p2></div>

            <section className='cards-container'>
                <Cards image={CardsImage}
                    title="Support Addoption"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In ut augue eget nulla rutrum ullamcorper non ac urna.
                In auctor odio eget pulvinar interdum. Fusce nec condimentum
                tellus. " />

                <Cards image={CardsImage}
                    title="Ethical Partnerships"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In ut augue eget nulla rutrum ullamcorper non ac urna.
                In auctor odio eget pulvinar interdum. Fusce nec condimentum
                tellus. " />

                <Cards image={CardsImage}
                    title="Post-Adoption Care"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In ut augue eget nulla rutrum ullamcorper non ac urna.
                In auctor odio eget pulvinar interdum. Fusce nec condimentum
                tellus. " />
            </section>

            <RegisterBanner />

            <Footer />
        </div>
    );
};

export default AboutUs;
