"use client";
import React from "react";
import styles from "./story.module.css";

import { Slide, Fade } from "react-awesome-reveal";

const Recruite = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.post}>
          <Slide
            className={styles.imgContainer}
            direction={"left"}
            duration={2000}
            triggerOnce={true}>
            <img src="/misison_new.jpg" alt="" className={styles.image} />
          </Slide>
          <div className={styles.textContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>Our Mission</h1>
            </Slide>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Our mission is to help organisations find the best people to
                secure its best performance and growth.
              </p>
            </Slide>
          </div>
        </div>

        <div className={`${styles.post} ${styles.post_reverse}`}>
          <Slide
            className={styles.imgContainer}
            direction={"right"}
            duration={2000}
            triggerOnce={true}>
            <img src="/story_new.jpg" alt="" className={styles.image} />
          </Slide>

          <div className={styles.textContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>Our Story</h1>
            </Slide>

            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                We have been in both sides of the recruitment process. We have
                experienced the challenges of going through the long application
                processes of companies. We have also tried to find the best
                talent to fill the open positions of our companies. We knew we
                could make it better using technology and adapting the processes
                to the current world. We know where to find the best people for
                your company.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruite;
