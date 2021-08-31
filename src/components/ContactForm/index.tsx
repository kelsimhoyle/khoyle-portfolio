import React, { useState } from "react";
import addContact from "../../functions/addContact";
import { Form } from "./styles";

export type ContactDataType = {
    Name: String;
    Email: String;
    Message: String;
  }

const ContactForm = () => {
    const [data, setData] = useState({ errors: [], submitting: false, submitted: false });
    const [contactData, setContactData] = useState<ContactDataType>({Name: "", Email: "", Message: ""});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setContactData({
        ...contactData,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setData({ ...data, submitting: true });
        const { Name, Email, Message } = contactData;

        if (addContact({ Name, Email, Message })) return setData({ ...data, submitting: false, submitted: true });

        return setData({ ...data, submitting: false, submitted: false, errors: [...data.errors, "Error submitting contact request."] })
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input
                        type="text"
                        name="Name"
                        value={contactData.Name as string}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <p>E-Mail:</p>
                    <input
                        type="text"
                        name="Email"
                        value={contactData.Email as string}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <p>Message:</p>
                    <input
                        type="textarea"
                        name="Message"
                        value={contactData.Message as string}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>

            {data.errors.length > 0 ? (
                data.errors.map(error => <p>{error}</p>)
            ) : null}

            {data.submitting ? <p>Submitting contact request...</p> : null}

            {data.submitted ? <p>Thank you! I will get back to you within 2 business days</p> : null}
        </>
    );
};

export default ContactForm