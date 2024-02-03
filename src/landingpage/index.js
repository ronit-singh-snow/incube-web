import React from 'react';
import BG from "../../public/Asset/rm218-bb-04.jpg";
import Header from '../header/header.js';
import Style from './Style.css';

const LandingPage = () => {
    return <div className='landing-page' id="home" style={
                {
                    backgroundImage: `url(${BG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }
            }>
            <Header />
        <div className='lp-wrapper'>
            <div className='headline'>Works for you!</div>
            <div className='headine-msg'>We help orgranisations transform their business with our expert consultancy services. Currently we are majoury focussed on providing Service and Support for Servicenow only.</div>
            <span className='headine-msg'>Know more about our services </span>
            <a href="#">here</a>
        </div>
    </div>
}

export default LandingPage;