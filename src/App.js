import React from 'react';
import logo from '../public/Asset/incube-light.png';
import Style from './Style.css';


const App = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-pd">
            <a className="navbar-brand" href="#">
                <img src={logo} width="64px" height="50px" alt="Incube IT Solutions" />
                <div>
                    <div>INCUBE</div>
                    <div>IT Solutions</div>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">About</a>
                    <a className="nav-item nav-link" href="#">Services</a>
                    <a className="nav-item nav-link" href="#">Solutions</a>
                </div>
                <div className="">
                    <button className="btn btn-primary">Contact us</button>
                </div>
            </div>
    </nav>
}

export default App;