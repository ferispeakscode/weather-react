import React from 'react';
import ForecastItem from './ForecastItem';

export default function Forecast(props) {
    if (props.forecast) {
        console.log(props.forecast[0]);
        return (
            <div className="container forecast-container">
                <div className="row justify-content-center">
                    <h1>Look Ahead Forecast</h1>
                </div>
                <div className="row">
                    <ForecastItem
                        time={props.forecast[0].dt}
                        icon={props.forecast[0].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[0].main.temp_max}
                        min={props.forecast[0].main.temp_min}
                    />
                    <ForecastItem
                        time={props.forecast[1].dt}
                        icon={props.forecast[1].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[1].main.temp_max}
                        min={props.forecast[1].main.temp_min}
                    />
                    <ForecastItem
                        time={props.forecast[2].dt}
                        icon={props.forecast[2].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[2].main.temp_max}
                        min={props.forecast[2].main.temp_min}
                    />
                    <ForecastItem
                        time={props.forecast[3].dt}
                        icon={props.forecast[3].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[3].main.temp_max}
                        min={props.forecast[3].main.temp_min}
                    />
                    <ForecastItem
                        time={props.forecast[4].dt}
                        icon={props.forecast[4].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[4].main.temp_max}
                        min={props.forecast[4].main.temp_min}
                    />
                    <ForecastItem
                        time={props.forecast[5].dt}
                        icon={props.forecast[5].weather[0].icon}
                        desc={props.forecast[0].weather[0].description}
                        max={props.forecast[5].main.temp_max}
                        min={props.forecast[5].main.temp_min}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                </div>
            </div>
        );
    }
}