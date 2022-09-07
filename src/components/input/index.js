import React from "react";
import './input.css'

export default function Input ({id, label, placeholder, className, wclassName}) {

    return (
        <div className={wclassName}>
            <label 
            htmlFor={id} 
            className="input__label">{label}
            </label>
            
            <input 
            onChange= {(e)=> {console.log(e);}}
             id={id} 
             className={className} 
             placeholder={placeholder}
             />
        </div>
    )
};