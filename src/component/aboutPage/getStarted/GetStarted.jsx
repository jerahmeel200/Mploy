"use client";
import React from "react";
import styles from "./getStarted.module.css";
import Button from "@/reuse/Button/Button";
const GetStarted = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get started with mploy today</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod
        ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris
        est. Amet amet tortor
      </p>
      <Button
        title="Get started"
        href="https://mploy-dashboard.vercel.app/auth/login"
        mt="3vh"
      />
    </div>
  );
};

export default GetStarted;
