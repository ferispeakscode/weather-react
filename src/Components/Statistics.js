import React from 'react';

export default function Statistics(props) {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 my-1 text-center">
                    <h3>{props.city}</h3>
                    <h3><img src={props.stats.icon} alt="weather icon" />
                    {props.stats.temperature}° C</h3>
                    <h4>{props.stats.description}</h4>
                </div>
                <div className="col-12 col-md-4 mt-4">
                    <h4>Feels like: {props.stats.feel}° C</h4>
                    <h4>Humidity: {props.stats.humidity}%</h4>
                    <h4>Wind: {props.stats.wind} m/s</h4>
                </div>
            </div>
        </div>
    );
}