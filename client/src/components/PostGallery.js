import React from 'react'
import { CityShowImage } from './styled-components/Images'
// import { PostHeaderContainer, TrashAndEditIconsContainer } from './styled-components/Containers'
// import { CityInfo } from './styled-components/Text'
// import { Link } from 'react-router-dom'


const PostGallery = (props) => {
    
    return(
        <div>
            <CityShowImage  src={props.picture}/>
        </div>
    )
}

export default PostGallery