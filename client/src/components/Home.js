import React from 'react'
import CityList from './CityList'
import { SplashImage } from './styled-components/Images'
import { HomeContainer, SplashImageContainer, SplashHeaderContainer } from './styled-components/Containers'

const Home = (props) => {
    return (
        <HomeContainer>
            <SplashImageContainer>
                <SplashImage src="https://i.imgur.com/6WylPSF.png" alt="{cities.name}"/>
                <SplashHeaderContainer>Vojaĝo</SplashHeaderContainer>
            </SplashImageContainer>
            <CityList cities={props.cities} />
        </HomeContainer>
    )

}

export default Home