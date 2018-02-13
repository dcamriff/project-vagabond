import React from 'react'

const CityIndex = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img width="416" src={props.picture} alt={props.name}/>

        </div>
    )
}

export default CityIndex