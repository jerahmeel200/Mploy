"use client";
import React from "react";
import styles from "./hero.module.css";
import Button from "@/reuse/Button/Button";

import { Slide, Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <h1 className={styles.title}>
                Transform your recruitment process.
              </h1>
            </Slide>
            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <p className={styles.postDesc}>
                MPLOY provides you more ways to find ideal candidates. Our AI
                powered solution is built to solve modern day recruitment needs.
              </p>
            </Slide>
            {/* <div className={styles.btn}>
              <button></button>
            </div> */}

            <Slide direction={"left"} duration={2000} triggerOnce={true}>
              <Button
                title="Get started"
                href="https://mploy-dashboard.vercel.app/auth/login"
                mt="3vh"
              />
            </Slide>
          </div>
          <div className={styles.imgContainer}>
            <Fade duration={2000} triggerOnce={true}>
              <img src="/hero.png" alt="" className={styles.image} />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
