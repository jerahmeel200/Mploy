"use client";

import React, { useState, useEffect } from "react";
import styles from "./stats.module.css";

const Stats = () => {
  const [counters, setCounters] = useState({
    recruitmentProcesses: 0,
    activeTeam: 0,
    satisfiedUsers: 0,
    countries: 0,
  });

  useEffect(() => {
    const countUp = () => {
      const targetValues = {
        recruitmentProcesses: 1000,
        activeTeam: 50,
        satisfiedUsers: 500,
        countries: 10,
      };

      const step = 10; // Change the step value for different speed

      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const updatedCounters = { ...prevCounters };
          let allCountersReached = true;

          for (const key in updatedCounters) {
            if (updatedCounters[key] < targetValues[key]) {
              updatedCounters[key] = Math.min(
                updatedCounters[key] + step,
                targetValues[key]
              );
              allCountersReached = false;
            }
          }

          if (allCountersReached) {
            clearInterval(interval);
          }

          return updatedCounters;
        });
      }, 100); // Change the interval duration for different speed
    };

    countUp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.one}>
            <h1>{counters.recruitmentProcesses.toLocaleString()}+</h1>
            <p>Recruitment processes managed</p>
          </div>
          <div className={styles.two}>
            <h1>{counters.activeTeam.toLocaleString()}+</h1>
            <p>Active recruitment team</p>
          </div>
          <div className={styles.three}>
            <h1>{counters.satisfiedUsers.toLocaleString()}+</h1>
            <p>Satisfied user</p>
          </div>
          <div className={styles.four}>
            <h1>{counters.countries.toLocaleString()}</h1>
            <p>countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
