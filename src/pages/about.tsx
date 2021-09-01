import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Parallax from "../components/Parallax";
import { ContentLight, Landing, Grid } from "../styles";

// import fall from "../images/fall.jpeg";
import Seo from "../components/Seo";

const About = () => {
    return (
        <>
        <Seo title="Kelsi Hoyle - About" />
        <main>
            <h2>Hi, I'm Kelsi!</h2>

            <Grid>
                <StaticImage src="../images/fall.jpeg" alt="me"/>
                <div>
                    <p>I'm an educator turned web developer. As a self-proclaimed lifelong learner, the switch into tech was seemless because there is <i>always</i> something to learn.</p>
                    <p>I pride myself in nerding out, problem solving, and creating cost effective solutions. Although I am very proud of my coding skills, I take most of my pride in how much money I save clients with my creatice solutions. Instead of relying on clunky and expensive "one-fits-all" solutions for small businesses, I challenge myself to create solutions that are fast, beautiful, without the monthly subscription price tag.</p>
                </div>
            </Grid>
        </main>
        </>
    );
};

export default About;