import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { PageProps, Link, graphql } from "gatsby";
import Seo from "../components/Seo";
// import Parallax from "../components/Parallax";
import {
  FlexContainer,
  PrimaryLink,
  ItemContainer,
  ColorContainer,
  Btn,
  ImgContent
} from "../styles";
import PortfolioItem from "../components/PortfolioItem";
import ContactComponent from "../components/ContactComponent";

// import bg from "../images/mountain.jpg"

const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const items = data.portfolio.edges;
  const portrait = getImage(data.portrait);

  return (
    <>
      <Seo title="Kelsi Hoyle - Full Stack Web Developer" />
      <div>
        {/* <Parallax background={bg} height="70vh">
          <Landing>
            <h2><span className="spaced">Hello! I'm Kelsi.</span></h2>
            <p><span className="line">Web Developer and Problem Solver.</span></p>
          </Landing>
        </Parallax> */}

        <ColorContainer color="primary">
          <div className="landing">
            <h1>Hello! 👋 I am Kelsi.  </h1>
            <p>Full-stack web developer, based in Denver, Colorado.</p>
          </div>
          <ImgContent.Container>
            <ImgContent.ImgContainer>
              <GatsbyImage image={portrait} alt="Kelsi Hoyle" />

            </ImgContent.ImgContainer>
            <ImgContent.Content>
              <h3>About Me</h3>
              <p>I started coding as a fun hobby, and it turned into a passionate career. I took a leap of faith and earned my Full-Stack Web Development certificate from the University of Denver in 2019. Ever since, I have been creating and continuously learning to better my craft.</p>
              <p>I love coding, learning, and creating products that my clients are proud of. I especially enjoy the challenge of coming up with creative solutions that save clients money in the long term.</p>
              <PrimaryLink><Link to="/about">Learn more about me.</Link></PrimaryLink>
            </ImgContent.Content>
          </ImgContent.Container>
        </ColorContainer>


        <ColorContainer color="light">
          <h2>Portfolio</h2>
          <FlexContainer align="center">
            {items.map(({ node: item }) => (
              <ItemContainer>
                <PortfolioItem
                  data={item.data}
                  home={true}
                />
              </ItemContainer>
            ))}
          </FlexContainer>
          <Btn size="large">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Btn>
        </ColorContainer>

        <ColorContainer color="yellow">
          <h2>Contact</h2>
          <ContactComponent />
        </ColorContainer>
      </div>
    </>
  )
}

export const HomeQuery = graphql`{
  portfolio: allAirtable(
    filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}}}
    sort: {fields: data___ID}
  ) {
    edges {
      node {
        data {
          Name
          Slug
          Category
          Notes {
            childMarkdownRemark {
              html
            }
          }
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
  portrait: file(relativePath: {eq: "mainpic.jpg"}) {
    childImageSharp {
      id
      gatsbyImageData(width: 900)
    }
  }
}
`

export default IndexPage
