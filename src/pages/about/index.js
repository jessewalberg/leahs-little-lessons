import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <Layout>
      <div className="text-center">
      <StaticImage 
        src="../../images/about-pic.jpeg"
        placeholder="blurred"
        width={325}
        height={450}
      />
      </div>
    
    <h2 className="font-main text-center text-3xl my-4">Hi! I'm Leah, the author and creator of "Leah's Little Lessons."</h2> 
    <p className="text-lg">
    Here I share all of my personally made lesson plans and write ups documenting how each activity went with my little one. I encourage you to use them and make them your own! 
    I hope these guide your at home learning adventures with your littles as it did with mine! <br/>Questions? Need help with modifications based off your child's age or development? I'm here for you! <br/><br/></p><p className="text-3xl text-center font-main">leah@leahslittlelessons.com</p>
    <br/>
    <p>This moment in time and surprise pandemic inspired me to create lessons for my (at the time 1 year old) now two year old. that I knew he would be getting in a preschool setting, but yet, at home with me, safe and healthy.</p><br/>
    <p>As a former student, teacher and now mom, I wanted a place to share my at-home learning with my little one hoping it can help guide and encourage you to do the same. We need to keep these little ones challenged and interested!</p><br/>
    <p>
    I've created this system for willing, open-minded parents who value their child's development and educational future, even if you're at home! For many of us this pandemic brought fear and uncertainty. I have one thing thats certain. Your child's learning IS possible, at home!</p>
    <p><br/>
    My 12 year experience working hands-on with children and families, Bachelors in Early Childhood and Psychology and becoming a first-time mom to a rambunctious, but loving two year old boy has helped me create a unique learning experience for young children during this crazy pandemic. <br/>I hope you join along this journey with our family while we embrace the new "norm" of learning!</p>
    </Layout>
  );
};

export default About;
