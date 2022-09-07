import React from "react";
import './card-mirror.css'
import CardMirrorFrontside from '../card-front-side';
import CardMirrorBackside from '../card-back-side';

export default function CardMirror () {

    return (
        <div className="card-background">
            <div className="card-wrapper">
                {/* <div className="card-back-side">
                    <div className="card-back-mask-container">
                        <p className="CVC">000</p>
                    </div>
                </div> */}
                <CardMirrorBackside />
                <CardMirrorFrontside />                
                {/* <div className="card-front-side">
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
                </div> */}
            </div>
        </div>
    )

}