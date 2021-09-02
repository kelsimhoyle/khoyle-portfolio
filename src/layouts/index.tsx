import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";
import "@fontsource/biorhyme";
import "../styles/reset.css";

import { GlobalStyle } from "../styles/utils";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteMetadata } from "../../gatsby-config";
import { StringDecoder } from "string_decoder";
// import "./layout.css"

interface LayoutPropsInterface {
  children: React.ReactNode
}

export type MenuLinksType = {
    name: string;
    link: string;
}

type DataType = {
    site: {
      siteMetadata: {
        title: string;
        menuLinks: MenuLinksType[];
      }
    }
}

const Layout = ({ children }: LayoutPropsInterface) => {
  const data: DataType = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        menuLinks {
            name
            link
       }
      }
    }
  }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`;
  const menuLinks: MenuLinksType[] = data.site.siteMetadata.menuLinks;

  return (
    <>
      <GlobalStyle />
        <Header
          siteTitle={siteTitle}
          menuLinks={menuLinks}
        />      
        <main>{children}</main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
    </>
  )
}

export default Layout
