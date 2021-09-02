import React from "react";
import { PageProps, graphql } from "gatsby";
import Parallax from "../components/Parallax";
import PortfolioItem from "../components/PortfolioItem";
import { ContentLight, Landing, PortfolioContainer } from "../styles";

import bg from "../images/laptop.jpg"
import Seo from "../components/Seo";

const Portfolio: React.FC<PageProps<any>> = ({ data }) => {
  const items = data.allAirtable.edges

  return (
    <>
      <Seo title="Kelsi Hoyle - Portfolio" />
      <main>
        <Parallax background={bg} height="40vh">
          <Landing>
            <h2>Portfolio</h2>
          </Landing>
        </Parallax>
        <ContentLight>
          <p>This is where I get to brag. Although I am proud of the work that I have done on the listed websites, I am mostly proud of the amount of money that I have saved for these small businesses.</p>
          <p>Through fun problem solving, and a lot of work on my end, I was able to come up with sustainable solutions that have brought down the monthly maintence cost of these businesses. Through custom CMS and just plain old JavaScript coding, I was able to get clients off of relying on multiple expensive platforms to run their businesses.</p>
        </ContentLight>
        <PortfolioContainer>
        {items.map(({ node: item }) => (
          <PortfolioItem
            data={item.data}
            home={false}
          />
        ))}
        </PortfolioContainer>
      </main>
    </>
  );
};

export const PortfolioQuery = graphql`{
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
                      gatsbyImageData (width: 900)
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

export default Portfolio;