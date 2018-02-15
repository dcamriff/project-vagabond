import React, { Component } from 'react'
import { CityContainer, CityInfoContainer, CityShowContainer, CityImageCenteringContainer } from './styled-components/Containers'
import { CityShowImage, LogoImage } from './styled-components/Images'
import { CityInfo } from './styled-components/Text'
import { FormButton } from './styled-components/Form'
import NewPost from './NewPost'
import PostList from './PostList'
import axios from 'axios'

class CityShow extends Component {

    state = {
        city: {},
        posts: [
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        },
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        },
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        }
        ],
        showPostFormState: false
    }


    getPosts = () => {
        axios.get(`/api/cities/${this.props.match.params.id}/posts`)
        .then((res) => {this.setState({posts: res.data})})
    }
    
 
  async createPost(newPost){
      try{
          const res = await axios.post(`/api/cities/${this.props.match.params.id}/posts`)
          newPost = res.data
          const updatedPosts = [...this.state.posts]
          this.setState({posts: updatedPosts})
      }
      catch(err){
          console.log(err)
      }
  }
    addNewPost = async (newPost) => {
        try{
           await this.createPost(newPost)
           const posts = [...this.state.posts]
           posts.push(newPost)
           this.setState({ posts })    
        }
        catch(err){
            console.log(err)
        }
    }

    getCityInfo = () => {
        axios.get(`/api/cities/${this.props.match.params.id}`)
        .then((res) => {this.setState({city: res.data})})
    }

    
    showPostForm = ()=> {   
        if (this.state.showPostFormState === false){
            this.setState({showPostFormState: true})
        } else{
            this.setState({showPostFormState: false})
        }
        
    }



    async deletePost(cityId, postId) {
        try{
            await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        }
        catch(err){
            console.log(err)
        }
    }

     


    componentWillMount(){
        this.getPosts()
        this.getCityInfo()
        console.log(this.props)
    }
    render(){
    return (
        <CityShowContainer>
                <CityImageCenteringContainer>
                    <CityShowImage src={this.state.city.picture} alt={this.state.city.name}/>
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo><h1>Hello From... </h1></CityInfo>
                    <CityInfo><FormButton onClick= {() => this.showPostForm()}>(+) post</FormButton></CityInfo>
                    <NewPost showPostFormState = {this.state.showPostFormState} showPostForm = {this.showPostForm} addNewPost={this.addNewPost}/>
                    <PostList posts = {this.state.posts} deletePost = {this.deletePost}/>
                </CityInfoContainer>
        </CityShowContainer>
    )
    }
}

export default CityShow