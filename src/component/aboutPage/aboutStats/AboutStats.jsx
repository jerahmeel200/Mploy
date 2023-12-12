"use client";
import React, { useState } from "react";
import Counter from "../../../reuse/Counter";
import styles from "./aboutStats.module.css";

const AboutStats = () => {
  const stats = [
    {
      initialValue: 0,
      targetValue: 100,
      step: 1,
      intervalDuration: 100,
      details: "Total employees",
    },
    {
      initialValue: 0,
      targetValue: 10,
      step: 1,
      intervalDuration: 200,
      details: "Nationalities",
    },
    {
      initialValue: 0,
      targetValue: 5,
      step: 1,
      intervalDuration: 300,
      details: "Languages",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          {stats.map((item, index) => (
            <div className={styles.stats} key={index}>
              <h1>
                <Counter
                  initialValue={item.initialValue}
                  targetValue={item.targetValue}
                  step={item.step}
                  intervalDuration={item.intervalDuration}
                />
              </h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
