import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Tell us how we can work together</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur. pharetra morbi euismod ipsum
            elementum justoarcu egestas etiam. Amet amet est arcu nmauris est.
            Amet amet tortor tincidunt eget tincidunt gravida nmauris est. Amet
            amet tortor tincidunt eget tincidunt gravida quam ac .
          </p>
          <div className={styles.info}>
            <p>
              Contact us: <span className={styles.blue}>+234 682992000</span>
            </p>
            <p>
              Email us: <span className={styles.blue}> info@mploy.com</span>
            </p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>How can we help?</h1>

            <div className={styles.top}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>First name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Last name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Company name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Phone</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.emailInput}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Message</label>
                <input
                  className={styles.messageInput}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.btn}>
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
