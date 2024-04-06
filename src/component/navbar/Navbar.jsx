"use client";
// Navbar.js

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

import MobileDrawer from "./MobileDrawer";
import Button from "@/reuse/Button/Button";
const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About us",
      link: "/about-us",
    },
    {
      id: 3,
      title: "How it works",
      link: "/how-it-works",
    },
    {
      id: 6,
      title: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <style jsx>{``}</style>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={"/"}>
            <img src="/logo_blue_transparent_new.webp" className="w-[180px]" />
          </Link>
          <div className={styles.links}>
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className={styles.link}>{item.title}</div>
              </Link>
            ))}
            <Button
              title="Log in"
              href="https://mploy-dashboard.vercel.app/auth/login"
            />
          </div>

          <div className={styles.mobileMenu}>
            <MobileDrawer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
