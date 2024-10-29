import React from "react";
import styles from "./SubmitButton.module.css";
function SubmitButton(props) {
  const { message = "Submit" } = props;
  return (
    <button type="submit" className={styles.btn}>
      {message}
    </button>
  );
}

export default SubmitButton;
