import React from "react";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid } from "../styles";
import ContactButtons from "../components/ContactButtons";

import Seo from "../components/Seo";



const About: React.FC<PageProps<any>> = ({ data }: any) => {
    return (
        <>
            <Seo title="Kelsi Hoyle - About" />
            <Grid.Container>
                <Grid.ImgDiv>
                    <GatsbyImage image={getImage(data.file)} alt="Kelsi Hoyle" />
                </Grid.ImgDiv>
                <Grid.TextDiv>
                    <h2>Hi, I'm Kelsi!</h2>
                    <p>I'm an educator turned web developer. As a self-proclaimed lifelong learner, the switch into tech was seemless because there is <i>always</i> something to learn.</p>
                    <p>I completed the Full-Stack Web Development Certificate at the University of Denver in 2019, where I honed my skill of learning new technology quickly and effectively.</p>
                    <p>My favorite technologies include: JavaScript, Typescript, Node, React, Gatsby, and GraphQL. But I am always finding a new favorite. 😉 </p>
                    <p>In my freetime I enjoy to run (at a very slow pace), read, spend time with my family, and hike!</p>
                    <ContactButtons />
                </Grid.TextDiv>
            </Grid.Container>
        </>
    );
};

export const AboutQuery = graphql`
    query AboutQuery {
     file(relativePath: {eq: "about.jpg"}) {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
    }
`

export default About;