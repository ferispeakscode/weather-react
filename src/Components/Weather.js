import React, { useState } from 'react';
import axios from 'axios';
import Statistics from './Statistics';
// import UnitToggleBtn from './UnitToggleBtn';
import LastUpdated from './LastUpdated';
import Forecast from './Forecast';

import './Weather.css';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({});
    const [unit, setUnit] = useState("metric");
    const [date, setDate] = useState();
    const [forecast, setForecast] = useState();

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter a city..." onChange={updateCity} />
            <input type="submit" value="Search" />
        </form>
    );

    function updateCity(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let apiKey = "81f516c244f3dd725e577ba1e814dedc";
        let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${unit}&q=${city}`;
        let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=${unit}&q=${city}`;

        axios.get(url).then(handleResponse);
        axios.get(forecastUrl).then(handleForecast);
    }

    function handleResponse(response) {
        setCity(response.data.name);
        setWeather({ 
            temperature: response.data.main.temp,
            feel: response.data.main.feels_like,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
        setDate(response.data.dt);
        setLoaded(true);
    }

    function handleForecast(response) {
        console.log(response);
        setForecast(response.data.list);
    }

    function toggleUnit() {
        if (unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }

    if (loaded && weather.description === "clear sky") {
        return (
            <div className="container">
                <h2>At least it is in {city}!</h2>
                {form}
                <Statistics city={city} stats={weather} />
                <button type="button" onClick={toggleUnit}>Switch to Fahrenheit</button>
                <button type="button" onClick={toggleUnit}>Switch to Celsius</button>
                <LastUpdated timestamp={date} />
                <Forecast forecast={forecast} />
            </div>
        );
    } else if (loaded) {
        return (
            <div className="container">
                <h2>At least it is somewhere in the world...!</h2>
                {form}
                <Statistics city={city} stats={weather} />
                <button type="button" onClick={toggleUnit}>Switch to Fahrenheit</button>
                <button type="button" onClick={toggleUnit}>Switch to Celsius</button>
                <LastUpdated timestamp={date} />
                <Forecast forecast={forecast} />
            </div>
        );
    } else {
        return (
            <div>
                <h2>At least it is somewhere in the world...</h2>
                {form}
            </div>
        );
    }
}