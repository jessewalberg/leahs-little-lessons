// import * as React from "react";
// import Layout from "../components/Layout";
// import test1 from "../../images/test-article.jpg";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const MonthlyPage = () => {
//   const data = useStaticQuery(monthsQuery);
//   const months = data.allContentfulLessonPlan.edges;
//   return (
//     <Layout>
//       <div className="mt-32 font-main flex flex-col items-center">
//         <h2 className="font-main text-6xl">Lesson Plans By Month</h2>
//         <p className="font-writing text-center text-3xl mt-4 w-2/3 ">
//           Lesson plans are a month of activities. Feel free to use these as you
//           want or need. Change the order. Do Februaries activities in June
//           whatever.
//         </p>
//       </div>
//       <div className="grid grid-cols-3 gap-40 mx-10 mt-20">
//         {months.map((month) => {
//           const image = getImage(month.node.featuredImage.gatsbyImageData);
//           const slug = month.node.slug;
//           return (
//             <div className="shadow-testing">
//               <GatsbyImage image={image} alt={"123"} />
//               <Link to={`/plans/${slug}`}>
//                 <div className="flex flex-col items-center p-5 space-y-4">
//                   <h3 className="font-main text-3xl">
//                     {month.node.metadata.theme}
//                   </h3>
//                   <p className="text-center">
//                     {month.node.description.description}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// };

// const monthsQuery = graphql`
//   query MonthsQuery {
//     allContentfulLessonPlan {
//       edges {
//         node {
//           slug
//           featuredImage {
//             gatsbyImageData(width: 500, height: 300)
//           }
//           metadata {
//             month
//             year
//             theme
//           }
//           description {
//             description
//           }
//         }
//       }
//     }
//   }
// `;

// export default MonthlyPage;
