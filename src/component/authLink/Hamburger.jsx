"use client";
import Link from "next/link";
import styles from "./hamburger.module.css";
import { useState } from "react";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}

      {/* <div className={styles.responsiveMenu}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about-us" className={styles.link}>
          About us
        </Link>
        <Link href="/how-it-works" className={styles.link}>
          how it works
        </Link>
        <Link href="/contact-us" className={styles.link}>
          Contact us
        </Link>
      </div> */}
    </>
  );
};

export default Hamburger;
