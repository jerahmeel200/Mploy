"use client";
import React from "react";
import styles from "./easySteps.module.css";
import Button from "@/reuse/Button/Button";
import { Slide, Fade } from "react-awesome-reveal";

const EasySteps = () => {
  const steps = [
    {
      id: 1,
      step: "1",
      title: "Run campaign",
      desc: "Mploy enables you to efficiently run campaigns with ease, streamlining your outreach efforts and maximizing candidate engagement seamlessly. We will find the candidates where they are. ",
    },
    {
      id: 2,
      step: "2",
      title: "Manage candidates",
      desc: "We simplify candidate management into one streamlined step, which offers a centralized platform to efficiently track, evaluate, and communicate with potential hires.",
    },
    {
      id: 3,
      step: "3",
      title: "e-Mploy",
      desc: " e-Mploy streamlines your entire hiring process into a single, efficient step, from sourcing candidates to managing applications, ensuring seamless operations and optimal results",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/girl_3.png" alt="" />
        </div>

        <div className={styles.textContainer}>
          {steps.map((item) => (
            <div className={styles.texts} key={item.id}>
              <div className={styles.heading}>
                <h1>{item.step}</h1>
                <h2>{item.title}</h2>
              </div>
              <div className={styles.desc}>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <Button title="Get started" href="/contact-us" mt="3vh" />
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
