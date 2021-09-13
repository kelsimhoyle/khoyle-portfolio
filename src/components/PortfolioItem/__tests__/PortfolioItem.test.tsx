import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer"

import PortfolioItem from "../index";
import { PortfolioInterface } from "../../../interfaces";

let getByTestId;

const data: PortfolioInterface = {
    Name: "James the Dog Walker",
    Slug: "james-the-dog-walker",
    Category: [
        "JavaScript",
        "GraphQL",
        "Gatsby",
        "CMS",
        "API",
        "Custom CMS",
        "Headless",
        "SEO",
        "React",
        "Tailwind CSS",
        "AWS Amplify"
    ],
    Notes: {
        "childMarkdownRemark": {
            "html": "<p>A Southern California dog walking company. Custom headless CMS utilizing Airtable to give client control over content and organize contact requests. Deployed on AWS Amplify. Front end technologies include: React, Gatsby, and Tailwind CSS.</p>"
        }
    },
    Image: {
        localFiles: [
            {
                childImageSharp: {
                    gatsbyImageData: {
                        layout: "constrained",
                        backgroundColor: "#f8f8f8",
                        images: {
                            fallback: {
                                "src": "/static/dca7f4c406b8527e88de0adf9e17a894/db189/NewWebsiteBlueMockupInstagram-Laptop3.png",
                                "srcSet": "/static/dca7f4c406b8527e88de0adf9e17a894/d8461/NewWebsiteBlueMockupInstagram-Laptop3.png 225w, /static/dca7f4c406b8527e88de0adf9e17a894/d76bd/NewWebsiteBlueMockupInstagram-Laptop3.png 450w, /static/dca7f4c406b8527e88de0adf9e17a894/db189/NewWebsiteBlueMockupInstagram-Laptop3.png 900w",
                                "sizes": "(min-width: 900px) 900px, 100vw"
                            },
                            sources: [
                                {
                                    srcSet: "/static/dca7f4c406b8527e88de0adf9e17a894/252a0/NewWebsiteBlueMockupInstagram-Laptop3.webp 225w,\n/static/dca7f4c406b8527e88de0adf9e17a894/2890f/NewWebsiteBlueMockupInstagram-Laptop3.webp 450w,\n/static/dca7f4c406b8527e88de0adf9e17a894/3987a/NewWebsiteBlueMockupInstagram-Laptop3.webp 900w",
                                    type: "image/webp",
                                    sizes: "(min-width: 900px) 900px, 100vw"
                                }
                            ]
                        },
                        width: 900,
                        height: 900
                    }
                }
            }
        ]
    },
    Deployed: "https://www.jamesthedogwalker.com/",
    Repo: "https://github.com/kelsimhoyle/james-dog-walker"

};

describe("Portfolio Item", () => {
    it("renders correctly", () => {

        const tree = renderer.create(<PortfolioItem data={data} home={false} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

});

beforeEach(() => {
    const component = render(<PortfolioItem data={data} home={false} />);
    getByTestId = component.getByTestId;
});

test("image displays", () => {
    const image = getByTestId("image");

    expect(image).toHaveAttribute("data-srcset", data.Image.localFiles[0].childImageSharp.gatsbyImageData.images.fallback.srcSet);
    expect(image).toHaveAttribute("alt", data.Name);
});

test("buttons have correct hrefs", () => {
    const deployedBtn = getByTestId("deployed");
    const repoBtn = getByTestId("repo");

    expect(deployedBtn).toHaveAttribute("href", data.Deployed);
    expect(repoBtn).toHaveAttribute("href", data.Repo);
});

test("title contains correct text", () => {
    const title = getByTestId("title");

    expect(title).toHaveTextContent(data.Name);

});

test("about has html", () => {
    const about = getByTestId("about");

    expect(about).toContainHTML(data.Notes.childMarkdownRemark.html);

});

test("link to full portfolio item contians correct href", () => {
    const link = getByTestId("slug");

    expect(link).toHaveAttribute("href", `/portfolio/${data.Slug}`);
});