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
                  Lorem ipsum dolor sit amet consectetur. pharetra morbi euismod
                  ipsum elementum justoarcu egestas etiam. Amet amet est arcu
                  nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                  nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                  quam ac .
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
