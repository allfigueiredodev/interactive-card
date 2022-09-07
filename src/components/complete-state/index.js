import React from "react";
import "./confirm-mesage.css"
import Button from "../button";

export default function CompleteState () {
    return (
    <>
        <div className="complete__container">
            <img src="/images/icon-complete.svg"/>
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <Button buttonText={"Continue"}/>
        </div>
    </>
    )
}