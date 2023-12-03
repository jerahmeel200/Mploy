import React from "react";
import styles from "./heroSection.module.css";

const HeroSection = () => {
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
              <h1 className={styles.title}>Recruit in 3 easy steps</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur. pharetra morbi euismod
                ipsum elementum justoarcu egestas etiam. Amet amet est arcu
                nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                nmauris est. Amet amet tortor tincidunt eget tincidunt gravida
                quam ac .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
