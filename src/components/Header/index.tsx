import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { MenuLinksType } from "../../layouts";
import { Navbar, HamburgerButton } from "./styles";
import { PrimaryLink } from "../../styles";
import ContactButtons from "../ContactButtons";

type HeaderProps = {
  siteTitle: string;
  menuLinks: MenuLinksType[];
}

const Header = ({ menuLinks, siteTitle }: HeaderProps) => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Navbar.Wrapper>
      <Navbar.Logo>
        <Link to="/">
          <StaticImage
            src="../../images/1.png"
            height={100}
            alt={siteTitle}
          />
        </Link>
      </Navbar.Logo>

      <HamburgerButton
        onClick={() => toggleDrawer(!openDrawer)}
        openDrawer={openDrawer}
      >
        <div />
        <div />
        <div />
      </HamburgerButton>

      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        {menuLinks.map(link => (
          <Navbar.Item>
            <Link to={link.link}>
              <PrimaryLink>{link.name}</PrimaryLink>
            </Link>
          </Navbar.Item>
        ))}
        <div className="mobile">
          <ContactButtons />
        </div>
      </Navbar.Items>
    </Navbar.Wrapper>

  )
};

export default Header