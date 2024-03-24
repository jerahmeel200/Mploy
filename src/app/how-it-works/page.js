import Footer from "@/component/footer/Footer";
import EasySteps from "@/component/howItWorks/easySteps/EasySteps";
import HeroSection from "@/component/howItWorks/heroSection/HeroSection";
import Navbar from "@/component/navbar/Navbar";
import React from "react";

const HowItWorksPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EasySteps />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
