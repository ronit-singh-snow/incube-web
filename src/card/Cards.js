import './Style.css';
const Card = ({title, content, icon}) => {
    return <div className="card col-md-3">
        <div className="card-body">
            <img className="icon" src={icon} />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
}

export default Card;