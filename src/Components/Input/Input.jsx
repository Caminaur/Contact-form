import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  const { label, name, type = "text", validateFunction } = props;
  const [valid, setValid] = useState(true);
  const [message, setMessage] = useState("");

  function validateString(e) {
    const value = e.target.value.trim();
    if (value === null || value === "") {
      setValid(false);
      setMessage("This field is required");
    } else {
      setValid(true);
    }
  }

  return (
    <div className={styles.inputDiv}>
      <p className={styles.label}>{label} *</p>
      {type === "textarea" ? (
        <textarea
          className={
            valid ? `${styles.input}` : `${styles.input} ${styles.inputError}`
          }
          name={name}
          rows={3}
          onBlur={validateString}
          style={{ maxWidth: "100%", maxHeight: "110px" }}
        ></textarea>
      ) : (
        <input
          type={type}
          id=""
          className={
            valid ? `${styles.input}` : `${styles.input} ${styles.inputError}`
          }
          name={name}
          onBlur={validateString}
        />
      )}
      {valid ? "" : <p className={styles.error}>{message}</p>}
    </div>
  );
}

export default Input;
