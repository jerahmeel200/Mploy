import React from "react";
import styles from "./steps.module.css";
const Steps = () => {
  return (
    <div className={styles.container}>
      <div className="main">
        <div className={styles.post}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Recruit in 3 easy steps</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi
              euismod ipsum elementum justo arcu egestas etiam. Amet amet est
              arcu nmauris est. Amet amet tortor tincidunt eget tincidunt
              gravida quam ac . Varius condimentum vivamus consequat ac aenean
              netus facilisis cursus ante.
            </p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.steps}>
              <img src="/check.png" alt="" />
              <p>Run campaign</p>
            </div>
            <div className={styles.steps}>
              <img src="/check.png" alt="" />
              <p>Manage candidates</p>
            </div>
            <div className={styles.steps}>
              <img src="/check.png" alt="" />
              <p>e-Mploy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
