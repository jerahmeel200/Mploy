import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div
        className={styles.container}
        style={
          {
            //   backgroundColor: "red",
          }
        }
      >
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Transform your recruitment process.
            </h1>
            <p className={styles.postDesc}>
              Talent Acquisition System built for hiring managers and
              recruiters, to source and hire candidates faster.
            </p>
            <div className={styles.btn}>
              <button>Get started</button>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src="/heroImg.png" alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
