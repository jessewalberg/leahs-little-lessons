import React from "react";
import { graphql } from "gatsby";
import Layout from "../pages/components/Layout";

const IndividualMonthlyPage = ({ data, pageContext }) => {
  const lessonPlan = data.allContentfulLessonPlan.nodes[0];
  const allActivities = data.allContentfulActivity.nodes;
  return (
    <Layout>
      <div className="mt-32 font-main flex flex-col items-center">
        <h2 className="font-main text-6xl">{lessonPlan.month} {lessonPlan.year} Lesson Plan</h2>
        <a>Previous Month</a>
        <a>Next Month</a>

        <table className="table-auto mt-20 border border-black">
          <thead>
            <tr>
              <td className="text-center p-5 underline border border-black">Day of the Week</td>
              <th className="text-center p-5 border border-black">Tuesday</th>
              <th className="text-center p-5 border border-black">Monday</th>
              <th className="text-center p-5 border border-black">Wednesday</th>
              <th className="text-center p-5 border border-black">Thursday</th>
              <th className="text-center p-5 border border-black">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center p-5 underline border border-black">Developmental Area</td>
              <td className="text-center p-5 border border-black">Emotional</td>
              <td className="text-center p-5 border border-black">Cognitive</td>
              <td className="text-center p-5 border border-black">Social</td>
              <td className="text-center p-5 border border-black">Sensory</td>
              <td className="text-center p-5 border border-black">Physical</td>
            </tr>
            <tr>
              <td className="text-center p-5 underline border border-black">Week 1</td>
              { renderActivites('week1', lessonPlan, allActivities) }
            </tr>
            <tr>
              <td className="text-center p-5 underline border border-black">Week 2</td>
              {renderActivites('week2', lessonPlan, allActivities)}
            </tr>
            <tr>
              <td className="text-center p-5 underline border border-black">Week 3</td>
              {renderActivites('week3', lessonPlan, allActivities)}
            </tr>
            <tr>
              <td className="text-center p-5 underline border border-black">Week 4</td>
              {renderActivites('week4', lessonPlan, allActivities)}
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default IndividualMonthlyPage;

export const query = graphql`
  query ($month: String) {
    allContentfulLessonPlan(filter: { month: { eq: $month } }) {
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
    }
  }
  }
`;

const renderActivites = (week, lessonPlan, allActivities) => {
  return lessonPlan.activities.activities[week].map(activity => {
    if (activity) {
    const matchedActivity = allActivities.find(specificActivity => specificActivity.id === activity);
    console.log(matchedActivity)
    return (
      <td className="text-center p-5 border border-black" key={matchedActivity.id}>{matchedActivity.title}</td>
    )
    } 
    else {
      return <td className="text-center p-5 border border-black">No Activity found</td>
    }
  })
}