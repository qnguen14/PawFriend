import React from 'react';
import DonatePic1 from '../../assets/images/donatePic1.png';
import DonatePic2 from '../../assets/images/donatePic2.png';
import Momo from '../../assets/images/momo.png';
import VNpay from '../../assets/images/vnpay.png';
import Banner from '../../components/common/banner/banner';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import './Donate.css';
const Donate = () => {
    return (
        <div>
            <Header />
            <Banner name="Donate" content="Donate" />

            <section className='about-us-section'>
                <div>
                    <div className='first-section'>
                        <div className='first-section-title'>
                            About <b>PawFriend</b>
                        </div>
                        <p>
                            <b>PawFriend</b> is a non-profit organization dedicated to
                            protecting and caring for abandoned animals.
                            We are committed to providing a better life for pets
                            through rescue programs and medical care.
                        </p>
                    </div>
                    <div>
                        <h1>What will Donation Fund used for ?</h1>
                        <p>
                            <h2>Provide food and safe shelter: </h2>
                            - Ensure pets have adequate nutrition and a safe living environment.
                            <h2>Provide food and safe shelter: </h2>
                            - Offer necessary medical check-ups and vaccinations.
                            <h2>Educational programs: </h2>
                            -Organize activities to raise -community awareness about animal rights.
                        </p>
                    </div>
                    <div className='donate-now-button'>
                        <button className='donate-now'>Donate now</button>
                        <div className='payment-methods'>
                            <img src={Momo} alt="Momo" />
                            <img src={VNpay} alt="VNpay" />
                        </div>
                    </div>
                </div>
                <img className='donate-pic' src={DonatePic1} alt="DonatePic1" />
            </section>

            <section className='donate-now-section'>
                <img src={DonatePic2} alt="DonatePic2" />
                <div className='fund-usage-policy'>
                    <div className='title'>Fund Usage Policy</div>
                    <p>
                        We commit that all contributions will be directly transferred to animal shelters
                        to carry out rescue and care activities. We maintain transparency in fund usage
                        and will publish annual financial reports for you to review.
                    </p>
                </div>
            </section>

            <section className='join-us-section'>
                <div>Join Us!</div>
                <p>Every contribution you make brings hope and a new life to pets.
                    Join us in making a difference!</p>
            </section>


            <Footer />
        </div>
    );
};

export default Donate;