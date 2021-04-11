import React, { useState } from 'react';
import axios from 'axios';
import Display from './Display';
// import Statistics from './Statistics';
// import LastUpdated from './LastUpdated';
// import Forecast from './Forecast';

import './Weather.css';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({});
    const [unit, setUnit] = useState("metric");
    const [tempScale, setTempScale] = useState("Fahrenheit");
    const [tempUnit, setTempUnit] = useState("C");
    const [windUnit, setWindUnit] = useState("m/s");
    const [date, setDate] = useState();
    const [forecast, setForecast] = useState();

    let form = (
        <form onSubmit={handleSubmit} class="form-group">
            <input type="search" placeholder="Enter a city..." onChange={updateCity} />
            <input type="submit" class="btn btn-search" value="Search" />
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
        let key = "81f516c244f3dd725e577ba1e814dedc";

        if (unit === "metric") {
            setUnit("imperial");
            setTempUnit("F");
            setWindUnit("mph");
            setTempScale("Celsius");
        } else {
            setUnit("metric");
            setTempUnit("C");
            setWindUnit("m/s");
            setTempScale("Fahrenheit");
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=${unit}&q=${city}`;
        let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=${unit}&q=${city}`;

        axios.get(url).then(handleResponse);
        axios.get(forecastUrl).then(handleForecast);
    }

    return(
        <Display 
            loaded={loaded} 
            form={form} 
            city={city} 
            weather={weather} 
            unit={unit} 
            toggleUnit={toggleUnit} 
            tempScale={tempScale} 
            tempUnit={tempUnit}
            windUnit={windUnit}
            date={date} 
            forecast={forecast} />
    );

    // if (loaded && weather.description === "clear sky") {
    //     return (
    //         <>
    //             <div className="container">
    //                 <h2>At least it is in {city}!</h2>
    //                 {form}
    //                 <Statistics city={city} stats={weather} />
    //                 <button type="button" class="btn btn-unit" onClick={toggleUnit}>Switch to {tempScale}</button>
    //                 <LastUpdated timestamp={date} />
    //             </div>
    //             <Forecast forecast={forecast} />
    //         </>
    //     );
    // } else if (loaded) {
    //     return (
    //         <div>  
    //             <div className="container">
    //                 <h1>Fine day, isn't it?</h1>
    //                 <h2>At least it is somewhere in the world...!</h2>
    //                 {form}
    //                 <Statistics city={city} stats={weather} />
    //                 <button type="button" class="btn btn-unit" onClick={toggleUnit}>Switch to {tempScale}</button>
    //                 <LastUpdated timestamp={date} />
    //             </div>
    //             <Forecast forecast={forecast} />
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <h1>Fine day, isn't it?</h1>
    //             <h2>At least it is somewhere in the world...</h2>
    //             {form}
    //         </div>
    //     );
    // }
}