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

    addNewPost = (event, newPost) => {
        event.preventDefault()
        axios.post(`/api/cities/${this.props.match.params.id}/posts`, newPost)
        .then(this.getPost())
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

    async deleteUser(userId) {
        try {
            console.log('DELETE', userId)
            await axios.get('/api/users/' + userId + '/delete')
            this.redirectToUsers()
            window.location.reload()

        }
        catch (err) {
            console.log(err)
        }
    }

    async deletePost(cityId, postId) {
        console.log("CLICKED!")
        try{
            await axios.get(`/api/cities/${cityId}/posts/${postId}/delete`)
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
                    {/* <CityShowImage src={this.props.city.picture} alt={this.props.city.name}/> */}
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo><h1>Hello From... </h1></CityInfo>
                    <CityInfo><FormButton onClick= {() => this.showPostForm()}>(+) post</FormButton></CityInfo>
                    <NewPost showPostFormState = {this.state.showPostFormState} showPostForm = {this.showPostForm} />
                    <PostList posts = {this.state.posts} deletePost = {this.deletePost}/>
                </CityInfoContainer>
        </CityShowContainer>
    )
    }
}

export default CityShow