import React from "react";
import styles from "./hero.module.css";
import AboutStats from "../aboutStats/AboutStats";
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
        <div className="main">
          <div className={styles.post}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Attractive recruitment process</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur. pharetra morbi euismod
                ipsum elementum justoarcu egestas etiam. Amet amet est arcu
                nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                quam ac.{" "}
              </p>
            </div>
          </div>
        </div>
        <AboutStats />
      </div>
    </>
  );
};

export default Hero;
