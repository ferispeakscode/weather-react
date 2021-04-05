import React from 'react';

export default function ForecastItem(props) {
    return(
        <div className="col">
            {props.time}
            {props.icon}
            {props.max}
            {props.min}
        </div>
    );
}