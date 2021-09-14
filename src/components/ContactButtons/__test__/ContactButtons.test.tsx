import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import ContactButtons from "../index";

let getByTestId;

beforeEach(() => {
    const component = render(<ContactButtons />);
    getByTestId = component.getByTestId;
});

test("contact buttons renders correctly", () => {
    const tree = renderer.create(<ContactButtons />).toJSON()
    expect(tree).toMatchSnapshot()
});

test("buttons display the svg", () => {
    const emailBtn = getByTestId("email");
    const gitBtn = getByTestId("github");
    const linkedinBtn = getByTestId("linkedin");

    expect(emailBtn).toHaveAttribute("href", "mailto:kelsi@kelsihoyle.com");
    expect(gitBtn).toHaveAttribute("href", "https://github.com/kelsimhoyle");
    expect(linkedinBtn).toHaveAttribute("href", "https://www.linkedin.com/in/kelsihoyle/");
})