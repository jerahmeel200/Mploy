"use client";
import React from "react";
import styles from "./hero.module.css";
import AboutStats from "../aboutStats/AboutStats";
import Stats from "@/component/landingPage/stats/Stats";

import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <div
        className={styles.container}
        style={
          {
            //   backgroundColor: "red",
          }
        }>
        <div className="main">
          <div className={styles.post}>
            <div className={styles.textContainer}>
              <Slide direction={"left"} duration={2000} triggerOnce={true}>
                <h1 className={styles.title}>Attractive recruitment process</h1>
              </Slide>
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "683px",
              }}>
              <Slide direction={"left"} duration={2000} triggerOnce={true}>
                <p className={styles.postDesc}>
                  We at mploy want to help your company attract the best
                  candidates for your hiring needs. Your candidates will have an
                  easy way to apply to the open positions and your team will be
                  able to follow-up the recruitment status and contact the
                  successful candidates through our top easy to use application.
                </p>
              </Slide>
            </div>
          </div>
        </div>

        <Stats showAboutStats />
      </div>
    </>
  );
};

export default Hero;
