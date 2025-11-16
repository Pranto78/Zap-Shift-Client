import React from 'react';
// import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../components/Banner/Banner';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import OurService from '../../components/OurService/OurService';
import Brand from '../../components/Brand/Brand';
import Reviews from '../../components/Reviews/Reviews';

const reviewPromise = fetch('/reviews.json').then(res=>res.json());

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurService></OurService>
            <Brand></Brand>
            <Reviews reviewPromise={reviewPromise}></Reviews>
            
        </div>
    );
};

export default Home;