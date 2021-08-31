import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavLinks from "../NavLinks";

import { StyledFooter, Explore } from "./styles";
// import ContactButtons from "../ContactButtons";
// import logo from "../../images/2.png";

const Footer = ({ siteTitle, menuLinks }) => {
    return (

        <StyledFooter>
        <div>
            <StaticImage src="../../images/2.png" alt="Kelsi Hoyle - Full-Stack Web Developer" />
        </div>
        <Explore>
            <h4>Explore</h4>
            <div className="links">
            <div>
            <ul>
                 <NavLinks menuLinks={menuLinks} />

            </ul>
            </div>
            <div>
            </div>
            </div>
        </Explore>
        {/* <ContactButtons /> */}
    </StyledFooter>
        // <footer>
        //     <div>
        //         <div>
        //             <h1>
        //                 <Link to="/">
        //                     {siteTitle}
        //                 </Link>
        //             </h1>
        //             <div>
        //                 <nav>
        //                     <NavLinks menuLinks={menuLinks} />
        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer;