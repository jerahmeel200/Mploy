"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/reuse/Button/Button";
const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{
        background: "rgba(11, 26, 62, 1)",
        paddingLeft: "50px",
        paddingright: "50px",
      }}>
      <div className="main">
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <img src="/logo_white_transparent.png" />
              </Link>
            </div>

            <p className={styles.desc}>
              Talent Acquisition System built for hiring managers and
              recruiters, to source and hire candidates faster.
            </p>

            <Button title="Contact us" href="/contact" mt="3vh" />
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <Link href="/">About Us</Link>
              <Link href="/">How it works</Link>
              <Link href="/">Privacy policy</Link>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "100px",
                }}>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "28px",
                    fontFamily: "montserrat, serif",
                  }}>
                  &copy; 2023 Mploy. All rights reserved.
                </p>
                <Image
                  className={styles.socials}
                  src="/x.png"
                  width={30}
                  height={30}
                />
                <Image
                  className={styles.socials}
                  src="/instagram.png"
                  width={30}
                  height={30}
                />
                <Image
                  className={styles.socials}
                  src="/facebook.png"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
