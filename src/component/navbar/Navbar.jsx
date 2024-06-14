"use client";
// Navbar.js

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

import MobileDrawer from "./MobileDrawer";
import Button from "@/reuse/Button/Button";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <>
      <style jsx>{``}</style>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={"/"}>
            <img src="/logo_blue_transparent_new.webp" className="w-[160px]" />
          </Link>
          <div className={styles.links}>
            {navLinks.map((item) => {
              const active = pathname === item?.link;
              return (
                <Link href={item.link} key={item.id}>
                  <span
                    className={`hover:underline ${!active ? "text-[#333333]" : "text-[#2F6BF6]"}`}>
                    {item.title}
                  </span>
                </Link>
              );
            })}
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
