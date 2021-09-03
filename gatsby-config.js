const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "khoyle-portfolio",
    author: "Kelsi Hoyle",
    description: "Full Stack Web Developer based in Denver, Colorado.",
    menuLinks: [
      {
        "name": "Home",
        "link": "/"
      },
      {
        "name": "About",
        "link": "/about"
      },
      {
        "name": "Portfolio",
        "link": "/portfolio"
      },
      {
        "name": "Contact",
        "link": "/contact"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Portfolio",
            mapping: { "Image": "fileNode", "Goals": "text/markdown" }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Blog",
            mapping: { "Image": "fileNode", "PostMarkdown": "text/markdown" },
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kelsi Hoyle - Full Stack Web Developer`,
        short_name: `Kelsi Hoyle`,
        start_url: `/`,
        icon: `src/images/2.png`,
      },
    },
  ],
};
