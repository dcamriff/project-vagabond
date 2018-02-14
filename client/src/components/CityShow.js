import React, { Component } from 'react'
import { CityContainer, CityInfoContainer, CityShowContainer, CityImageCenteringContainer } from './styled-components/Containers'
import { CityShowImage, LogoImage } from './styled-components/Images'
import { CityInfo } from './styled-components/Text'
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
        ]
    }
    
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
                    <CityInfo><a href="/cities/:city_id/posts/new">(+) post</a></CityInfo>
                    <PostList posts = {this.state.posts}/>
                </CityInfoContainer>
        </CityShowContainer>
    )
    }
}

export default CityShow