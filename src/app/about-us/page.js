import GetStarted from "@/component/aboutPage/getStarted/GetStarted";
import Hero from "@/component/aboutPage/hero/Hero";
import Mission from "@/component/aboutPage/mission/Mission";
import Story from "@/component/aboutPage/story/Story";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
