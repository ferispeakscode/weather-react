import React from 'react';

export default function UnitToggleBtn(props) {
    if (props.unit === "metric") {
        return(
            <button type="button">Switch to Fahrenheit</button>
        );
    } else{
        return(
            <button type="button">Switch to Celsius</button>
        );
    }
}