import React from "react";
import { Link } from "gatsby";
import { PrimaryLink } from "../../styles";
import { MenuLinksType } from "../../layouts";
import { NavUl } from "./styles";

export interface NavLinksProps {
    menuLinks: MenuLinksType[]
}

const NavLinks: React.FC<NavLinksProps> = ({ menuLinks }) => {
    return (
        <NavUl data-testid="nav">
            {menuLinks.map(link => (
                <li key={link.name}>
                    <PrimaryLink>
                        <Link to={link.link}
                        className="link">
                            {link.name}
                        </Link>
                    </PrimaryLink>
                </li>
            ))}
        </NavUl>
    )
}

export default NavLinks;