import Campaign from "@/component/landingPage/campaign/Campaign";
import Hero from "@/component/landingPage/hero/Hero";
import Match from "@/component/landingPage/match/Match";
import Recruite from "@/component/landingPage/recruite/Recruite";
import Stats from "@/component/landingPage/stats/Stats";
import Steps from "@/component/landingPage/steps/Steps";
import Tested from "@/component/landingPage/tested/Tested";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Recruite />
      <Campaign />
      <Match />
      <Steps />
      <Tested />
    </div>
  );
};

export default page;
