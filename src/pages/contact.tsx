import React from "react";
import ContactComponent from "../components/ContactComponent";
import Seo from "../components/Seo";
import { ContactPage } from "../styles";

const Contact: React.FC<{}> = () => {
    return (
        <>
            <Seo title="Contact" />
            <ContactPage>
                <ContactComponent />
            </ContactPage>
        </>
    );
};

export default Contact;