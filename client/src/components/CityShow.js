import React from 'react'
import { CityContainer, CityInfoContainer, CityShowContainer, CityImageCenteringContainer } from './styled-components/Containers'
import { CityShowImage } from './styled-components/Images'
import { CityInfo } from './styled-components/Text'

const CityShow = (props) => {
    return (
        <CityShowContainer>
                <CityImageCenteringContainer>
                    <CityShowImage src={props.city.picture} alt={props.city.name}/>
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae animi mollitia debitis illum earum laborum, sit a temporibus tempore, nihil dolor, quo blanditiis. Iure blanditiis in iusto. Maiores, veniam!</CityInfo>
                </CityInfoContainer>
        </CityShowContainer>
    )
}

export default CityShow