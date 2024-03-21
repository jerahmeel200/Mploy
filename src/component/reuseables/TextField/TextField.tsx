import React from "react";
import styles from "./TextField.module.css";

interface TextFieldProps {
  inputColor?: string;
  placeholder?: string;
  label?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "date"
    | "time"
    | "datetime-local";
  bottomActionText?: string;
  bottomActionTextPosition?: "left" | "right";
  bottomActionClick?: any;
  mt?: string;
  mb?: string;
  hideBorder?: boolean;
  maxWidth?: string;
  width?: string;
  leftIcon?: any;
  required?: boolean;
  backgroundColor?: string;
  underlined?: boolean;
  borderRadius?: string;
  helperText?: string;
  value?: any;
  onChange?: any;
  disabled?: boolean;
  textarea?: boolean;
  textareaPadding?: string;
  customLabel?: any;
}

function TextField({
  inputColor = "#000",
  placeholder,
  label,
  type = "text",
  bottomActionText = "",
  bottomActionTextPosition = "right",
  bottomActionClick = () => null,
  mt = "23px",
  mb = "23px",
  hideBorder = false,
  width = undefined,
  maxWidth = "592px",
  leftIcon = undefined,
  required = false,
  backgroundColor = "#fff",
  underlined = false,
  borderRadius = "4px",
  helperText = "",
  value = "",
  onChange = () => null,
  disabled = false,
  textarea = false,
  textareaPadding = "10px",
  customLabel,
}: TextFieldProps) {
  const [show, setshow] = React.useState(false);

  if (textarea)
    return (
      <div
        className={styles.container}
        style={{ marginBottom: mb, marginTop: mt, maxWidth, width }}>
        {label ? (
          <label>
            {customLabel ? customLabel : label}
            {required ? (
              <span style={{ color: "#EB5757", fontSize: 18 }}>*</span>
            ) : null}
          </label>
        ) : null}
        <textarea
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={styles.textarea}
          style={{
            backgroundColor,
            color: inputColor,
            padding: textareaPadding,
          }}></textarea>
      </div>
    );
  return (
    <div
      className={styles.container}
      style={{ marginBottom: mb, marginTop: mt, maxWidth, width }}>
      {label ? (
        <label>
          {customLabel ? customLabel : label}
          {required ? (
            <span style={{ color: "#EB5757", fontSize: 18 }}>*</span>
          ) : null}
        </label>
      ) : null}
      <div className={styles.inputWrapper}>
        {leftIcon ? (
          <div className={styles.leftIconWrapper}>
            <img src={leftIcon} className={styles.searchIcon} />
          </div>
        ) : null}
        <input
          autoComplete={type}
          disabled={disabled}
          type={type === "password" ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          className={`${hideBorder ? styles.input : styles.inputBordered} ${
            leftIcon ? styles.leftIconSpace : null
          }`}
          style={{
            backgroundColor,
            borderBottom: underlined ? "1px solid #e0e0e0" : undefined,
            borderRadius,
            color: inputColor,
          }}
          value={value}
          onChange={onChange}
          required={required}
        />

        {type === "password" ? (
          <button
            className={styles.passwordButton}
            onClick={() => setshow(!show)}
            type="button">
            {show ? "Hide" : "Show"}
          </button>
        ) : null}
      </div>

      <div className={styles.helperTextWrapper}>
        {helperText ? (
          <span className={styles.helperText}>{helperText}</span>
        ) : (
          ""
        )}
        {bottomActionText ? (
          <div style={{ display: "flex", width: "100%" }}>
            <a
              type="button"
              style={{
                cursor: "pointer",
                marginLeft:
                  bottomActionTextPosition === "right" ? "auto" : undefined,
                marginRight:
                  bottomActionTextPosition === "right" ? undefined : "auto",
              }}
              className={styles.bottomAction}
              onClick={() =>
                typeof bottomActionClick === "function"
                  ? bottomActionClick()
                  : null
              }>
              {bottomActionText}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TextField;
