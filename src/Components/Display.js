import React from 'react';
import Statistics from './Statistics';
import LastUpdated from './LastUpdated';
import Forecast from './Forecast';

function SubHeading (props) {
    console.log(props);
    if (props.loaded && props.weather.description === "clear sky") {
        return <h2>At least it is in {props.city}!</h2>
    } else if (props.loaded) {
        return <h2>At least it is somewhere in the world...!</h2>
    } else {
        return <h2>At least it is somewhere in the world...</h2>
    }
}

export default function Display(props) {
    console.log(props.loaded);
    return (
        <>
            <div className="container">
                <h1>Fine day, isn't it?</h1>
                <SubHeading props={props} />
                {props.form}
                {props.loaded && (<>
                <Statistics city={props.city} stats={props.weather} tempUnit={props.tempUnit}/>
                <button type="button" class="btn btn-unit" onClick={props.toggleUnit}>Switch to {props.tempScale}</button>
                <LastUpdated timestamp={props.date} /></>)}
            </div>
            {props.loaded && <Forecast forecast={props.forecast} /> }
        </>
    );
}