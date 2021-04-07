import React from 'react';
import DateItem from './DateItem';

export default function LastUpdated(props) {

    return (
        <h4>Last Updated: <DateItem timestamp={props.timestamp} condensed={false} /></h4>
    );
}