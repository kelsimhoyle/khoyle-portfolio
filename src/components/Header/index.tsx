import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { MenuLinksType } from "../../layouts";
import NavLinks from "../NavLinks";
import { Head } from "./styles";
import logo from "../../images/1.png";

type HeaderProps = {
    siteTitle: string;
    menuLinks: MenuLinksType[];
}

const Header = ({menuLinks, siteTitle}: HeaderProps) => (
    <Head>
        <Link to="/">
            <StaticImage
                src="../../images/1.png"
                width={175}
                alt={siteTitle}
            />
        </Link>

        <nav>
            <NavLinks menuLinks={menuLinks} />
        </nav>
    </Head>
)

// Header.propTypes = {
//     siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//     siteTitle: ``,
// }

export default Header