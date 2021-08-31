import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Grid, PrimaryLink } from "../../styles";

const Contact = () => {
    return (

        <Grid>
            <StaticImage src="../../images/contact.jpg" alt="Laptop" />
            <div className="text">
                <h3>I'm so glad you found me!</h3>
                <p>If you would like to connect and learn more, feel free to reach out.</p>
                <PrimaryLink>
                    <Link to="/contact">
                        Contact Me
                    </Link>
                </PrimaryLink>
            </div>
        </Grid>
    )
}

export default Contact;