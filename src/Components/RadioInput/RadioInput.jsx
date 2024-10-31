import React from "react";
import styles from "./RadioInput.module.css";

function RadioInput(props) {
  const { options, error, onChange } = props;

  const radioOptions = options.map((option, id) => (
    <div
      key={id}
      className={styles.row}
      onClick={(e) => {
        selectChildOption(e);
      }}
    >
      <input
        id={`radio${id}`}
        type="radio"
        name={option.queryName}
        onChange={() => onChange(option.name)}
      />
      <label htmlFor={`radio${id}`}>{option.label}</label>
    </div>
  ));

  function selectChildOption(e) {
    if (e.target.querySelector("input") === null) return;
    e.target.querySelector("input").checked = true;
  }

  return (
    <>
      <div className={`${styles.flexCenter}`} id="radioDiv">
        {radioOptions}
      </div>
      {error === "" ? "" : <p className={styles.error}>{error}</p>}
    </>
  );
}

export default RadioInput;
