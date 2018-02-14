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
    
    showPostForm = ()=> {   
        if (this.state.showPostFormState === false){
            this.setState({showPostFormState: true})
        } else{
            this.setState({showPostFormState: false})
        }
        
    }


     // /api/cities/${this.props.cityId}/posts/${this.props.postId}/delete


    // async getPosts() {
    //     try{
    //       const res = await axios.get(`/api/cities/${this.props.match.params}/posts`)
    //       const posts = res.data
    //       console.log("CALLEDIT", posts)
    //       this.setState({posts: posts})
    //     }
    //     catch(err){
    //       console.log(err)
    //     }
    //   }

    //   componentWillMount(){
    //       this.getPosts()
    //   }

    render(){
    return (
        <CityShowContainer>
                <CityImageCenteringContainer>
                    <CityShowImage src={this.props.city.picture} alt={this.props.city.name}/>
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo><h1>Hello From... </h1></CityInfo>
                    <CityInfo><FormButton onClick= {() => this.showPostForm()}>(+) post</FormButton></CityInfo>
                    <NewPost showPostFormState = {this.state.showPostFormState} showPostForm = {this.showPostForm}/>
                    <PostList posts = {this.state.posts}/>
                </CityInfoContainer>
        </CityShowContainer>
    )
    }
}

export default CityShow