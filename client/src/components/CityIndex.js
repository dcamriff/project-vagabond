import React from 'react'
import { CityHeaderContainer, CityContainer } from './styled-components/Containers'
import { CityImage } from './styled-components/Images'
import { Link } from 'react-router-dom'

const CityIndex = (props) => {
    return (
        <div>
            <CityContainer>
            <CityHeaderContainer>
                <Link to={`cities/${props.cityId}`}>{props.name}</Link>
                </CityHeaderContainer>
            <CityImage src={props.picture} alt={props.name}/> 
            </CityContainer>
            
        </div>
    )
}

export default CityIndex