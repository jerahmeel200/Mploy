import React from "react";
import styles from "./stats.module.css";

const Stats = () => {
  const stats = [
    {
      amount: "1000+",
      details: "Recruitment processes managed",
    },
    {
      amount: "50+",
      details: "Active recruitment team",
    },
    {
      amount: "500+",
      details: "Satisfied users",
    },
    {
      amount: "10",
      details: "countries",
    },
  ];
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.one}>
            <h1>1,000+</h1>
            <p>Recruitment processes managed</p>
          </div>
          <div className={styles.two}>
            <h1>50+</h1>
            <p>Active recruitment team</p>
          </div>
          <div className={styles.three}>
            <h1>500+</h1>
            <p>Satisfied user</p>
          </div>
          <div className={styles.four}>
            <h1>10</h1>
            <p>countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
