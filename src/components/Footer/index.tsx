import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import NavLinks from "../NavLinks";

import { StyledFooter } from "./styles";
import ContactButtons from "../ContactButtons";
// import logo from "../../images/2.png";

const Footer = ({ siteTitle, menuLinks }) => {
    return (

        <StyledFooter>
            <div className="logo">
                <StaticImage src="../../images/2.png" alt="Kelsi Hoyle - Full-Stack Web Developer" />
                <p>&copy; {new Date().getFullYear()}, Kelsi Hoyle </p> 
            </div>

            <div>
                <ul>
                    <NavLinks menuLinks={menuLinks} />
                </ul>
            </div>
            <div>
            <ContactButtons />
           
            </div>

        </StyledFooter>
    )
}

export default Footer;