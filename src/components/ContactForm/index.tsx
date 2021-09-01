import React, { useState } from "react";
import addContact from "../../functions/addContact";
import { Btn } from "../../styles";
import { Form } from "./styles";

export type ContactDataType = {
    Name: String;
    Email: String;
    Message: String;
}

const ContactForm = () => {
    const [data, setData] = useState({ errors: [], submitting: false, submitted: false });
    const [contactData, setContactData] = useState<ContactDataType>({ Name: "", Email: "", Message: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContactData({
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
                <label htmlFor="Name">
                    Name
                </label>

                <input
                    type="text"
                    name="Name"
                    value={contactData.Name as string}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <label htmlFor="Email">
                    E-Mail
                </label>

                <input
                    type="text"
                    name="Email"
                    value={contactData.Email as string}
                    onChange={handleInputChange}
                    placeholder="Email"

                />
                <label htmlFor="Message">
                    Message
                </label>

                <textarea
                    rows={5}
                    name="Message"
                    value={contactData.Message as string}
                    onChange={handleInputChange}
                    placeholder="Message"

                />
                <button type="submit">Submit</button>
            </Form>

            {
                data.errors.length > 0 ? (
                    data.errors.map(error => <p>{error}</p>)
                ) : null
            }

            {data.submitting ? <p>Submitting contact request...</p> : null}

            {data.submitted ? <p>Thank you! I will get back to you within 2 business days</p> : null}
        </>
    );
};

export default ContactForm