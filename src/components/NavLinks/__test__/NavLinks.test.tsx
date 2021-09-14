import React, { Children } from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import NavLinks from "..";
import { MenuLinksType } from "../../../layouts"

let getByTestId;
let container;

const data: MenuLinksType[] =  [
    {
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
    }
  ];

beforeEach(() => {
    const component = render(<NavLinks menuLinks={data} />);
    getByTestId = component.getByTestId;
    container = component.container;
});

test("contact buttons renders correctly", () => {
    const tree = renderer.create(<NavLinks menuLinks={data} />).toJSON()
    expect(tree).toMatchSnapshot()
});

test("the nav ul has the correct li items", () => {
    const navEl = getByTestId("nav");

    expect(navEl).toHaveProperty("children");
    expect(container.firstChild.childNodes.length).toEqual(data.length);


});

test("each link has the correct href", () => {
    for (let i = 0; i < data.length; i++ ) {
        expect(container.getElementsByClassName("link").item(i)).toHaveAttribute("href", data[i].link)
    }
})