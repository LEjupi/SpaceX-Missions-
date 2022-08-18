import React from 'react'
import "./Launch.css"
import { Ship } from './Ship';

export const Launch = (props) => {

    const { launch } = props;

    const ships = launch.ships || []

    return (
        <div className='Launch'>
            <h4>{launch.mission_name}</h4>
            <hr />
            <h6>Launch ships:</h6>
            <div className='Launch__ships'>
                {ships.length === 0 ? <small>there are no ships</small> : ships.map(ship => <Ship ship={ship} />)}
            </div>
        </div>
    )
}
