import React from "react";
import './button.css'

export default function Button ({buttonText, onClick}) {
    return (
        <button onClick={onClick} className="button__confirm">{buttonText}</button>
    )
}