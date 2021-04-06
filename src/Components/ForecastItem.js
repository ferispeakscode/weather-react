import React from 'react';
import DateItem from './DateItem';

export default function ForecastItem(props) {
    let image = `http://openweathermap.org/img/wn/${props.icon}.png`;

    return(
        <div className="col">
            <DateItem timestamp={props.time} condensed={true} />
            <img src={image} alt={props.desc} />
            <h6><strong>{props.max}°</strong></h6>
            <h6>{props.min}°</h6>
        </div>
    );
}