import React, { useState } from "react";
import { Modal, Button as AntButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./style.module.css";

const AlertModal = ({
  open,
  handleClose = () => null,
  error = true,
  title = "",
  message = "",
}: {
  open?: any;
  handleClose?: any;
  error?: boolean;
  title?: string;
  message?: string;
}) => {
  const handleOk = () => {};

  let image = "/warning.svg";

  if (error) image = "/warning.svg";
  return (
    <>
      <Modal
        closable={false}
        open={open}
        onOk={handleOk}
        onCancel={handleClose}
        footer={null}
        width={640}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.navRight}>
              <CloseOutlined
                style={{ color: "#737373", cursor: "pointer", fontSize: 20 }}
                onClick={handleClose}
              />
            </div>
          </nav>
          <section className={styles.section}>
            <img src={image} className="w-[40%]" />

            <h1 className="text-[#413434] text-[40px] font-medium max-w-[800px] text-center mt-[20px]">
              {title}
            </h1>
            <p className=" font-normal text-[#5a5b5f] text-[14px] max-w-[600px] text-center mt-[10px]">
              {message}
            </p>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;
