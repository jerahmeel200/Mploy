import React from "react";
import styles from "./misson.module.css";
const Mission = () => {
  return (
    <div
      className={styles.container}
      style={
        {
          //   backgroundColor: "red",
        }
      }
    >
      {/* <div className="main"> */}

      <div
        className={styles.post}
        style={{
          display: "flex",
          width: "100%",
          //   alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Our mission</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod
            ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris
            est. Amet amet tortor tincidunt eget tincidunt gravida quam ac .
            Varius condimentum vivamus consequat ac aenean netus facilisis
            cursus ante. Varius condimentum vivamus consequat ac aenean netus
            facilisis cursus ante.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/mission.png" alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
