"use client";
import React from "react";
import styles from "./easySteps.module.css";
import Button from "@/reuse/Button/Button";

const EasySteps = () => {
  const steps = [
    {
      id: 1,
      step: "1",
      title: "Run campaign",
      desc: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas  Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac .     Varius ",
    },
    {
      id: 2,
      step: "2",
      title: "Manage candidates",
      desc: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas  Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac .     Varius ",
    },
    {
      id: 3,
      step: "3",
      title: "e-Mploy",
      desc: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas  Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac .     Varius ",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/girl.png" alt="" />
        </div>

        <div className={styles.textContainer}>
          {steps.map((item) => (
            <div className={styles.texts} key={item.id}>
              <div className={styles.heading}>
                <h1>{item.step}</h1>
                <h2>{item.title}</h2>
              </div>
              <div className={styles.desc}>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <Button
            title="Get started"
            href="https://mploy-dashboard.vercel.app/auth/login"
            mt="3vh"
          />
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
