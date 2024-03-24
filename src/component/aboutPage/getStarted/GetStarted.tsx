"use client";
import React from "react";
import styles from "./getStarted.module.css";
import Button from "@/reuse/Button/Button";
const GetStarted = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get started with MPLOY today</h1>
      <p className={styles.desc}>
        Embark on your recruitment journey with confidence by getting started
        with mploy today. Our platform offers the tools and resources you need
        to streamline your hiring process and find the perfect candidates for
        your team.
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
