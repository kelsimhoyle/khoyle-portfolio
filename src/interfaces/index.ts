export interface PortfolioInterface {
    Name: string;
    Slug: string;
    Category: string[];
    Notes: {
        childMarkdownRemark: {
            html: string;
        }
    }
    Image: {
        localFiles: any[]
    };
    Goals?: {
        childMarkdownRemark: {
            html: string;
        }
    }
    Deployed: string;
    Repo: string;
}
