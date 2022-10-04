import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = (props) => {
  const [cardErrors, setCardErrors] = useState("Can't be blank");
  const [mmErrors, setMmErrors] = useState("Can't be blank");
  const [yyErrors, setYyErrors] = useState("Can't be blank");
  const [cvcErrors, setCvcErrors] = useState("Can't be blank");

  function cardValidator(e) {
    const target = e.target;

    if (target.value.length > 0 && target.value.length < target.maxLength) {
      setCardErrors(
        `The card number has to be ${e.target.maxLength} digits long`
      );
    } else if (target.value === "") {
      setCardErrors("Can't be blank");
    } else if (target.value !== /^\d+$/) {
      setCardErrors("Wrong format, numbers only");
    } else {
      setCardErrors("");
    }
  }

  function mmValidator(e) {
    const target = e.target;

    if (target.value.length > 2) {
      target.value = target.value.slice(0, target.maxLength);
    } else if (target.value > target.max) {
      setMmErrors("Months go from 01 to 12");
    } else if (target.value === "") {
      setMmErrors("Can't be blank");
    } else {
      setMmErrors("");
    }
  }

  function yyValidator(e) {
    const target = e.target;

    if (target.value.length > 2) {
      target.value = target.value.slice(0, target.maxLength);
    } else if (target.value === "") {
      setYyErrors("Can't be blank");
    } else {
      setYyErrors("");
    }
  }

  function cvcValidator(e) {
    const target = e.target;

    if (target.value.length > 3) {
      target.value = target.value.slice(0, target.maxLength);
    } else if (target.value === "") {
      setCvcErrors("Can't be blank");
    } else {
      setCvcErrors("");
    }
  }

  return (
    <ErrorContext.Provider
      value={{
        card: [cardErrors, setCardErrors],
        mm: [mmErrors, setMmErrors],
        yy: [yyErrors, setYyErrors],
        cvc: [cvcErrors, setCvcErrors],
        cardValidator: cardValidator,
        mmValidator: mmValidator,
        yyValidator: yyValidator,
        cvcValidator: cvcValidator,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};
