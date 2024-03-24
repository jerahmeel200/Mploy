"use client";
import React from "react";
import styles from "./recruite.module.css";

import { Slide, Fade } from "react-awesome-reveal";

const Recruite = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <img src="/board2.png" alt="" className={styles.image} />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>
                Easy to use recruitment software.
              </h1>
            </Slide>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Our user-friendly recruitment software is designed to simplify
                the hiring process, streamline and collaborate with hiring teams
                to attract top talent effortlessly.
              </p>
            </Slide>
          </div>
        </div>

        <div className={`${styles.post} ${styles.post_reverse}`}>
          <div className={styles.imgContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <img src="/board3.png" alt="" className={styles.image} />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>
                Recruitment campaign that matches your brand identity.
              </h1>
            </Slide>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Find the best candidates using our tailored made recuiting
                campaigns that match your brand identity. We provide custom made
                dashboards and processes to help target, attract and recruit
                your perfect candidates and meet your hiring goals.
              </p>
            </Slide>
          </div>
        </div>

        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <img src="/match2.png" alt="" className={styles.image} />
            </Slide>
          </div>
          <div className={styles.textContainer}>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>
                Matching businesses to their desired candidates.
              </h1>
            </Slide>
            <Slide direction={"right"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                We empower businesses to find the perfect talent fit, driving
                long-term success and growth. Trust us to be your partner in
                finding the perfect match, we will provide you with a list of
                candidates that meet your job requirements.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruite;
