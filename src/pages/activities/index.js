import * as React from "react";
import Layout from "../components/Layout";
import test1 from "../../images/test-article.jpg";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const mostRecentActivitiesQuery = graphql`
  query recentActivitiesQuery {
    allContentfulActivity(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          month
          week
          title
          tags
          slug
          id
          featuredImage {
            gatsbyImageData(height: 500 width: 800)
          }
        }
      }
    }
  }
`;

const ActivitiesPage = () => {
  const mostRecentActivities = useStaticQuery(mostRecentActivitiesQuery)
    .allContentfulActivity.edges;
  console.log(mostRecentActivities, "08888888888888888888888888888");
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
        const { month, week, title, slug, id } = node.node;
        const image = getImage(node.node.featuredImage.gatsbyImageData);
        return (
          
            <div className="shadow-testing" key={id}>
              <Link to={`/activity/${month}/${week}/${slug}`}>
              <GatsbyImage image={image} alt={"123"} />
              <div className="flex flex-col items-center p-3">
                <h3 className="font-main text-2xl">{title}</h3>
                <p className="text-center">
                  volutpat odio facilisis mauris sit amet massa vitae tortor
                  condimentum lacinia quis vel eros donec ac odio tempor orci
                  dapibus ultrices in
                </p>
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
