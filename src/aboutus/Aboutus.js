import React from "react";
import Contact from "../contact/Contact.js";
import Style from './Style.css';
import AbhijeetBG from '../../public/Asset/profile_image_abhijeet.jpeg';

const AboutUs = () => {
    let contacts = [{
        avatar: AbhijeetBG,
        name: "Abhijeet Singh",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
        avatar: AbhijeetBG,
        name: "Rahul Singh"
    }]
    return <div className="about-us" id="aboutus">
        <h3>Meet our star developer</h3>
        {contacts.map(con => <Contact contact={con}/>)} 
    </div>
}

export default AboutUs;