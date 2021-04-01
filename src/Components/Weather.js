import React, { useState } from 'react';
import axios from 'axios';

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
    //     alert(`The weather in New York is ${response.data.main.temp}°C`);
        setCity(response.data.name);
        setWeather({ 
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
        setLoaded(true);
    }

    // let apiKey = "28dc556bb211b420ef0f1e534d06a1db";
    // let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=New York`;

    // axios.get(url).then(handleResponse);

    if (loaded) {
        return (
            <div>
                <h2>At least it is in {city}!</h2>
                {form}
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