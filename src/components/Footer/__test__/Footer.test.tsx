import React from "react";
import renderer from "react-test-renderer";

import Footer, { FooterProps } from "../";

const data: FooterProps = {
    siteTitle: "Kelsi Hoyle",
    menuLinks: [{
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        name: "Contact",
        link: "/contact"
    }],
    logo: {
        "childImageSharp": {
            "gatsbyImageData": {
                "layout": "constrained",
                "backgroundColor": "#080808",
                "images": {
                    "fallback": {
                        "src": "/static/ca3184736016b99f9910afbbf48625c4/15e42/2.png",
                        "srcSet": "/static/ca3184736016b99f9910afbbf48625c4/88208/2.png 25w,\n/static/ca3184736016b99f9910afbbf48625c4/e9fba/2.png 50w,\n/static/ca3184736016b99f9910afbbf48625c4/15e42/2.png 100w,\n/static/ca3184736016b99f9910afbbf48625c4/5aead/2.png 200w",
                        "sizes": "(min-width: 100px) 100px, 100vw"
                    },
                    "sources": [
                        {
                            "srcSet": "/static/ca3184736016b99f9910afbbf48625c4/2fa99/2.webp 25w,\n/static/ca3184736016b99f9910afbbf48625c4/dbc4a/2.webp 50w,\n/static/ca3184736016b99f9910afbbf48625c4/d8057/2.webp 100w,\n/static/ca3184736016b99f9910afbbf48625c4/2e34e/2.webp 200w",
                            "type": "image/webp",
                            "sizes": "(min-width: 100px) 100px, 100vw"
                        }
                    ]
                },
                "width": 100,
                "height": 100
            }
        }
    }
}


test("contact buttons renders correctly", () => {
    const tree = renderer.create(<Footer siteTitle={data.siteTitle} menuLinks={data.menuLinks} logo={data.logo} />).toJSON()
    expect(tree).toMatchSnapshot()
});