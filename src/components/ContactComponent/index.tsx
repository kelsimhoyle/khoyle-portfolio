import React from "react";
import ContactForm from "../ContactForm";
import ContactButtons from "../ContactButtons";
import { Form, TextContainer } from "./styles";

const ContactComponent = () => {
    return (
        <Form>
            <TextContainer>
                <h3>I'm so glad you found me!</h3>
                <p>Fill out the form to start a conversation.</p>
                <p>Also be sure to check me out on my social media, below!</p>
                <ContactButtons />
            </TextContainer>
            <div className="form">
            <ContactForm />
            </div>
        </Form>
    )

}

export default ContactComponent;