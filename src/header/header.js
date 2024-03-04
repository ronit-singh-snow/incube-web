import './Style.css';

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-pd">
        <a className="navbar-brand" href="#">
            {/* <img src={logo} width="64px" height="50px" alt="Incube IT Solutions" /> */}
            <div className="firm-name
            ">INCUBE IT Solutions</div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto nav-container">
                <a className="nav-item nav-link nav-item-container active" href="#home">Home</a>
                <a className="nav-item nav-link nav-item-container" href="#services">Services</a>
                <a className="nav-item nav-link nav-item-container" href="#recommendations">Recommendations</a>
            </div>
            <div className="">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Contact us</button>
            </div>
        </div>
    </nav>
};

export default Header;