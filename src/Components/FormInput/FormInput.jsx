import React from "react";
import "../FormInput/FormInput.style.scss";

export default function FormInput({ label, ...otherprops }) {
  return (
    <>
      <div className="group">
        <input className="form-input" {...otherprops} />
        {label && (
          <label
            className={`${
              otherprops.formfields.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
}
