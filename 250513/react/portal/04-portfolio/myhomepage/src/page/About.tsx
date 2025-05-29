import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="main about">
      <div className="content-inner">
        <SectionTitle title="About" subTitle="저는.." />
        <div>about 본문</div>
      </div>
    </div>
  );
};

export default About;
