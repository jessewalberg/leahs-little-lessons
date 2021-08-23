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
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
          region: process.env.AWS_REGION,
          protocol: targetAddress.protocol.slice(0, -1),
          hostname: targetAddress.hostname,
          acl: null,
          params: {
              // In case you want to add any custom content types: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/custom-content-type.md
          },
      },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
        siteUrl: 'leahslittlelessons.com',
    },
}
  ],
};
