import React from "react";

const Card = ({title, content}) => {
    return <div className="card col-md-5">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
}

export default Card;