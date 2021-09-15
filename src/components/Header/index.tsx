import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MenuLinksType } from "../../layouts";
import { Navbar, HamburgerButton, HamburgerContainer } from "./styles";
import { PrimaryLink } from "../../styles";
import ContactButtons from "../ContactButtons";

type HeaderProps = {
  siteTitle: string;
  menuLinks: MenuLinksType[];
  logo: any;
}

const Header = ({ menuLinks, siteTitle, logo }: HeaderProps) => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event: MouseEvent) => {
      if (toggleRef.current && toggleRef.current.contains(event.target)) {
        console.log("HERE")
        console.log(openDrawer)
        return toggleDrawer(prev => !prev)
      } else if (drawerRef.current && drawerRef.current.contains(event.target)) {
        console.log("NOW HERE")
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
          <GatsbyImage
            image={getImage(logo)}
            alt={siteTitle}
            objectFit="contain"
          />
        </Link>
      </Navbar.Logo>
      <HamburgerContainer ref={toggleRef}

      >
        <HamburgerButton
          openDrawer={openDrawer}
          name="Menu"
        >
          <div />
          <div />
          <div />
        </HamburgerButton>
      </HamburgerContainer>

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