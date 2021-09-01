import React from "react";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { Buttons } from "./styles"

const ContactButtons = () => {
    return (

        <Buttons>
            <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener noreferrer" className="contact">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kelsi-hoyle-983266186/" rel="noopener noreferrer" target="_blank"
                className="contact">
                <FaLinkedinIn />
            </a>
            <a href="mailto:kelsimhoyle@gmail.com" target="_blank" rel="noopener noreferrer" className="contact">
                <FaEnvelope />
            </a>
        </Buttons>

    )
}

export default ContactButtons;