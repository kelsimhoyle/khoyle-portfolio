import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import ContactForm from "..";

let getByTestId;
let getByText;

beforeEach(() => {
    jest.clearAllMocks();
    const component = render(<ContactForm />);
    getByTestId = component.getByTestId;
    getByText = component.getByText;
});

test("contact buttons renders correctly", () => {
    const tree = renderer.create(<ContactForm />).toJSON()
    expect(tree).toMatchSnapshot()
});

test("input values change", () => {
    const nameInput = getByTestId("name-input");
    const emailInput = getByTestId("email-input");
    const messageInput = getByTestId("message-input");

    fireEvent.change(nameInput, {
        target: {
            value: "Kelsi"
        }
    });

    expect(nameInput.value).toBe("Kelsi");

    fireEvent.change(emailInput, {
        target: {
            value: "kelsi@kelsihoyle.com"
        }
    });

    expect(emailInput.value).toBe("kelsi@kelsihoyle.com");

    fireEvent.change(messageInput, {
        target: {
            value: "Hello! This is a test."
        }
    });

    expect(messageInput.value).toBe("Hello! This is a test.");

});

test("validation works", () => {

});

test("form submits", () => {
    const form = getByTestId("form");
    const nameInput = getByTestId("name-input");
    const emailInput = getByTestId("email-input");
    const messageInput = getByTestId("message-input");

    const expected = {
        Name: "Kelsi",
        Email: "kelsi@kelsihoyle.com",
        Message: "Hello!"
    };

    fireEvent.change(nameInput, {
        target: {
            value: "Kelsi"
        }
    });

    fireEvent.change(emailInput, {
        target: {
            value: "kelsi@kelsihoyle.com"
        }
    });

    fireEvent.change(messageInput, {
        target: {
            value: "Hello! This is a test."
        }
    });

    fireEvent.submit(form);

    

   const submittedDiv = getByText("Thank you! I will get back to you within 2 business days!");

   expect(submittedDiv).toBeInTheDocument();
});


test("button submits form", () => {
    const btn = getByTestId("button");

    fireEvent.click(btn);

    const submittedDiv = getByText("Thank you! I will get back to you within 2 business days!");

    expect(submittedDiv).toBeInTheDocument();
});





