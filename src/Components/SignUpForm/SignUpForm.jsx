import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "../SignUpForm/SignUpForm.style.scss";
import "../Button/Button.style.scss";

const initialFormField = {
  displayName: "",
  email: "",
  password: "",
  rePass: "",
};

export default function SignUpForm() {
  let [formFields, setFormFields] = useState(initialFormField);
  const { displayName, email, password, rePass } = formFields;
  const getUserData = (e) => {
    const myForm = { ...formFields };
    myForm[e.target.name] = e.target.value;
    setFormFields(myForm);
    console.log(formFields);
  };

  const clearForm = () => {
    setFormFields(initialFormField);
    const inputConst = document.getElementsByTagName("input");
    const inputArray = Array.from(inputConst);
    inputArray.map((input) => {
      input.value = "";
    });
  };

  const submitUser = async (e) => {
    e.preventDefault();

    if (password !== rePass) return;

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      clearForm();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Signup with your e-mail and password</span>

        <form onSubmit={submitUser}>
          <FormInput
            label="UserName"
            id="displayName"
            onChange={getUserData}
            type="text"
            name="displayName"
            formfields={displayName}
          />
          <FormInput
            label="E-mail"
            onChange={getUserData}
            type="email"
            name="email"
            formfields={email}
          />
          <FormInput
            label="Password"
            onChange={getUserData}
            type="password"
            name="password"
            formfields={password}
          />
          <FormInput
            label="Confirm Password"
            onChange={getUserData}
            type="password"
            name="rePass"
            formfields={rePass}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </>
  );
}
