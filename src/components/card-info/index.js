import React, { useContext} from "react";
import "./card-info.css";
import Input from "../input";
import Button from "../button";
import { InfoContext } from "../../InfoContext";
import { ErrorContext } from "../../ErrorContext";

export default function CardInfo({ submit }) {
  const { nameHandler } = useContext(InfoContext);
  const { cardHandler } = useContext(InfoContext);
  const { expDateMMHandler } = useContext(InfoContext);
  const { expDateYYHandler } = useContext(InfoContext);
  const { cvcHandler } = useContext(InfoContext);
  const { cardValidator } = useContext(ErrorContext);
  const { mmValidator } = useContext(ErrorContext);
  const { yyValidator } = useContext(ErrorContext);
  const { cvcValidator } = useContext(ErrorContext);
  const { card } = useContext(ErrorContext);
  const { mm } = useContext(ErrorContext);
  const { yy } = useContext(ErrorContext);
  const { cvc } = useContext(ErrorContext);
 
  const inputs = [
    [
      {
        id: "name",
        onChange: nameHandler,
        label: "CARDHOLDER NAME",
        placeholder: "e.g. Jane Appleseed",
        className: "input",
        wclassName: "input__wrapper",
        type: "text",
        maxLength: 40,
        errorMsg: "Can't be blank",
        required: true,
        pattern: "^[a-z A-Z]{0,40}$",
      },
      {
        id: "cardNumber",
        onChange: cardHandler,
        label: "CARD NUMBER",
        placeholder: "e.g. 1234 5678 9123 0000",
        className: "input ",
        wclassName: "input__wrapper",
        type: "text",
        errorMsg: card,
        required: true,
        pattern: "^[0-9]{16}$",
        minLength: "1",
        maxLength: "16",
        onInput: cardValidator
      },
    ],
    [
      {
        id: "expDate",
        onChange: expDateMMHandler,
        label: "EXP. DATE",
        placeholder: "MM",
        className: "input input--exp ",
        wclassName: "input__wrapper--exp",
        type: "number",
        min: "01",
        max: "12",
        minLength: "2",
        maxLength: "2",
        step: "01",
        errorMsg: mm,
        required: true,
        onInput: mmValidator,
      },
      {
        id: "mmyy",
        onChange: expDateYYHandler,
        label: "(MM/YY)",
        placeholder: "YY",
        className: "input input--exp ",
        wclassName: "input__wrapper--exp",
        type: "number",
        min: "00",
        max: "99",
        minLength: "2",
        maxLength: "2",
        step: "01",
        errorMsg: yy,
        required: true,
        onInput: yyValidator,
      },
      {
        id: "cvc",
        onChange: cvcHandler,
        label: "CVC",
        placeholder: "e.g. 123",
        className: "input input--cvc ",
        wclassName: "input__wrapper--cvc",
        type: "number",
        min: "001",
        max: "999",
        minLength: "3",
        maxLength: "3",
        step: "001",
        errorMsg: cvc,
        required: true,
        onInput: cvcValidator,
      },
    ],
  ];

  return (
    <div className="card__info">
      <form className="card__form" onSubmit={submit}>
        {inputs[0].map((input) => (
          <Input {...input} />
        ))}
        <div className="card__validators">
          {inputs[1].map((input) => (
            <Input {...input} />
          ))}
        </div>
        <Button buttonText={"Confirm"} />
      </form>
    </div>
  );
}
