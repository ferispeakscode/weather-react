import React from 'react';

export default function LastUpdated(props) {
    let lastUpdated = formatDateTime(props.date);

    function formatDateTime(timestamp) {
        let date = new Date(timestamp);
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = "";
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let meridiem = "AM";

        day = daysOfWeek[date.getDay()];

        if (hour > 12) {
            meridiem = "PM";
            hour -= 12;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${day}, ${hour}:${minutes} ${meridiem}`;
    }

    return (<h4>{lastUpdated}</h4>);
}