import React from "react";
import { graphql } from "gatsby";
import Layout from "../pages/components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Activity = ({ data, pageContext }) => {
  const individualActivity = data.allContentfulActivity.edges[0].node;
  const Bold = ({ children }) => (
    <span className=" font-writing font-bold">{children}</span>
  );
  const Text = ({ children }) => (
    <p className="align-center font-writing my-2 text-lg">{children}</p>
  );
  const H3 = ({ children }) => (
    <h3 className="text-5xl font-writing my-6">{children}</h3>
  );
  const UL = ({ children }) => <ul className="list-disc">{children}</ul>;
  const OL = ({ children }) => (
    <ol className="list-decimal font-writing">{children}</ol>
  );
  const image = getImage(individualActivity.featuredImage.gatsbyImageData);
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (individualActivity, children) => {
        return (
          <div className="content-wrapper max-w-screen-md">
            <Text>{children}</Text>
          </div>
        );
      },
      [BLOCKS.HEADING_3]: (individualActivity, children) => <H3>{children}</H3>,
      [BLOCKS.UL_LIST]: (individualActivity, children) => <UL>{children}</UL>,
      [BLOCKS.OL_LIST]: (individualActivity, children) => <OL>{children}</OL>,
    },
  };

  return (
    <Layout>
      <div className="mt-20 font-main flex flex-col items-center">
        <h2 className="font-main text-6xl">{individualActivity.title}</h2>
        <GatsbyImage image={image} alt={"123"} className="my-5" />
        {renderRichText(individualActivity.content, options)}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allContentfulActivity(filter: { id: { eq: $id } }) {
      edges {
        node {
          month
          week
          title
          tags
          slug
          content {
            raw
          }
          featuredImage {
            gatsbyImageData(width: 1000, height: 400)
          }
        }
      }
    }
  }
`;
export default Activity;
