import React, { useState } from 'react';
import axios from 'axios';
import Statistics from './Statistics';
import UnitToggleBtn from './UnitToggleBtn';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({});

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
        let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${city}`;

        axios.get(url).then(handleResponse);
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
        setLoaded(true);
    }

    if (loaded && weather.description === "clear sky") {
        return (
            <div className="container">
                <h2>At least it is in {city}!</h2>
                {form}
                <Statistics city={city} stats={weather} />
                <UnitToggleBtn unit={unit} />
            </div>
        );
    } else if (loaded) {
        return (
            <div className="container">
                <h2>At least it is somewhere in the world...!</h2>
                {form}
                <Statistics city={city} stats={weather} />
                <UnitToggleBtn unit={unit} />
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