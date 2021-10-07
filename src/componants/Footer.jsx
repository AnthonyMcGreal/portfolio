import React from 'react';
import gitHubPic from "../images/gitHubPic.png"
import linkedIn from "../images/linkedIn.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLinks">
                <a href="https://www.linkedin.com/in/anthony-mcgreal/" target="_blank" rel="noreferrer"><img className="linkedIn" src={linkedIn} alt="linked In"/></a>
                <a href="https://github.com/AnthonyMcGreal" target="_blank" rel="noreferrer"><img className="gitLink" src={gitHubPic} alt="Github"/></a>
            </div>
        </div>
    );
};

export default Footer;