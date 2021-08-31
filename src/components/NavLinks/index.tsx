import React from "react";
import { Link } from "gatsby";
import { PrimaryLink } from "../../styles";
import { MenuLinksType } from "../../layouts";
import { NavUl } from "./styles";

type NavLinksProps = {
    menuLinks: MenuLinksType[]
}

const NavLinks = ({ menuLinks }: NavLinksProps) => {
    return (
        <NavUl>
            {menuLinks.map(link => (
                <li key={link.name}>
                    <PrimaryLink>
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    </PrimaryLink>
                </li>
            ))}
        </NavUl>
    )
}

export default NavLinks;