import React from 'react';

export default function ForecastItem(props) {
    let image = `http://openweathermap.org/img/wn/${props.icon}.png`;

    return(
        <div className="col">
            <h6>{props.time}</h6>
            <img src={image} alt={props.desc} />
            <h6><strong>{props.max}°</strong></h6>
            <h6>{props.min}°</h6>
        </div>
    );
}