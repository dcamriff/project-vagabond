import React from 'react'
import CityList from './CityList'
import { SplashImage } from './styled-components/Images'

const Home = (props) => {
    return (
        <div>Hello from Home!
            <div>
                <SplashImage src="https://i.imgur.com/6WylPSF.png" alt="{cities.name}"/>
            </div>
            <CityList cities={props.cities} />
        </div>
    )

}

export default Home