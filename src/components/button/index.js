import React from "react";
import './button.css'

export default function Button ({buttonText}) {
    return (
        <button className="button__confirm">{buttonText}</button>
    )
}