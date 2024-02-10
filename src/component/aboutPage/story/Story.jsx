"use client";
import React from "react";
import styles from "./story.module.css";

import { Slide, Fade } from "react-awesome-reveal";

const Recruite = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <img src="/mission.png" alt="" className={styles.image} />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>Our Mission</h1>
            </Slide>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi
                euismod ipsum elementum justo arcu egestas etiam. Amet amet est
                arcu nmauris est. Amet amet tortor tincidunt eget tincidunt
                gravida quam ac . Varius condimentum vivamus consequat ac aenean
                netus facilisis cursus ante. Varius condimentum vivamus
                consequat ac aenean netus facilisis cursus ante.
              </p>
            </Slide>
          </div>
        </div>

        <div className={`${styles.post} ${styles.post_reverse}`}>
          <div className={styles.imgContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <img src="/story.png" alt="" className={styles.image} />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>Our Story</h1>
            </Slide>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi
                euismod ipsum elementum justo arcu egestas etiam. Amet amet est
                arcu nmauris est. Amet amet tortor tincidunt eget tincidunt
                gravida quam ac . Varius condimentum vivamus consequat ac aenean
                netus facilisis cursus ante. Varius condimentum vivamus
                consequat ac aenean netus facilisis cursus ante.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruite;
