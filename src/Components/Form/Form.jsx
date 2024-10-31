import React, { Component, useEffect, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import RadioInput from "../RadioInput/RadioInput";
import ConsentCheck from "../ConsentCheck/ConsentCheck";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    selectedRadio: "",
    checkBox: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    agreedError: "",
    radio: "",
    checkBox: "",
  });

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
    validateInputs();
  }

  function handleInputChange(val, field) {
    const newVal =
      field !== "email" ? validateEmptyString(val) : validateEmail(val);

    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: val,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: newVal,
    }));
  }
  function handleRadioChange(selection) {
    setFormValues((prevValues) => ({
      ...prevValues,
      selectedRadio: selection,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      radio: "",
    }));
  }
  function handleCheckboxChange(selection) {
    setFormValues((prevValues) => ({
      ...prevValues,
      checkBox: selection,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      checkBox: "",
    }));
  }

  function validateInputs() {
    setErrors({
      name: validateEmptyString(formValues.name),
      lastName: validateEmptyString(formValues.lastName),
      email: validateEmail(formValues.email),
      message: validateEmptyString(formValues.message),
      checkBox: validateAgreed(),
      radio: validateRadio(),
    });
  }
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  function validateAgreed() {
    return document.getElementById("agreed").checked
      ? ""
      : "To submit this form, please consent to being contacted";
  }
  function validateRadio() {
    return formValues.selectedRadio === ""
      ? "You need to select an option!"
      : "";
  }

  function validateEmptyString(value) {
    return value.trim() === "" ? "This field is required" : "";
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email) ? "" : "Please enter a valid email address";
  }

  return (
    <div className={styles.formDiv}>
      <form className={styles.form} onSubmit={(e) => validate(e)}>
        <p className={styles.title}>Contact Us</p>

        <div className={styles.row}>
          <Input
            label="First Name"
            name="firstName"
            id="name"
            value={formValues.name}
            onChange={(e) => handleInputChange(e.target.value, "name")}
            error={errors.name}
          />
          <Input
            label="Last Name"
            name="lastName"
            id="lastname"
            value={formValues.lastName}
            onChange={(e) => handleInputChange(e.target.value, "lastName")}
            error={errors.lastName}
          />
        </div>

        <div className={styles.row}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            id="email"
            value={formValues.email}
            onChange={(e) => handleInputChange(e.target.value, "email")} // add function
            error={errors.email}
          />
        </div>
        <div className={styles.column}>
          <RadioInput
            options={options}
            error={errors.radio}
            onChange={handleRadioChange}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Message"
            name="message"
            type="textarea"
            id="message"
            value={formValues.message}
            onChange={(e) => handleInputChange(e.target.value, "message")}
            error={errors.message}
          />
        </div>
        <div className={styles.row}>
          <ConsentCheck
            message="I consent to being contacted by the team"
            id="agreed"
            error={errors.checkBox}
            onChange={(e) => handleCheckboxChange(e.target.value)}
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
