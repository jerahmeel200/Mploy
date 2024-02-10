"use client";
import React from "react";
import styles from "./hero.module.css";
import Button from "@/reuse/Button/Button";
const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Transform your recruitment process.
            </h1>
            <p className={styles.postDesc}>
              Talent Acquisition System built for hiring managers and
              recruiters, to source and hire candidates faster.
            </p>
            {/* <div className={styles.btn}>
              <button></button>
            </div> */}

            <Button
              title="Get started"
              href="https://mploy-dashboard.vercel.app/auth/login"
              mt="3vh"
            />
          </div>
          <div className={styles.imgContainer}>
            <img src="/hero.png" alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
