import styled from 'styled-components'

export const SplashImage = styled.img `
width: 100vw;
`
export const CityImage = styled.img`
    width: 416px;
    height: 286.86px;

    @media only screen and (min-width: 1000px){
        width: 385px;
        height: 286.86px;
    
    }
`
export const LogoImage = styled.img`
    margin: 15px 0 5px 15px;
    width: 50px;
`
export const CityShowImage = styled.img`
    width: 45vw;
    margin-left: 100px;
    background-attachment: fixed;
    
`

export const PostIcon = styled.img`
    width: 50px;
    height: 50px;
`
export const TrashIcon = styled.img`
    width: 15px;
    height: 15px;
`



export default { SplashImage, CityImage, LogoImage, CityShowImage, PostIcon, TrashIcon }