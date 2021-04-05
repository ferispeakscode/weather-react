import React from 'react';

export default function Forecast(props) {
    console.log(props.forecast);
    if (props.forecast) {
        console.log(props.forecast[0].dt);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        
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