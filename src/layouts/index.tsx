import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";
import "@fontsource/biorhyme";
import "../styles/reset.css";

import { GlobalStyle } from "../styles/utils";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import "./layout.css"

interface LayoutPropsInterface {
  children: React.ReactNode
}

export type MenuLinksType = {
  name: string;
  link: string;
}

type DataType = {
  siteData: {
    siteMetadata: {
      title: string;
      menuLinks: MenuLinksType[];
    }
  }
  headerLogo: any;
  footerLogo: any;
}

const Layout = ({ children }: LayoutPropsInterface) => {
  const data: DataType = useStaticQuery(graphql`
  query SiteTitleQuery {
    siteData: site {
      siteMetadata {
        title
        menuLinks {
            name
            link
       }
      }
    }
    headerLogo: file(relativePath: {eq: "1.png"}) {
      childImageSharp {
        gatsbyImageData(height: 100)
      }
    }
    footerLogo: file(relativePath: {eq: "2.png"}) {
      childImageSharp {
        gatsbyImageData(height: 100)
      }
    }
  }
  `)

  const siteTitle: string = data.siteData.siteMetadata?.title || `Title`;
  const menuLinks: MenuLinksType[] = data.siteData.siteMetadata.menuLinks;
  const headerLogo: any = data.headerLogo;
  const footerLogo: any = data.footerLogo;

  return (
    <>
      <GlobalStyle />
      <Header
        siteTitle={siteTitle}
        menuLinks={menuLinks}
        logo={headerLogo}
      />
      <main>{children}</main>
      <Footer
        siteTitle={siteTitle}
        menuLinks={menuLinks}
        logo={footerLogo}
      />
    </>
  )
}

export default Layout
