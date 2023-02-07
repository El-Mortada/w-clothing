import React from "react";

export default function Button({ children, typeName, ...otherProps }) {
  const ButtonTypeClasses = {
    google: "google-sign-in",
    inverted: "inverted",
  };
  return (
    <button
      className={`button-container ${ButtonTypeClasses[typeName]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
