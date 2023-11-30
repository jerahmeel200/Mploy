import React from "react";
import styles from "./aboutStats.module.css";
const AboutStats = () => {
  const stats = [
    {
      amount: "100",
      details: " Total employees",
    },
    {
      amount: "10",
      details: "Nationlities",
    },
    {
      amount: "5",
      details: "Languages",
    },
  ];
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.wrapper}>
          {stats.map((item) => (
            <div className={styles.stats}>
              <h1>{item.amount}</h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
