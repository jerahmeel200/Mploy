"use client";
import React from "react";
import styles from "./steps.module.css";
import Button from "@/reuse/Button/Button";
const Steps = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Recruit in 3 easy steps</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi
              euismod ipsum elementum justo arcu egestas etiam. Amet amet est
              arcu nmauris est. Amet amet tortor tincidunt eget tincidunt
              gravida quam ac . Varius condimentum vivamus consequat ac aenean
              netus facilisis cursus attr
            </p>
            <Button
              title="Get started"
              href="https://mploy-dashboard.vercel.app/auth/login"
              mt="3vh"
            />
          </div>
          <div className={styles.stepsContainer}>
            <img className={styles.image} src="/steps.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
