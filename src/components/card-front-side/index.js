import React from "react"
import './card-front-side.css'

export default function CardMirrorFrontside () {

    return (
        <div className="card-front-side">
            <div className="card-front-mask-container">
                <div className="card-circles-wrapper">
                    <div className="big-circle"></div>
                    <div className="little-circle"></div>
                </div>                        
                <p className="card__number">0000 0000 0000 0000</p>
                <div className="card-bottom-wrapper">
                    <p className="card__user__name">JANE APPLESEED</p>
                    <p className="card__exp__date">00/00</p>
                </div>
            </div>
        </div>
    )
}