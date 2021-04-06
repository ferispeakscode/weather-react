import React from 'react';

export default function DateItem(props) {

    let date = new Date(props.timestamp);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let daysCondensed = ["Sun.", "Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat."];
    let day = "";
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let meridiem = "AM";

    if (props.condensed) {
        day = daysCondensed[date.getDay()];
    } else {
        day = daysOfWeek[date.getDay()];
    }

    if (hour > 12) {
        meridiem = "PM";
        hour -= 12;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <h4>{day}, {hour}:{minutes} {meridiem}</h4>
    );
}