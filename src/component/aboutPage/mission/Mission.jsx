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
      }>
      {/* <div className="main"> */}

      <div
        className={styles.post}
        style={{
          display: "flex",
          width: "100%",
          //   alignItems: "center",
          justifyContent: "center",
        }}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Our Mission</h1>
          <p className={styles.postDesc}>
            Our mission is to help organisations find the best people to secure
            its best performance and growth.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/mission_new.jpg" alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
