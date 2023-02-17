import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css';

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className="Mobile-Footer" style={{backgroundColor:"#181313"}}>
                <h1 style={{fontSize:"1.7rem",color:"white"}}>2020 © SurajBhangu<span>|All Rights Reserved.</span></h1>
                <div className="mobilefootericons">
                <h1 style={{fontSize:"1.4rem",color:"white"}}>Follow Me on:</h1>
                <a href="https://www.facebook.com/suraj.jeetendra.bhangu"><FaFacebook/></a>
                <a href="https://www.instagram.com/suraj_j_singh"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/suraj-bhangu"><FaLinkedin/></a>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default Footer;
