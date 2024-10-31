import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  const { label, name, type = "text", error, onChange } = props;

  return (
    <div className={styles.inputDiv}>
      <p className={styles.label}>{label} *</p>
      {type === "textarea" ? (
        <textarea
          className={
            error === ""
              ? `${styles.input}`
              : `${styles.input} ${styles.inputError}`
          }
          name={name}
          rows={3}
          onChange={onChange}
          style={{ maxWidth: "100%", maxHeight: "110px" }}
        ></textarea>
      ) : (
        <input
          type={type}
          id=""
          onChange={onChange}
          className={
            error === ""
              ? `${styles.input}`
              : `${styles.input} ${styles.inputError}`
          }
          name={name}
        />
      )}
      {error === "" ? "" : <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
