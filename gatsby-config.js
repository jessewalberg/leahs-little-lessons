require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://leahslittlelessons.com`);
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "leahs-little-lessons",
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
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
        siteUrl: 'leahslittlelessons.com',
    },
}
  ],
};
