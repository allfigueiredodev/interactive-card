import React, { useState } from "react";
import "./input.css";

export default function Input({
  id,
  label,
  placeholder,
  className,
  wclassName,
  onChange,
  min,
  max,
  minLength,
  maxLength,
  type,
  errorMsg,
  onInput,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={wclassName}>
      <label htmlFor={id} className="input__label">
        {label}
      </label>

      <input
        autoCapitalize="characters"
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        onInput={onInput}
        {...inputProps}
      />

      <span className="input__error--text">{errorMsg}</span>
    </div>
  );
}
