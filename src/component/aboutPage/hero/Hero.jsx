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
                  Lorem ipsum dolor sit amet consectetur. pharetra morbi euismod
                  ipsum elementum justoarcu egestas etiam. Amet amet est arcu
                  nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                  nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                  quam ac.
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
