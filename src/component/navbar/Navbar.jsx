import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Hamburger from "../authLink/Hamburger";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className="main"> */}
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>Mploy</h1>
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about-us" className={styles.link}>
            About us
          </Link>
          <Link href="/how-it-works" className={styles.link}>
            How it works
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact us
          </Link>
        </div>
        <div className={styles.btn}>
          <button>Log in</button>
        </div>
        <Hamburger />
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
