import * as React from "react";
import Layout from "../components/Layout";

const IndividualMonthlyPage = () => {
  return (
    <Layout>
      <div className="mt-32 font-main flex flex-col items-center">
        <h2 className="font-main text-6xl">January 2021 Lesson Plan</h2>
        <a>Previous Month</a>
        <a>Next Month</a>

        <table className="table-auto mt-20 border border-black">
          <thead>
            <tr>
              <td className="p-5 underline">Day of the Week</td>
              <th className="p-5 border border-black">Tuesday</th>
              <th className="p-5 border border-black">Monday</th>
              <th className="p-5 border border-black">Wednesday</th>
              <th className="p-5 border border-black">Thursday</th>
              <th className="p-5 border border-black">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 underline">Developmental Area</td>
              <td className="p-5 border border-black">Emotional</td>
              <td className="p-5 border border-black">Cognitive</td>
              <td className="p-5 border border-black">Social</td>
              <td className="p-5 border border-black">Sensory</td>
              <td className="p-5 border border-black">Physical</td>
            </tr>
            <tr>
              <td className="p-5 underline">Week 1</td>
            </tr>
            <tr>
              <td className="p-5 underline">Week 2</td>
            </tr>
            <tr>
              <td className="p-5 underline">Week 3</td>
            </tr>
            <tr>
              <td className="p-5 underline">Week 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default IndividualMonthlyPage;
