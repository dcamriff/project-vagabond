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
    font-family: 'Raleway', sans-serif;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);  

`
// font-family: 'Permanent Marker', sans-serif;

export const CityContainer = PhotoCenteringContainer.extend`
    font-size: 5em;
    color: white;
    border: solid 1px white;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);   
`

export const TaglineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    height: 30vh;
    color: white;
`

export const CityHeaderContainer = PhotoHeaderContainer.extend`
a {
    text-decoration: none;
    color: white;
}

`

export const SplashHeaderContainer = PhotoHeaderContainer.extend`

    
`

export const CityInfoContainer = styled.div`
    width: 45vw;
    border: 1px solid yellow;
  
`

export const CityShowContainer = styled.div`
    display: flex;
    background-color: #1b1b1b;

`
export const CityImageCenteringContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    height: 100vh;
`


export default { 
    HomeContainer, 
    SplashImageContainer, 
    SplashHeaderContainer, 
    PhotoCenteringContainer, 
    PhotoHeaderContainer, 
    CityIndexContainer, 
    CityHeaderContainer, 
    TaglineContainer,
    CityInfoContainer,
    CityShowContainer,
    CityImageCenteringContainer
 }