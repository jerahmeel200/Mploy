"use client";
import React from "react";
import styles from "./steps.module.css";
import Button from "@/reuse/Button/Button";
import { Slide, Fade } from "react-awesome-reveal";
const Steps = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>Recruit in 3 easy steps</h1>
            </Slide>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                Our streamlined process simplifies recruitment: launch targeted
                campaigns, efficiently manage candidates, and seamlessly employ
                the best fit for your team, all in just three steps
              </p>
            </Slide>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <Button
                title="Get started"
                href="https://mploy-dashboard.vercel.app/auth/login"
                mt="3vh"
              />
            </Slide>
          </div>
          <div className={styles.stepsContainer}>
            <Fade duration={2000} triggerOnce={true}>
              <img className={styles.image} src="/home_group.png" alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
