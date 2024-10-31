import React from "react";
import styles from "./ConsentCheck.module.css";
function ConsentCheck(props) {
  const { message, error, onChange } = props;

  return (
    <div className={styles.row}>
      <input
        type="checkbox"
        name=""
        id="agreed"
        className={styles.input}
        onChange={onChange}
      />
      <label htmlFor="agreed" className={styles.label}>
        {message}
      </label>
      {error ? <p className={styles.error}>{error}</p> : ""}
    </div>
  );
}

export default ConsentCheck;
