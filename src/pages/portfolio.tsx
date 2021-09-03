import React from "react";
import { PageProps, graphql } from "gatsby";
// import Parallax from "../components/Parallax";
import PortfolioItem from "../components/PortfolioItem";
import { ContentLight, PortfolioContainer } from "../styles";

import Seo from "../components/Seo";

const Portfolio: React.FC<PageProps<any>> = ({ data }) => {
  const clients = data.clients.edges;
  const projects = data.projects.edges;

  return (
    <>
      <Seo title="Kelsi Hoyle - Portfolio" />
      <div>
        <ContentLight>
          <h2>Portfolio</h2>
          <p>This is where I get to brag. Although I am proud of the work that I have done on the listed websites, I am mostly proud of the amount of money that I have saved for these small businesses.</p>
          <p>Through fun problem solving, and a lot of work on my end, I was able to come up with sustainable solutions that have brought down the monthly maintence cost of these businesses. Through custom CMS and just plain old JavaScript coding, I was able to get clients off of relying on multiple expensive platforms to run their businesses.</p>
        </ContentLight>
        <div>
          <h2>Client Projects</h2>
          <PortfolioContainer>
            {clients.map(({ node: item }) => (
              <PortfolioItem
                data={item.data}
                home={false}
              />
            ))}
          </PortfolioContainer>
          <h2>Other Projects</h2>
          <PortfolioContainer>
          {projects.map(({ node: item }) => (
              <PortfolioItem
                data={item.data}
                home={false}
              />
            ))}
          </PortfolioContainer>
        </div>
      </div>
    </>
  );
};

export const PortfolioQuery = graphql`{
  clients: allAirtable(
    filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}, Type: {eq: "Client"}}}
    sort: {fields: data___ID}  ) {
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
                gatsbyImageData(width: 900)
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
  projects: allAirtable(
    filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}, Type: {eq: "Project"}}}
    sort: {fields: data___ID}  ) {
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
                gatsbyImageData(width: 900)
              }
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