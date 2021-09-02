import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { PrimaryLink, HightLightedH3, Btn } from "../../styles";
import { Cats, PortItem, BtnFlex } from "./styles";

type PorfolioItemType = {
    data: any;
    home: boolean;
}

const PortfolioItem = ({ data, home }: PorfolioItemType) => {
    const { Name, Slug, Category, Notes, Image, Goals, Deployed, Repo } = data;

    return (
        <PortItem home={home}>
            {/* <div className={home ? "home" : "null"}> */}
            <div className="image">
                <GatsbyImage image={getImage(Image.localFiles[0])} alt={Name} />
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
            <div className="about">
                <HightLightedH3>{Name}</HightLightedH3>
                <p>{Notes}</p>
                <h4>Technologies:</h4>
                <Cats>{Category.map(cat => <div><p>{cat}</p></div>)}</Cats>
               
                <PrimaryLink>
                    <Link to={`/portfolio/${Slug}`}>Learn More</Link>
                </PrimaryLink>
            </div>
            {/* </div> */}
        </PortItem>
    );
};

export default PortfolioItem;