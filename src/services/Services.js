import React from 'react';
import Card from '../card/Cards.js';
import Style from './Style.css';

const Services = () => {
    return <div className='services' id="services">
        <div className='services-header'>Services</div>
        <div className='services-msg'>We have expertise in ITSM, CSM, Integration and other modules on Servicenow.</div>
        <div className='services-cards row'>
            <Card title='Consulting' content='We deliver rapid added value in key implementation phases, while preserving your long-term objectives.'/>
            <Card title='Implementation' content='This offering ensures the transition from legacy systems to ServiceNow, reviewing processes and maximizing value for your customers.'/>
        </div>
    </div>
}

export default Services;