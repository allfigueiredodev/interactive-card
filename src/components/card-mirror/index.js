import React from "react";
import './card-mirror.css'
import CardMirrorFrontside from '../card-front-side';
import CardMirrorBackside from '../card-back-side';

export default function CardMirror () {
    
    return (
        <div className="card-background">
            <div className="card-wrapper">
                <CardMirrorBackside />
                <CardMirrorFrontside />
            </div>
        </div>
    )
}   