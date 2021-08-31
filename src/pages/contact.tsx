import React from "react";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import { FlexContainer, Blurb } from "../styles";

const Contact = () => {
    return (
        <>
            <Seo title="Kelsi Hoyle - Contact" />
            <main>
                <h2>Contact</h2>
                <FlexContainer align="center">
                    <ContactForm />
                    <Blurb>
                        <h3>I'm so glad you found me!</h3>
                        <p>E-mail</p>
                        <p>Github</p>
                        <p>Instagram</p>
                    </Blurb>
                </FlexContainer>
            </main>
        </>
    );
};

export default Contact;