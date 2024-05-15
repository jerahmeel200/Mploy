"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/reuse/Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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

            <Button title="Contact us" href="/contact-us" mt="3vh" />
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
              <Link href="/how-it-works" className="hover:underline">
                How it works
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy policy
              </Link>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "100px",
                  flexWrap: "wrap",
                }}>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "28px",
                  }}>
                  &copy; {new Date().getFullYear()} Mploy. All rights reserved.
                </p>
                <a href="https://twitter.com/WeareMploy" target="_blank">
                  <Image
                    className={styles.socials}
                    src="/x.png"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/mploy.ing/" target="_blank">
                  <Image
                    className={styles.socials}
                    src="/instagram.png"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61556300950639"
                  target="_blank">
                  <Image
                    className={styles.socials}
                    src="/facebook.png"
                    width={30}
                    height={30}
                  />
                </a>
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
