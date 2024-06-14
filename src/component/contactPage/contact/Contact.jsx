"use client";
import React from "react";
import styles from "./contact.module.css";
import Button from "@/reuse/Button/Button";

import { useSubmitContactUsForm } from "@/hooks/api/website";

const Contact = () => {
  const [state, setstate] = React.useState({
    first_name: "",
    last_name: "",
    company_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const { handleSubmitContactUsForm, loading: updating } =
    useSubmitContactUsForm();
  const submitForm = () => {
    const { first_name, last_name, company_name, phone, email, message } =
      state;

    handleSubmitContactUsForm({
      data: {
        first_name,
        last_name,
        company_name,
        phone,
        email,
        message,
      },
      cb: () =>
        setstate({
          first_name: "",
          last_name: "",
          company_name: "",
          phone: "",
          email: "",
          message: "",
        }),
    });
    console.log({ first_name, last_name, company_name, phone, email, message });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Tell us how we can work together</h1>
          <p className={styles.desc}>
            Share your goals and challenges with us, and together, we'll tailor
            a bespoke solution leveraging our expertise and resources to drive
            your hiring initiatives forward.
          </p>
          <div className={styles.info}>
            <p>
              Contact us:{" "}
              <a href="tel:+447884876745" className={styles.blue}>
                +44 7884876745{" "}
              </a>
            </p>
            <p>
              Email us:{" "}
              <a href="malito:info@mploy.com" className={styles.blue}>
                info@mploy.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}>
            <h5 className={styles.formTitle}>How can we help?</h5>

            <div className={styles.top}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>First name</label>
                <input
                  required
                  value={state.first_name}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, first_name: e.target.value }))
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Last name</label>
                <input
                  required
                  value={state.last_name}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, last_name: e.target.value }))
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Company name</label>
                <input
                  required
                  value={state.company_name}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, company_name: e.target.value }))
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Phone</label>
                <input
                  required
                  value={state.phone}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, phone: e.target.value }))
                  }
                  className={styles.input}
                  type="tel"
                  placeholder="Type here"
                />
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Email</label>
                <input
                  required
                  value={state.email}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, email: e.target.value }))
                  }
                  className={styles.emailInput}
                  type="email"
                  placeholder="Type here"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Message</label>
                <textarea
                  required
                  value={state.message}
                  onChange={(e) =>
                    setstate((x) => ({ ...x, message: e.target.value }))
                  }
                  className={styles.messageInput}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <Button
                loading={updating}
                disabled={updating}
                type="submit"
                width="100%"
                title="Submit"
                mt="3vh"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
