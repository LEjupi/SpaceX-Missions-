import React from 'react'
import { Launch } from './Launch';
import "./Missions.css"

export const Missions = (props) => {
    const launches = props.launches;

    if (!launches || launches.length === 0) {
        return <div>no data!</div>
    }

    return (
        <div className='Missions'>
            {launches.map(launch => (
                <Launch launch={launch} />
            ))}
        </div>
    )
}
