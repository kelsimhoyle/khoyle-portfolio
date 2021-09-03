import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import NavLinks from "../NavLinks";
import { MenuLinksType } from "../../layouts";
import { StyledFooter } from "./styles";
import ContactButtons from "../ContactButtons";
// import logo from "../../images/2.png";

type FooterProps = {
    siteTitle: string;
    menuLinks: MenuLinksType[];
    logo: any;
}

const Footer = ({ siteTitle, menuLinks, logo }: FooterProps) => {
    return (

        <StyledFooter>
            <div className="logo">
                <GatsbyImage
                    image={getImage(logo)}
                    alt={siteTitle}
                    objectFit="contain"
                />
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