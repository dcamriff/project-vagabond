import React from 'react'
import { PostIcon } from './styled-components/Images'
import { PostHeaderContainer } from './styled-components/Containers'
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
            <div>
                <Link to="#"><p>{props.title}</p></Link>
                <p>{props.content}</p>
            </div>
        </CityInfo>
        </div>
    )
}

export default PostIndex