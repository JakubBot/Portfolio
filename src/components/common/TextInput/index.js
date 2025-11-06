import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const TextInput = ({
  value,
  errors,
  name,
  labelText,
  placeHolder,
  onChange,
  required,
  type = "text",
  autoComplete,
  ...props
}) => {
  return (
    <div className="form__item">
      <label className="form__item__header" htmlFor={name}>
        {labelText}
        {required && <span aria-label="required"> *</span>}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        className="form__item__input"
        placeholder={placeHolder}
        required={required}
        aria-invalid={errors ? "true" : "false"}
        aria-describedby={errors ? `${name}-error` : undefined}
        autoComplete={autoComplete}
        {...props}
      />
      {errors && (
        <span
          id={`${name}-error`}
          className="form__item__error"
          role="alert"
          aria-live="polite"
        >
          {errors}
        </span>
      )}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  errors: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};
export default TextInput;
