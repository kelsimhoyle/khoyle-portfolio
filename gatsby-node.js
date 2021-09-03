const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      portfolio: allAirtable(filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}}}) {
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
                       gatsbyImageData
                     }
                   }
                 }
                 Goals {
                  childMarkdownRemark {
                    html
                  }
                 }
                 Category
                 Deployed
                 Repo
               }
             }
           }
         }
        }  
    `)
    result.data.portfolio.edges.forEach(({ node }) => {
        const { data } = node;

        createPage({
            path: `/portfolio/${data.Slug}`,
            component: path.resolve(`./src/templates/portfolio-item.tsx`),
            context: {
                slug: data.Slug,
                ...data
            },
        })
    })
};