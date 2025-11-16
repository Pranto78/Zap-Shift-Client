import React from 'react';
// import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../components/Banner/Banner';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import OurService from '../../components/OurService/OurService';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurService></OurService>
            
        </div>
    );
};

export default Home;