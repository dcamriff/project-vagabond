import styled from 'styled-components'

export const SplashImage = styled.img `
width: 100vw;
`
export const CityImage = styled.img`
    width: 416px;
    height: 286.86px;

    /* @media only screen and (max-width: 1679px){
        width: 375px;
        height: 286.86px;
    
    }
    @media only screen and (max-width: 1601px){
        width: 507px;
        height: 286.86px;
    
    }
    @media only screen and (max-width: 1498px){
        width: 475px;
        height: 286.86px;
    
    }
    @media only screen and (max-width: 1492px){
        width: 450px;
        height: 286.86px;
    
    }*/
    @media only screen and (max-width: 1280px){
        width: 425px;
        height: 286.86px;
    
    }
    @media only screen and (max-width: 938px){
        width: 400px;
        height: auto;
    
    }
    @media only screen and (max-width: 900px){
        width: 375px;
        height: auto;
    
    }

    @media only screen and (max-width: 787px){
        width: 100%;
        height: auto;
    
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