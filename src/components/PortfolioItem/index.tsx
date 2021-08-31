import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { PrimaryLink } from "../../styles";
import { Cats, PortItem } from "./styles";

type PorfolioItemType = {
    data: any;
    home: boolean;
}

const PortfolioItem = ({ data, home }: PorfolioItemType) => {
    const { Name, Slug, Category, Notes, Image, Goals, Deployed, Repo } = data;

    return (
        <PortItem direction={home ? "column" : "row"}>
            <div className="image">
                <GatsbyImage image={getImage(Image.localFiles[0])} alt={Name} />
            </div>
            <div className="about">
            <h3>{Name}</h3>

                <p>{Notes}</p>
                <h4>Technologies:</h4>
                <Cats>{Category.map(cat => <div><p>{cat}</p></div>)}</Cats>
                <PrimaryLink>
                    <Link to={`/portfolio/${Slug}`}>View More</Link>
                </PrimaryLink>
            </div>
        </PortItem>
    );
};

export default PortfolioItem;