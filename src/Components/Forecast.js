import React from 'react';
import ForecastItem from './ForecastItem';

export default function Forecast(props) {
    console.log(props.forecast);
    if (props.forecast) {
        console.log(props.forecast[0].dt);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
                    <div className="col">
                        <ForecastItem time={props.forecast[0].dt} icon={0} max={0} min={0} />
                    </div>
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