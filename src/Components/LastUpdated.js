import React from 'react';
import DateItem from './DateItem';

export default function LastUpdated(props) {

    return (
        <h6>Last Updated: <DateItem timestamp={props.timestamp} condensed={false} /></h6>
    );
}