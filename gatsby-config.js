require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.leahslittlelessons.com",
    title: "Leahs Little Lessons",
    keywords: ["children", "teacher", "parents", "activities", "toddler", "stay at home mom"],
    author: "Leah Walberg",
    description: "Leahs little lessons is my space for documenting my experience teaching and raising my child. I add all my activites that are developed based on my years as a preschool teacher."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-66T58Q72R8", // Google Analytics / GA
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
        siteUrl: 'https://leahslittlelessons.com',
    },
},
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    start_url: `/`,
    icon: `src/images/favicon.png`
  },
},
  ],
};
