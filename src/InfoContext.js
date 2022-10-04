import React, { useState, createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [expDateMM, setExpDateMM] = useState("00");
  const [expDateYY, setExpDateYY] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [errors, setErrors] = useState("");

  function cardHandler(e) {
    setCardNumber(
      e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/( \d{4})\d+?$/, "$1")
    );
  }

  function nameHandler(e) {
    setName(e.target.value.toUpperCase().replace(/[^a-zA-Z\s]/g, ""));
  }

  function expDateMMHandler(e) {
    setExpDateMM(e.target.value.replace(/(\d{2})\d+?$/, "$1"));
  }

  function expDateYYHandler(e) {
    setExpDateYY(e.target.value.replace(/(\d{2})\d+?$/, "$1"));
  }

  function cvcHandler(e) {
    setCvc(e.target.value.replace(/(\d{3})\d+?$/, "$1"));
  }

  return (
    <InfoContext.Provider
      value={{
        name: [name, setName],
        card: [cardNumber, setCardNumber],
        dateMM: [expDateMM, setExpDateMM],
        dateYY: [expDateYY, setExpDateYY],
        cvc: [cvc, setCvc],
        errors: [errors, setErrors],
        cardHandler: cardHandler,
        nameHandler: nameHandler,
        expDateMMHandler: expDateMMHandler,
        expDateYYHandler: expDateYYHandler,
        cvcHandler: cvcHandler,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};
