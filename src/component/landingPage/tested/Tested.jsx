import React from "react";
import styles from "./tested.module.css";
const Tested = () => {
  const items = [
    {
      id: 1,
      name: "John Doe",
      role: " Director- techlab",
      image: "/avater.png",
      des: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac ",
    },
    {
      id: 1,
      name: "John Doe",
      role: " Director- techlab",
      image: "/avater.png",
      des: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac ",
    },
    {
      id: 1,
      name: "John Doe",
      role: " Director- techlab",
      image: "/avater.png",
      des: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac ",
    },
    {
      id: 1,
      name: "John Doe",
      role: " Director- techlab",
      image: "/avater.png",
      des: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac ",
    },
    {
      id: 1,
      name: "John Doe",
      role: " Director- techlab",
      image: "/avater.png",
      des: "Lorem ipsum dolor sit amet consectetur. Arcu pharetra morbi euismod ipsum elementum justo arcu egestas etiam. Amet amet est arcu nmauris est. Amet amet  tortor tincidunt eget tincidunt gravida quam ac ",
    },
  ];
  return (
    <section>
      <div className={styles.main}>
        <h1 className={styles.title}>Tested and trusted </h1>
        <br />
        <p className="max-w-[700px] mx-auto text-center text-[20px]">
          With a proven track record of successful hires, we ensure a seamless
          hiring process that instills confidence in both candidates and
          employers. Count on us to deliver results-driven solutions that align
          seamlessly with your hiring needs.
        </p>
        {/* <div className={styles.container}>
          {items.map((item, index) => (
            <div className={styles.items} key={index}>
              <div className={styles.top}>
                <img src={item.image} alt="" />
                <div>
                  <h2 className={styles.name}>{item.name}</h2>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </div>
              <div className={styles.bottom}>
                <p className={styles.desc}>{item.des}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Tested;
