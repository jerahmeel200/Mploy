import React from "react";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/loginImage.png" className={styles.image} alt="" />
        </div>
        <div className={styles.formContainer}>
          <h1>Mploy</h1>
          <p>Log in to your account</p>
          <div className={styles.form}>
            <div className={styles.inputContainer}>
              <label>Email address</label>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Email address</label>
              <input
                className={styles.input}
                type="password"
                placeholder="Enter password"
              />
              Reset password
            </div>
          </div>
          <div className={styles.btn}>
            <button>continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
