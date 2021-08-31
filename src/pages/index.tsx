import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps, Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import Parallax from "../components/Parallax";
import {
  FlexContainer,
  Left,
  Right,
  Landing,
  Content,
  PrimaryLink,
  SecondaryLink,
  ItemContainer,
  ColorContainer,
  ContentLight
} from "../styles";
import bgImg from "../images/mountain.jpg";
import PortfolioItem from "../components/PortfolioItem";
import Contact from "../components/Contact";


const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const items = data.allAirtable.edges

  return (
    <>
      <Seo title="Kelsi Hoyle -- Full Stack Web Developer" />
      <main>
        <Parallax background={bgImg} height="70vh">
          <Landing>
            <h2><span className="spaced">Hello! I'm Kelsi.</span></h2>
            <p><span className="line">Web Developer and Problem Solver.</span></p>
          </Landing>
        </Parallax>
        <ContentLight>

          <FlexContainer align={null}>

            <Right>
              <StaticImage src="../images/intropic.jpg" alt="Kelsi Hoyle" />
            </Right>
            <Left>
              <p>I started coding as a fun hobby, and it turned into a passionate career. I took a leap of faith and earned my Full-Stack Web Development certificate from the University of Denver in 2019. Ever since, I have been creating and continuously learning to better my craft.</p>
              <p>I love coding, learning, and creating products that my clients are proud of. I especially enjoy the challenge of coming up with creative solutions that save clients money in the long term.</p>
              <PrimaryLink><Link to="/about">Learn more about me.</Link></PrimaryLink>
            </Left>

          </FlexContainer>
        </ContentLight>

        <ColorContainer color="secondary">
          <h2>Portfolio</h2>
          <FlexContainer align={null}>
            {items.map(({ node: item }) => (
              <ItemContainer>
                <PortfolioItem
                  data={item.data}
                  home={true}
                />
              </ItemContainer>
            ))}
          </FlexContainer>
          <SecondaryLink>
            <Link to="/portfolio">View Full Portfolio</Link>
          </SecondaryLink>
        </ColorContainer>

        <Contact />
      </main>
    </>
  )
}

export const HomeQuery = graphql`{
  allAirtable(filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}}}) {
    edges {
      node {
        data {
          Name
          Slug
          Category
          Notes
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          Goals {
            childMarkdownRemark {
              html
            }
          }
          Deployed
          Repo
        }
      }
    }
  }
}
`

export default IndexPage
