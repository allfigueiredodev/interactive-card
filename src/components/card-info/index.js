import React from "react";
import './card-info.css'
import Input from "../input"
import Button from "../button";

export default function CardInfo () {

    return (
        <div className="card__info">
            <form className="card__form">
                <Input label={"CARDHOLDER NAME"} placeholder={"e.g. Jane Appleseed"} className={"input"} wclassName={"input__wrapper"}/>
                <Input label={"CARD NUMBER"} placeholder={"e.g. 1234 5678 9123 0000"} className={"input"} wclassName={"input__wrapper"}/>
                <div className="card__validators">
                    <Input                     
                    label={"EXP. DATE"} 
                    placeholder={"MM"} 
                    className={"input input--exp"} 
                    wclassName={"input__wrapper--exp"}/>
                    <Input label={"(MM/YY)"} placeholder={"YY"} className={"input input--exp"} wclassName={"input__wrapper--exp"}/>
                    <Input label={"CVC"} placeholder={"e.g. 123"} className={"input input--cvc"} wclassName={"input__wrapper--cvc"}/>
                </div>
                <Button buttonText={"Confirm"}/>
            </form>
        </div>
    )

}