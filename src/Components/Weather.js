import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState();

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
        console.log(`City is ${city}`);
        setLoaded(true);
    }

    // function handleResponse(response) {
    //     alert(`The weather in New York is ${response.data.main.temp}°C`);
    // }

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