import * as React from "react";
import Layout from "../components/Layout";
import test1 from "../../images/test-article.jpg";

const ActivitiesPage = () => {
  return (
    <Layout>
      <div className="mt-32 font-main flex flex-col items-center">
        <h2 className="font-main text-6xl">Activities</h2>
        <p className="font-writing text-center text-3xl mt-4 w-2/3 ">
          Our activities are created by experienced preschool teachers with
          growth and development at the heart of each activity. Organized by
          developmental area, age among other opitons
        </p>
      </div>
      <div className="flex mt-10 space-x-24 justify-around mx-12">
        <div className="shadow-testing">
          <img className="w-auto h-auto" src={test1} />
          <div className="flex flex-col items-center p-5 space-y-4">
            <h3 className="font-main text-3xl">Activity Name</h3>
            <p className="text-center">
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in
            </p>
          </div>
        </div>
        <div className="shadow-testing">
          <img className="w-auto h-auto" src={test1} />
          <div className="flex flex-col items-center p-5 space-y-4">
            <h3 className="font-main text-3xl">Activity Name</h3>
            <p className="text-center">
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in
            </p>
          </div>
        </div>
        <div className="shadow-testing">
          <img className="w-auto h-auto" src={test1} />
          <div className="flex flex-col items-center p-5 space-y-4">
            <h3 className="font-main text-3xl">Activity Name</h3>
            <p className="text-center">
              volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum lacinia quis vel eros donec ac odio tempor orci
              dapibus ultrices in
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivitiesPage;
