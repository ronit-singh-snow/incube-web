import "./Style.css";

const Recommendations = () => {
    return (
        <div id="recommendations" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#recommendations" data-slide-to="0" className="active"></li>
                <li data-target="#recommendations" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-content">
                        <div className="carousel-header">
                            <div className="username">
                                <strong>Raju Kothi</strong>
                            </div>
                            <div>
                                <span>Servicenow Developer &#x2022; Peraton</span>
                            </div>
                        </div>
                        <div className="carousel-description">
                            I have worked with Incube IT Solutions on mulitple projects which involves Service portal, PA dashboard. They have very deep understanding of the ServiceNow platform and are proficients in all aspects of development, from writing code to troubleshooting complex issues.
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-content">
                        <div className="carousel-header">
                            <div className="username">
                                <strong>Pradeep Buddha</strong>
                            </div>
                            <div>
                                <span>Servicenow Solution Architect &#x2022; P9 Cloud solutions</span>
                            </div>
                        </div>
                        <div className="carousel-description">
                        I had the pleasure of working with Incube IT Solutions on Virtual Agent. During our collaboration, they consistently impressed me with their expertise, hard workk, and constant delivery.
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#recommendations" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#recommendations" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Recommendations;