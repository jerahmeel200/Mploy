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

export default Stats;
