import React from 'react'
import PostIndex from './PostIndex'

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
        />
        )
    })

    return(
        <div>
            {postList}
        </div>
    )
}

export default PostList