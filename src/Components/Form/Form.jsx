import React, { Component, useEffect, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import RadioInput from "../RadioInput/RadioInput";
import ConsentCheck from "../ConsentCheck/ConsentCheck";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreedError, setAgreedError] = useState(false);
  const [radioError, setRadioError] = useState(false);
  const options = [
    {
      name: "generalEnquiry",
      label: "General Enquiry",
      queryName: "QueryType",
    },
    {
      name: "supportRequest",
      label: "Support Request",
      queryName: "QueryType",
    },
  ];

  function validate(e) {
    e.preventDefault();
    validateAgreed();
    validateRadio();
  }

  function validateAgreed() {
    const checked = document.getElementById("agreed").checked;
    if (!checked) {
      setAgreedError(true);
    } else {
      setAgreedError(false);
    }
  }
  function validateRadio() {
    const radio = document
      .getElementById("radioDiv")
      .querySelectorAll("div input");
    let isOneVerify = false;
    for (let r of radio) {
      isOneVerify = r.checked;
    }
    console.log(isOneVerify);

    if (isOneVerify) {
      setRadioError(false);
    } else {
      setRadioError(true);
    }
  }

  return (
    <div className={styles.formDiv}>
      <form className={styles.form} onSubmit={(e) => validate(e)}>
        <p className={styles.title}>Contact Us</p>
        <div className={styles.row}>
          <Input label="First Name" name="firstName" id="name" value={name} />
          <Input
            label="Last Name"
            name="lastName"
            id="lastname"
            value={lastName}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            id="email"
            value={email}
          />
        </div>
        <div className={styles.row}>
          <RadioInput options={options} error={radioError} />
        </div>
        <div className={styles.row}>
          <Input
            label="Message"
            name="message"
            type="textarea"
            id="message"
            value={message}
          />
        </div>
        <div className={styles.row}>
          <ConsentCheck
            message="I consent to being contacted by the team"
            id="agreed"
            error={agreedError}
          />
        </div>
        <div className={styles.row}>
          <SubmitButton message="submit" id="btn" />
        </div>
      </form>
    </div>
  );
}

export default Form;
