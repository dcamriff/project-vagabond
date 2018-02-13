import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: #1b1b1b;
`

export const CityIndexContainer = styled.div `
    display: flex;
    flex-wrap: wrap;

`
export const PhotoCenteringContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const PhotoHeaderContainer = styled.div`
     position: absolute;
     z-index: +1;
    
`

export const SplashImageContainer = PhotoCenteringContainer.extend`
    font-size: 10em;
    color: white;
`

export const CityContainer = PhotoCenteringContainer.extend`
    font-size: 5em;
    color: white;
`

export const CityHeaderContainer = PhotoHeaderContainer.extend`

`

export const SplashHeaderContainer = PhotoHeaderContainer.extend`
    
    
`





export default { HomeContainer, SplashImageContainer, SplashHeaderContainer, PhotoCenteringContainer, PhotoHeaderContainer, CityIndexContainer, CityHeaderContainer }