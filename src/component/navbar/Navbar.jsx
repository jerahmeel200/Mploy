"use client";
// Navbar.js

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
      link: "/about",
    },
    {
      id: 3,
      title: "How it works",
      link: "/works",
    },
    {
      id: 6,
      title: "Contact us",
      link: "/contact",
    },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  console.log("opened", mobileNavOpen);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1>Mploy</h1>
          </div>
          <div className={styles.links}>
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className={styles.link}>{item.title}</div>
              </Link>
            ))}
          </div>
          <Link href="https://mploy-dashboard.vercel.app/auth/login">
            <div className={styles.btn}>
              <button>Log in</button>
            </div>
          </Link>
          <motion.div
            className={styles.menu}
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu />
          </motion.div>
        </div>
      </div>
      <div className="main">
        {mobileNavOpen && (
          <motion.div
            variants={mobileMenuVariant}
            className={styles.mobileMenu}
            animate={mobileNavOpen ? "opened" : "closed"}
          >
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              <X />
            </motion.button>
            <motion.div variants={ulVariant}>
              {navLinks.map((item) => (
                <div className={styles.listItem}>
                  <Link href={item.link} key={item.id}>
                    <div className={styles.lists}>{item.title}</div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
