import React, {useState, useContext} from "react"
import './card-front-side.css'
import {InfoContext} from '../../InfoContext.js';

export default function CardMirrorFrontside () {
    
  const {card} = useContext(InfoContext);
  const {name} = useContext(InfoContext);
  const {dateMM} = useContext(InfoContext);
  const {dateYY} = useContext(InfoContext);

    return (
            <div className="card-front-side">
                <div className="card-front-mask-container">
                    <div className="card-circles-wrapper">
                        <div className="big-circle"></div>
                        <div className="little-circle"></div>
                    </div>                        
                    <p className="card__number">{card}</p>
                    <div className="card-bottom-wrapper">
                        <p className="card__user__name">{name}</p>
                        <p className="card__exp__date">{dateMM}/{dateYY}</p>
                    </div>
                </div>
            </div>
         )
}

