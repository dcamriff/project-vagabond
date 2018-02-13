import React from 'react'
import { CityContainer, CityInfoContainer, CityShowContainer, CityImageCenteringContainer } from './styled-components/Containers'
import { CityShowImage, LogoImage } from './styled-components/Images'
import { CityInfo } from './styled-components/Text'

const CityShow = (props) => {
    return (
        <CityShowContainer>
                <CityImageCenteringContainer>
                    <CityShowImage src={props.city.picture} alt={props.city.name}/>
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo><h1>Here's What They Think...</h1></CityInfo>
                    <CityInfo><a href="/cities/:id/posts/new">What do you think?</a></CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                    <CityInfo>
                        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!
                    </CityInfo>
                </CityInfoContainer>
        </CityShowContainer>
    )
}

export default CityShow