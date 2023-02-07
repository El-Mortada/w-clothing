import React from "react";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailandPassword,
  signInwithGoogleProvider,
} from "../../Utilities/Firebase/Firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "../SignUpForm/SignUpForm.style.scss";
import "../Button/Button.style.scss";

const initialFormField = {
  email: "",
  password: "",
};
export default function SignInForm() {
  let [formFields, setFormFields] = useState(initialFormField);

  const { email, password } = formFields;

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

    try {
      const { user } = await signInAuthUserWithEmailandPassword(
        email,
        password
      );
      clearForm();
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("WRONG PASSWORD MATCH");
          break;
        case "auth/user-not-found":
          alert("No user associated with this e-mail");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };
  const logGoogleUser = async () => {
    const { user } = await signInwithGoogleProvider();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div className="sign-up-container">
        <h1>Already have an account?</h1>
        <span>Signin with your e-mail and password</span>

        <form onSubmit={submitUser}>
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
          <div className="buttons-container">
            <Button type="submit">Sign-in</Button>
            <Button type="button" typeName={"google"} onClick={logGoogleUser}>
              Google sign-in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
