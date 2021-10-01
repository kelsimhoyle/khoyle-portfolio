const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      portfolio: allAirtable(
        filter: {table: {eq: "Portfolio"}, data: {Status: {eq: "Done"}}}
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
      posts: allAirtable(
        filter: {table: {eq: "Blog"}, data: {Status: {eq: "published"}}}
      ) {
        nodes {
          data {
            Title
            Slug
            Date(formatString: "MMMM DD, YYYY")
            Tags
            Description
            Image {
              localFiles {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            PostMarkdown {
              childMarkdownRemark {
                html
              }
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
    });

    result.data.posts.nodes.forEach(post => {
      const blogpost = post.data;
      const tags = blogpost.Tags.split(", ");
      blogpost.Tags = tags;
      createPage({
        path: `/blog/${blogpost.Slug}`,
        component: path.resolve("./src/templates/blog-post.tsx"),
        context: {
          ...post.data
        }
      })
    })
};