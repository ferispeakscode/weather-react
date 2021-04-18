import React from 'react';

export default function Statistics(props) {

    return (
        <div className="container current-container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 my-1 text-center">
                    <h3>{props.city}</h3>
                    <h3><img src={props.stats.icon} className="current-weather-icon" alt="weather icon" />
                    {props.stats.temperature}° {props.tempUnit}</h3>
                    <h4 id="description">{props.stats.description}</h4>
                </div>
                <div className="col-12 col-md-4 mt-3" id="extraStats">
                    <h4>Feels like: {props.stats.feel}° {props.tempUnit}</h4>
                    <h4>Humidity: {props.stats.humidity}%</h4>
                    <h4>Wind: {props.stats.wind} {props.windUnit}</h4>
                </div>
            </div>
        </div>
    );
}