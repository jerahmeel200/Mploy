"use client";

import React, { useState, useEffect } from "react";

const Counter = ({ initialValue, targetValue, step, intervalDuration }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetValue) {
        setCount((prevCount) => prevCount + step);
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, targetValue, step, intervalDuration]);

  return <span>{count.toLocaleString()}</span>;
};

export default Counter;

// use
{
  /* <h1><Counter initialValue={0} targetValue={1000} step={10} intervalDuration={100} /></h1> */
}
