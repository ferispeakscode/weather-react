import React from 'react';

export default function Statistics(props) {
    console.log(props);

    return (
        <div>
            <h3>{props.city}</h3>
        </div>
    );
}