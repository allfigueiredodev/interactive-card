import React, {useContext} from "react"
import './card-back-side.css'
import {InfoContext} from '../../InfoContext.js'


export default function CardMirrorBackside () {

    const {cvc} = useContext(InfoContext);

    return (
        <>
            <div className="card-back-side">
                <div className="card-back-mask-container">
                    <p className="cvc">{cvc}</p>
                </div>
            </div>
        </>
    )
}

