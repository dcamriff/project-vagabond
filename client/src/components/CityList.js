import React from 'react'
import CityIndex from './CityIndex'
import { CityIndexContainer } from './styled-components/Containers'

const CityList = (props) => {
    const cityList = props.cities.map((city, index) => {
        console.log('Hey 1!', props.cities.name)
        return (
        <CityIndex name={city.name} picture={city.picture} key={index} cityId={city.id} />
        )
    })


    return (
        <CityIndexContainer>
            {cityList}
        </CityIndexContainer>
    )
}

export default CityList