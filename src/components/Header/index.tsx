import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { MenuLinksType } from "../../layouts";
import { Navbar, HamburgerButton } from "./styles";

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

      <HamburgerButton openDrawer={openDrawer}
        onClick={() => toggleDrawer(true)}>
        <div />
        <div />
        <div />
      </HamburgerButton>

      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        {menuLinks.map(link => (
          <Navbar.Item>
            <Link to={link.link}>
              {link.name}
            </Link>
          </Navbar.Item>
        ))}

      </Navbar.Items>
    </Navbar.Wrapper>

  )
};

export default Header