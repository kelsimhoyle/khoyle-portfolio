import React from "react";
import ContactForm from "../ContactForm";
import ContactButtons from "../ContactButtons";
import { Form, TextContainer } from "./styles";

const ContactComponent = () => {
    return (
        <Form>
            <TextContainer data-testid="text-container">
                <h3>I'm so glad you found me!</h3>
                <p>Fill out the form to start a conversation.</p>
                <ContactButtons />
            </TextContainer>
            <div className="form" data-testid="form-container">
            <ContactForm />
            </div>
        </Form>
    );
};

export default ContactComponent;