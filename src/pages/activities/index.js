import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const slugify = require("slugify");

const mostRecentActivitiesQuery = graphql`
  query recentActivitiesQuery {
    allContentfulActivity(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          content {
            raw
          }
          month
          week
          title
          tags
          id
          featuredImage {
            gatsbyImageData(height: 500, width: 800)
          }
        }
      }
    }
  }
`;

const ActivitiesPage = () => {
  const mostRecentActivities = useStaticQuery(mostRecentActivitiesQuery)
    .allContentfulActivity.edges;
  return (
    <Layout>
      <div className="mt-5 font-main flex flex-col items-center">
        <h2 className="font-main text-3xl underline">Activities</h2>
        <p className="font-writing text-center text-lg my-4">
          Our activities are created by experienced preschool teachers with
          growth and development at the heart of each activity. Organized by
          developmental area, age among other opitons
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mostRecentActivities.map((node) => {
          console.log(node.node);
          const { month, week, title, id } = node.node;
          const slug = slugify(title.toLowerCase());
          const image = getImage(node.node.featuredImage.gatsbyImageData);
          return (
            <div className="shadow-testing" key={id}>
              <Link to={`/activity/${month}/${week}/${slug}`}>
                <GatsbyImage
                  image={image}
                  alt={title}
                  className="border-b-2 border-black"
                />
                <div className="flex flex-col items-center p-3">
                  <h3 className="font-main text-2xl">{title}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ActivitiesPage;
