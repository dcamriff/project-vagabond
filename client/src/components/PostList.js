import React from 'react'
import PostIndex from './PostIndex'
import PostGallery from './PostGallery'

const PostList = (props) => {

    const postList = props.posts.map((post, index)=>{
        return (
        <PostIndex city = {post.city} 
        user = {post.user} 
        title = {post.title}
        content = {post.content}
        picture = {post.picture}
        cityId = {post.city_id}
        postId = {post.id}
        deletePost = {props.deletePost}
        key = {index} 
        showEditFormState = {props.showEditFormState} 
        showEditForm = {props.showEditForm}
        />
        )
    })
    const gallery = props.posts.map((post, index)=>{
        return (
        <PostGallery 
        picture = {post.picture}
        cityId = {post.city_id}
        postId = {post.id}
        key = {index} 
        />
        )
    })
    return(
        <div>
            {props.viewPostGallery ? <div>{gallery}</div> : <div>{postList}</div>}
            
    
            
        </div>
    )
}

export default PostList