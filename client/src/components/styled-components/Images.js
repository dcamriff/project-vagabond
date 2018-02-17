import styled from 'styled-components'

export const SplashImage = styled.img `
width: 100vw;
`
export const CityImage = styled.img`
    width: 24.75vw;
    height: 286.86px;

   
    
    @media only screen and (max-width: 1280px){
        width: 33vw;
        height: 286.86px;
    
    }
 
    @media only screen and (max-width: 1000px){
        width: 49.75vw;
        height: 60vh;
    
    }
    @media only screen and (max-width: 830px){
        width: 100vw;
        height: 90vh;
    
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
    background-attachment: fixed;

    @media only screen and (min-width: 900px){
        margin-left: 30px;
    }

    @media only screen and (max-width: 900px){
        width: 80%;
    }
    
`

export const PostIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    
`
export const TrashIcon = styled.img`
    width: 15px;
    height: 15px;
    margin: 0 10px 0 10px;
`

export const EditIcon = TrashIcon.extend`

`



export default { SplashImage, CityImage, LogoImage, CityShowImage, PostIcon, TrashIcon }