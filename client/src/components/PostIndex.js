import React from 'react'
import { PostIcon } from './styled-components/Images'
import { PostHeaderContainer } from './styled-components/Containers'
import { CityInfo } from './styled-components/Text'
import { Link } from 'react-router-dom'

const PostIndex = (props) => {

    deletePost = () => {
        this.props.deletePost()
    }
    
  
    return(
        <div>
        <CityInfo>
            <PostHeaderContainer>
                <PostIcon  src={props.picture}/>
                <p>{props.user}</p>
            </PostHeaderContainer>
            <div>
            <img src="https://i.imgur.com/mhDL1HQ.png" onClick={() => { this.deletePost() }} />
                <Link to="#"><p>{props.title}</p></Link>
                <p>{props.content}</p>
            </div>
        </CityInfo>
        </div>
    )
}

export default PostIndex