"use client";
import React from "react";
import styles from "./heroSection.module.css";
import { Slide, Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="main">
          <div className={styles.post}>
            <div className={styles.textContainer}>
              <Slide direction={"left"} duration={2000} triggerOnce={true}>
                <h1 className={styles.title}>Recruit in 3 easy steps</h1>
              </Slide>
              <Slide direction={"left"} duration={2000} triggerOnce={true}>
                <p className={styles.desc}>
                  Recruiting is as simple as 1-2-3. Sign up, post your job
                  listings, and connect with top talent effortlessly, all in
                  just three easy steps.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
