import styled from 'styled-components'

export const CityIndexContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);

`
export const PhotoCenteringContainer = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
export const PhotoHeaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10em;
`

export const SplashImageContainer = PhotoCenteringContainer.extend`
    color: white;
`

export const CityContainer = PhotoCenteringContainer.extend`

`

export const SplashHeaderContainer = styled.div`
    
    
`





export default { CityIndexContainer, SplashImageContainer, SplashHeaderContainer, PhotoCenteringContainer }