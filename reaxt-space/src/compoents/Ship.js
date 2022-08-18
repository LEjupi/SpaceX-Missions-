import React from 'react'

import "./Ship.css"

export const Ship = (props) => {
    return (
        <div className='Ship'>
            <p>{props.ship.name}</p>
            <img src={props.ship.image} />
        </div>
    )
}
