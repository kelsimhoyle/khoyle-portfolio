import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { PrimaryLink, HightLightedH3, Btn, BtnFlex } from "../../styles";
import { PortItem} from "./styles";

import { PortfolioInterface } from "../../interfaces";

interface PorfolioItemProps {
    data: PortfolioInterface;
    home: boolean;
}

const PortfolioItem = ({ data, home }: PorfolioItemProps) => {
    const { Name, Slug, Category, Notes, Image, Goals, Deployed, Repo } = data;

    return (
        <PortItem home={home} data-testid="item">
            <div className="image-div" data-testid="image-div">
                <GatsbyImage data-testid="image" image={getImage(Image.localFiles[0])} alt={Name} objectFit="contain" />
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
            <div className="about" data-testid="about-div">
                <HightLightedH3>{Name}</HightLightedH3>
                <div
                className="goals"
                dangerouslySetInnerHTML={{
                  __html: Notes.childMarkdownRemark.html,
                }}
              />
                <h4>Technologies:</h4>
                <p>{Category.map(cat => ` ${cat} /`)}</p>
               
                <PrimaryLink>
                    <Link to={`/portfolio/${Slug}`}>Learn More</Link>
                </PrimaryLink>
            </div>
        </PortItem>
    );
};

export default PortfolioItem;