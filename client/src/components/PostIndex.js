import React from 'react'
import { PostIcon, TrashIcon, EditIcon } from './styled-components/Images'
import { PostTitleAndBodyContainer, PostHeaderContainer, TrashAndEditIconsContainer, PostBodyContainer } from './styled-components/Containers'
import PostEdit from './PostEdit'
import { CityInfo, PostTitle } from './styled-components/Text'
import { Link } from 'react-router-dom'


const PostIndex = (props) => {
    
    return(
        <div>
            <CityInfo>
                
                    <PostTitleAndBodyContainer>
                    <TrashAndEditIconsContainer>
                        <PostTitle>{props.title}</PostTitle>
                        <div>
                            <TrashIcon src="https://i.imgur.com/OMSX8Z5.png" onClick={() => { props.deletePost(props.cityId, props.postId) }} />
                            <EditIcon src="https://i.imgur.com/L0xUMw1.png" onClick={() => { props.showEditForm() }} />
                        </div>
                        </TrashAndEditIconsContainer>
                        <PostBodyContainer>
                            <PostHeaderContainer>
                                <PostIcon  src={props.picture}/>
                            </PostHeaderContainer>
                            <p>{props.content}</p>
                        </PostBodyContainer>
                    </PostTitleAndBodyContainer>
                        
                   
                <hr/>
                </CityInfo>
        <PostEdit showEditFormState = {props.showEditFormState} showEditForm = {props.showEditForm}/>
        </div>
    )
}

export default PostIndex