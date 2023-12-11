import React from "react";
import styles from "./steps.module.css";
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
              netus facilisis cursus ante.
            </p>
            <div className={styles.btn}>
              <button>Get started</button>
            </div>
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
