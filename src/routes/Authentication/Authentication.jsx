import React from "react";
import SignInForm from "../../Components/SignInForm/SignInForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import "../Authentication/authentication.style.scss";

export default function Authentication() {
  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}
