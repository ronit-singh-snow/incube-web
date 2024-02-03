import React from 'react';

import LandingPage from './landingpage/index.js';
import Services from './Services/Services.js';
import AboutUs from './aboutus/Aboutus.js';
import Styles from './Style.css';

const App = () => {
    return <div className="page-wrapper">
        <LandingPage />
        <Services />
        <AboutUs />
    </div>
}

export default App;