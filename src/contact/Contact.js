import React from "react";
import Style from './Style.css';

const Contact = ({contact}) => {
    return <div className="contact-wrapper">
        <div className="avatar w-50">
            <img src={contact.avatar} />
        </div>
        <div className="user-detail w-50">
            <div>{contact.name}</div>
            <div>{contact.description}</div>
        </div>
    </div>
}

export default Contact;