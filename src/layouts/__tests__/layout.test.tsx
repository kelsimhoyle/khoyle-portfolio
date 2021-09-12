import React from "react";
import { render } from "@testing-library/react"
import { StaticQuery } from "gatsby" // mocked

import Layout from "../index";

let getByTestId;

beforeEach(() => {
    const component = render(<Layout />);
    getByTestId = component.getByTestId;
});

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            siteData: {
                site: {
                    siteMetadata: {
                        title: `Portfolio`,
                        menuLinks: [
                            {
                                "name": "Home",
                                "link": "/"
                            },
                            {
                                "name": "About",
                                "link": "/about"
                            },
                            {
                                "name": "Portfolio",
                                "link": "/portfolio"
                            },
                            {
                                "name": "Contact",
                                "link": "/contact"
                            }
                        ]
                    }
                }
            },
            "headerLogo": {
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "constrained",
                        "backgroundColor": "#080808",
                        "images": {
                            "fallback": {
                                "src": "/static/261cd2e3ae5016f169bc21567eebdced/dda5f/1.png",
                                "srcSet": "/static/261cd2e3ae5016f169bc21567eebdced/bf190/1.png 37w,\n/static/261cd2e3ae5016f169bc21567eebdced/50f74/1.png 74w,\n/static/261cd2e3ae5016f169bc21567eebdced/dda5f/1.png 147w,\n/static/261cd2e3ae5016f169bc21567eebdced/b9432/1.png 294w",
                                "sizes": "(min-width: 147px) 147px, 100vw"
                            },
                            "sources": [
                                {
                                    "srcSet": "/static/261cd2e3ae5016f169bc21567eebdced/09a92/1.webp 37w,\n/static/261cd2e3ae5016f169bc21567eebdced/dea08/1.webp 74w,\n/static/261cd2e3ae5016f169bc21567eebdced/ca856/1.webp 147w,\n/static/261cd2e3ae5016f169bc21567eebdced/c7787/1.webp 294w",
                                    "type": "image/webp",
                                    "sizes": "(min-width: 147px) 147px, 100vw"
                                }
                            ]
                        },
                        "width": 147,
                        "height": 100
                    }
                }
            },
            "footerLogo": {
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "constrained",
                        "backgroundColor": "#080808",
                        "images": {
                            "fallback": {
                                "src": "/static/261cd2e3ae5016f169bc21567eebdced/dda5f/1.png",
                                "srcSet": "/static/261cd2e3ae5016f169bc21567eebdced/bf190/1.png 37w,\n/static/261cd2e3ae5016f169bc21567eebdced/50f74/1.png 74w,\n/static/261cd2e3ae5016f169bc21567eebdced/dda5f/1.png 147w,\n/static/261cd2e3ae5016f169bc21567eebdced/b9432/1.png 294w",
                                "sizes": "(min-width: 147px) 147px, 100vw"
                            },
                            "sources": [
                                {
                                    "srcSet": "/static/261cd2e3ae5016f169bc21567eebdced/09a92/1.webp 37w,\n/static/261cd2e3ae5016f169bc21567eebdced/dea08/1.webp 74w,\n/static/261cd2e3ae5016f169bc21567eebdced/ca856/1.webp 147w,\n/static/261cd2e3ae5016f169bc21567eebdced/c7787/1.webp 294w",
                                    "type": "image/webp",
                                    "sizes": "(min-width: 147px) 147px, 100vw"
                                }
                            ]
                        },
                        "width": 147,
                        "height": 100
                    }
                }
            }
        })
    )
})

describe(`Layout`, () => {
    it("renders a header", () => {
        
    })
    // it(`renders a header`, () => {
    //     const { container } = render(
    //         <Layout>
    //         <header />
    //         <main>
    //         <h1>hello < /h1>
    //         < /main>
    //         < /Layout>
    //     )

    //     expect(container.querySelector(`header`)).toBeInTheDocument()
    // })

    // it(`renders children`, () => {
    //     const text = `__Hello world__`
    //     const { getByText } = render(
    //         <Layout>
    //         <main>
    //         <h1>{ text } < /h1>
    //         < /main>
    //         < /Layout>
    //     )

    //     const child = getByText(text)

    //     expect(child).toBeInTheDocument()
    // })
})