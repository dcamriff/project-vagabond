import React from 'react'
import { PostIcon, TrashIcon, EditIcon } from './styled-components/Images'
import { PostHeaderContainer, TrashAndEditIconsContainer } from './styled-components/Containers'
import { CityInfo } from './styled-components/Text'
import { Link } from 'react-router-dom'


const PostIndex = (props) => {
    
    return(
        <div>
        <CityInfo>
            <PostHeaderContainer>
                <PostIcon  src={props.picture}/>
                <p>{props.user}</p>
            </PostHeaderContainer>
            <TrashAndEditIconsContainer>

            <p>{props.title}</p>
            <div>
            <TrashIcon src="https://i.imgur.com/OMSX8Z5.png" onClick={() => { props.deletePost(props.cityId, props.postId) }} />
            <EditIcon src="https://i.imgur.com/L0xUMw1.png" onClick={() => { props.deletePost(props.cityId, props.postId) }} />
            </div>
            </TrashAndEditIconsContainer>
            <p>{props.content}</p>
            <hr/>
        </CityInfo>
        </div>
    )
}

export default PostIndex