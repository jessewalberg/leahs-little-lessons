import React from "react";
import map from "../images/map.svg";
import light from "../images/light.svg";
import paper from "../images/paper.svg";
import Layout from "./components/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center font-main mt-32">
          <h2 className="text-7xl">Little Lessons for your Little Learners</h2>
          <h4 className="text-3xl text-center mt-4">
            Free Developmentally beneficial activities everyday
          </h4>
        </div>
        <div className="flex justify-around text-5xl font-main mt-32">
          <Link to={"/plans/2021"}>
            <div className="flex flex-col items-center space-y-6">
              <img src={map} />
              <h4>Lesson Plans</h4>
            </div>
          </Link>
          <Link to={"/activities"}>
            <div className="flex flex-col items-center space-y-6">
              <img src={light} />
              <h4>Activities</h4>
            </div>
          </Link>
          <Link to={'/blog'}>
          <div className="flex flex-col items-center space-y-6">
            <img src={paper} />
            <h4>Articles/Posts</h4>
          </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};
export default IndexPage;
