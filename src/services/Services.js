import Card from '../card/Cards.js';
import ItsmCsmIcon from '../Asset/itsm_csm.svg';
import OthersIcon from '../Asset/others.png';
import PortalIcon from '../Asset/portal.png';
import './Style.css';

const Services = () => {
    return <div className='services' id="services">
        <div className='services-header'>Services by industry</div>
        <div className='services-msg'>Currently we are focussed on providing services for Servicenow domain, which includes implementation and administration.</div>
        <div className='services-cards row'>
            <Card title='ITSM & CSM' icon={ItsmCsmIcon} content='Unleash the power of ITSM: Expert implementation for a smoother running IT. Elevate your customer experience: Implement CSM & create loyal brand advocates.'/>
            <Card title='Service Portal' icon={PortalIcon} content='We are the champions of Service Portal. Unify self-service & support: Elevate your service experience with a modern portal.'/>
            <Card title='Other' icon={OthersIcon} content='We have expertise in UI Builder, Agent Workspace, Virtual Agent, Flow Designer, Workflows as well'/>
        </div>
    </div>
}

export default Services;