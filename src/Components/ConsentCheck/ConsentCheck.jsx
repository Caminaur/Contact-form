import React from "react";
import styles from "./ConsentCheck.module.css";
function ConsentCheck(props) {
  const { message, error } = props;
  return (
    <div className={styles.row}>
      <input type="checkbox" name="" id="agreed" className={styles.input} />
      <label htmlFor="checkbox" className={styles.label}>
        {message}
      </label>
      {error ? <p className={styles.error}>This field is required</p> : ""}
    </div>
  );
}

export default ConsentCheck;
