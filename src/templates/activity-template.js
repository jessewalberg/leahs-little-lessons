import React from "react";
import { graphql } from "gatsby";
import Layout from "../pages/components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import SEO from "../pages/components/SEO";
const slugify = require('slugify');

const Activity = ({ data, pageContext }) => {
  const individualActivity = data.allContentfulActivity.edges[0].node;
  const slug = slugify(individualActivity.title.toLowerCase());
  const Bold = ({ children }) => (
    <span className=" font-writing font-bold">{children}</span>
  );
  const Text = ({ children }) => (
    <p className="align-center font-writing my-2 text-md">{children}</p>
  );
  const H2 = ({ children }) => (
    <h2 className="text-3xl font-writing my-2">{children}</h2>
  );
  const H3 = ({ children }) => (
    <h3 className="text-3xl font-writing my-2">{children}</h3>
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
          <div className="content-wrapper max-w-prose">
            <Text>{children}</Text>
          </div>
        );
      },
      [BLOCKS.HEADING_2]: (individualActivity, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (individualActivity, children) => <H3>{children}</H3>,
      [BLOCKS.UL_LIST]: (individualActivity, children) => (<div className="content-wrapper max-w-prose"><UL>{children}</UL></div>),
      [BLOCKS.OL_LIST]: (individualActivity, children) => (<div className="content-wrapper max-w-prose"><OL>{children}</OL></div>),
    },
  };
  return (
    <Layout>
      <SEO 
        title={individualActivity.title}
        image={individualActivity.featuredImage.fluid}
        description={'test'}
        pathname={`${individualActivity.month}/${individualActivity.week}/${slug}`}
      />
      <div className="mt-5 font-main flex flex-col items-center max-w-xl mx-auto">
        <h1 className="font-main text-4xl">{individualActivity.title}</h1>
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
          content {
            raw
          }
          featuredImage {
            gatsbyImageData(height: 500 width: 800)
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
export default Activity;
