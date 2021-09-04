import React from "react";
import map from "../images/map.svg";
import me from "../images/me.svg"
import light from "../images/light.svg";
import paper from "../images/paper.svg";
import Layout from "./components/Layout";
import { Link } from "gatsby";
import SEO from "./components/SEO"

const IndexPage = () => {
  return (
    <>
    <SEO 
        pathname='/'
    />
      <Layout>
        <div className="flex flex-col items-center font-main my-5">
          <h1 className="text-4xl text-center">Little Lessons for your Little Learners</h1>
          <h2 className="text-xl text-center mt-4 font-writing">
            Free Developmentally beneficial activities everyday.
          </h2>
          <h2 className="text-xl text-center mt-4 font-writing">
            Activities for children from 1 to 4 years old!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 justify-around text-5xl font-main my-20">
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
          <Link to={'/about'}>
          <div className="flex flex-col items-center space-y-6">
            <img src={me} />
            <h4>About</h4>
          </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};
export default IndexPage;
