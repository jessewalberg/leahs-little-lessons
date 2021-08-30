require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://leahslittlelessons.com`);
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
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
