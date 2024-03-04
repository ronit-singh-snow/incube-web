import LandingPage from './landingpage/index.js';
import Services from './services/Services.js';
import AboutUs from './aboutus/Aboutus.js';
import Recommendations from './recommendation/Recommendations.js';
import './App.css';
import Footer from './footer/Footer.js';

function App() {
  return (
    <div className="page-wrapper">
        <LandingPage />
        <Services />
       
        <Recommendations />
        <Footer />
    </div>
  );
}

export default App;
