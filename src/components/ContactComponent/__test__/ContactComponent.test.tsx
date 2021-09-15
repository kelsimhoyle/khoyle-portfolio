import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import ContactComponent from "../index";

let getByTestId;
let getByText;

beforeEach(() => {
    const component = render(<ContactComponent />);
    getByTestId = component.getByTestId;
    getByText = component.getByText
    
});

test("contact buttons renders correctly", () => {
    const tree = renderer.create(<ContactComponent />).toJSON()
    expect(tree).toMatchSnapshot()
});

test("text container loads content", () => {
    const textContainer = getByText("I'm so glad you found me!");

    expect(textContainer).toBeInTheDocument;
});

test("form loads", () => {
    const form = getByTestId("form");

    expect(form).toBeInTheDocument();
});