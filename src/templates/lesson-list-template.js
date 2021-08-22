import React from "react";
import Layout from "../pages/components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MonthlyPage = ({ data, pageContext }) => {

  const months = data.allContentfulLessonPlan.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/plans/2021" : `/plans/${currentPage + 2019}`;
  const nextPage = `/plans/${(currentPage + 2021)}`;
  return (
    <Layout>
      <div className="mt-32 font-main flex flex-col items-center">
        <h2 className="font-main text-6xl">Lesson Plans By Month</h2>
        <p className="font-writing text-center text-3xl mt-4 w-2/3 ">
          Lesson plans are a month of activities. Feel free to use these as you
          want or need. Change the order. Do Februaries activities in June
          whatever.
        </p>
        {!isFirst && (
          <Link to={prevPage}>
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage}>
            Next Page →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-3 gap-40 mx-10 mt-20">
        {months.map((month) => {
          console.log(month)
          const image = getImage(month.node.featuredImage.gatsbyImageData);
          const slug = month.node.slug;
          return (
            <div className="shadow-testing">
              <GatsbyImage image={image} alt={"123"} />
              <Link to={`/plans/${slug}`}>
                <div className="flex flex-col items-center p-5 space-y-4">
                  <h3 className="font-main text-3xl">
                    {month.node.metadata.theme}
                  </h3>
                  <p className="text-center">
                    {month.node.description.description}
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

export const query = graphql`
  query MonthsQuery($skip: Int!, $limit: Int!) {
    allContentfulLessonPlan(limit: $limit, skip: $skip) {
      edges {
        node {
          slug
          featuredImage {
            gatsbyImageData(width: 500, height: 300)
          }
          metadata {
            month
            year
            theme
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export default MonthlyPage;
