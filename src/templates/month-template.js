import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../pages/components/Layout";
const slugify = require("slugify");

const IndividualMonthlyPage = ({ data, pageContext }) => {
  console.log(data.allContentfulLessonPlan.nodes);
  const lessonPlan = data.allContentfulLessonPlan.nodes.find(
    (lessonPlan) =>
      lessonPlan.month === pageContext.month &&
      lessonPlan.year === pageContext.year
  );
  const allActivities = data.allContentfulActivity.nodes;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months.indexOf(pageContext.month);
  const yearForSlug = pageContext.year;
  const previousPage = months[currentMonth - 1]
    ? months[currentMonth - 1].toLowerCase()
    : months[11].toLowerCase();
  const nextPage = months[currentMonth + 1]
    ? months[currentMonth + 1].toLowerCase()
    : months[0].toLowerCase();
  const isFirst = currentMonth === 0;
  const isLast = currentMonth === data.allContentfulLessonPlan.nodes.length - 1;
  let previousSlug = `/plans/${previousPage}-${yearForSlug}-lesson-plan`;
  let nextSlug = `/plans/${nextPage}-${yearForSlug}-lesson-plan`;
  if (isFirst) {
    previousSlug = `/plans/${previousPage}-${+yearForSlug - 1}-lesson-plan`;
  }
  if (isLast) {
    nextSlug = `/plans/${nextPage}-${+yearForSlug + 1}-lesson-plan`;
  }

  return (
    <Layout>
      <div className="font-main flex flex-col items-center p-0">
        <h2 className="font-main text-3xl">{lessonPlan.theme}</h2>
        <div className="flex gap-5 mt-4">
          {!isFirst && <Link to={previousSlug}>← Previous Page</Link>}
          {!isLast && <Link to={nextSlug}>Next Page →</Link>}
        </div>
        <div className="h-3/4 w-full overflow-x-scroll md:overflow-auto p-0">
          <table className="table-auto my-10 border border-black mx-auto">
            <thead>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Day of the Week
                </td>
                <th className="text-center p-5 border border-black">Monday</th>
                <th className="text-center p-5 border border-black">Tuesday</th>
                <th className="text-center p-5 border border-black">
                  Wednesday
                </th>
                <th className="text-center p-5 border border-black">
                  Thursday
                </th>
                <th className="text-center p-5 border border-black">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Developmental Area
                </td>
                <td className="text-center p-5 border border-black">
                  Emotional
                </td>
                <td className="text-center p-5 border border-black">
                  Cognitive
                </td>
                <td className="text-center p-5 border border-black">Social</td>
                <td className="text-center p-5 border border-black">Sensory</td>
                <td className="text-center p-5 border border-black">
                  Physical
                </td>
              </tr>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Week 1
                </td>
                {renderActivites("week1", lessonPlan, allActivities)}
              </tr>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Week 2
                </td>
                {renderActivites("week2", lessonPlan, allActivities)}
              </tr>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Week 3
                </td>
                {renderActivites("week3", lessonPlan, allActivities)}
              </tr>
              <tr>
                <td className="text-center p-5 underline border border-black">
                  Week 4
                </td>
                {renderActivites("week4", lessonPlan, allActivities)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualMonthlyPage;

export const query = graphql`
  query {
    allContentfulLessonPlan {
      nodes {
        id
        activities {
          activities {
            week1
            week2
            week3
            week4
          }
        }
        month
        theme
        year
      }
    }
    allContentfulActivity {
      nodes {
        title
        id
        week
        month
      }
    }
  }
`;

const renderActivites = (week, lessonPlan, allActivities) => {
  return lessonPlan.activities.activities[week].map((activity) => {
    if (activity) {
      const matchedActivity = allActivities.find(
        (specificActivity) => specificActivity.id === activity
      );
      const { month, week, id, title } = matchedActivity;
      const slug = slugify(title.toLowerCase());
      return (
        <td className="text-center p-5 border border-black" key={id}>
          <Link
            className="underline text-black visited:text-purple-600"
            to={`/activity/${month}/${week}/${slug}`}
          >
            {title}
          </Link>
        </td>
      );
    } else {
      return (
        <td className="text-center p-5 border border-black">
          No Activity found
        </td>
      );
    }
  });
};
