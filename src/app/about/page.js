import GetStarted from "@/component/aboutPage/getStarted/GetStarted";
import Hero from "@/component/aboutPage/hero/Hero";
import Mission from "@/component/aboutPage/mission/Mission";
import Story from "@/component/aboutPage/story/Story";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Story />
      <GetStarted />
    </div>
  );
};

export default AboutUsPage;
