import './Style.css';
import BlackLogo  from '../Asset/incube - black.png';

const Footer = () => {
    return <footer>
        <div className='footer-container'>
            <div>
                <img width='64px' height='50px' src={BlackLogo}></img>
                <span className='firm-name'>Incube IT Solutions</span>
            </div>
            <div className='footer-right'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Get in touch</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Connect</button>
                </form>
            </div>
        </div>
    </footer>
}

export default Footer;