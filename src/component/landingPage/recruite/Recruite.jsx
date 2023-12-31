import React from "react";
import styles from "./recruite.module.css";
const Recruite = () => {
  return (
    <div
      className={styles.container}
      style={
        {
          //   backgroundColor: "red",
        }
      }
    >
      <div className="main">
        <div
          className={styles.post}
          style={{
            display: "flex",
            width: "100%",
            //   alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.imgContainer}>
            <img src="/board2.png" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Easy to use recruitment software.</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi
              euismod ipsum elementum justo arcu egestas etiam. Amet amet est
              arcu nmauris est. Amet amet tortor tincidunt eget tincidunt
              gravida quam ac . Varius condimentum vivamus consequat ac aenean
              netus facilisis cursus ante. Varius condimentum vivamus consequat
              ac aenean netus facilisis cursus ante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruite;
