import React from 'react';

export default function Statistics(props) {
    console.log(props);

    return (
        <div>
            <h3>{props.city}</h3>
            <img src={props.stats.icon} alt="weather icon" />
            {props.stats.temperature}° C
            {props.stats.description}
            Feels like: {props.stats.feel}° C
            Humidity: {props.stats.humidity}%
            Wind: {props.stats.wind} m/s
        </div>
    );
}