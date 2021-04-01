import React from 'react';
import axios from 'axios';

export default function Weather() {

    function handleResponse(response) {
        // alert(`The weather in New York is ${response.data.main.temp}°C`);
    }

    let apiKey = "28dc556bb211b420ef0f1e534d06a1db";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return (<h2>Hello React!</h2>);
}