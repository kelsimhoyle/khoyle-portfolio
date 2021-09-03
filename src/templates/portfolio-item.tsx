import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HightLightedH3, Btn, BtnFlex } from "../styles";
import { PortItemPage } from "./portfolio-item.styles";
import { Link } from "gatsby";

const PortfolioItem = ({ pageContext }) => {
  const { Name, Image, Notes, Goals, Category, Deployed, Repo } = pageContext;
  const image = getImage(Image.localFiles[0]);

  return (
    <PortItemPage>
      <div className="port-item">
        <GatsbyImage image={image} alt={Name} />
        <div className="text">
          <div>
            <HightLightedH3>{Name}</HightLightedH3>
            <p>{Notes}</p>
          </div>
          {Goals && (
            <div>
              <HightLightedH3>Goals:</HightLightedH3>
              <div
                className="goals"
                dangerouslySetInnerHTML={{
                  __html: Goals.childMarkdownRemark.html,
                }}
              />
            </div>

          )}
          <div>
            <HightLightedH3>Technologies:</HightLightedH3>
            <p>{Category.map(tech => ` ${tech} /`)}</p>
          </div>
          <BtnFlex>
            {Deployed && (
              <Btn size="small">
                <a href={Deployed} target="_blank">Visit Website</a>
              </Btn>
            )}
            {Repo && (
              <Btn size="small">
                <a href={Repo} target="_blank">GitHub Repo</a>
              </Btn>
            )}
          </BtnFlex>
        </div>

      </div>
      <Btn size="large">
        <Link to="/portfolio">Back to Portfolio</Link>
      </Btn>
    </PortItemPage>
  );
};

export default PortfolioItem;