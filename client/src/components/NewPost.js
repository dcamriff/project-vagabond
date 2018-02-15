import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { GenericFormContainer } from './styled-components/Containers'
import { InputAndButtonContainer, ButtonContainer, TextArea, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'
import axios from 'axios'


class NewPost extends Component {
        
    state = {
            newPost: {
                user_id : localStorage.userId,
                city_id : this.props.city_id,
            }, 
            city_id : this.props.city_id,
        }
    

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newPost = {...this.state.newPost}
        newPost[attributeName] = attributeValue
        this.setState({newPost})
    }

    resetForm = () => {
        const newPost = {...this.state.newPost}
        this.setState({newPost, redirect: true})
    }

    createPost(event){
        console.log(this.state.newPost)
        event.preventDefault()
        axios.post(`/api/cities/${this.state.city_id}/posts`, this.state.newPost)
        .then((res) => { this.props.getPosts()})
        .catch((error) => {console.log(error)}) 
    }


    showPostForm = () => {
        this.props.showPostForm()
    }

    render() {
        return (
        
            <div>
                {this.props.showPostFormState ?  
                <FormWrapper>
                      <FormBody onSubmit={this.createPost.bind(this)}>
                    <InputAndButtonContainer>
                        <FormInput
                            type="string"
                            name="title"
                            placeholder="Name your post!"
                            onChange={this.handleInputChange} />
                             <ButtonContainer>
                                <FormInputButton
                                    type="submit"
                                    value="+" />
                                <FormButton onClick={()=> this.showPostForm()}>-</FormButton>
                        </ButtonContainer>
                    </InputAndButtonContainer>

                  
                        <FormInput
                            type="string"
                            name="picture"
                            value="https://images.unsplash.com/photo-1454473332662-09275b52e5a1?ixlib=rb-0.3.5&s=c2ec918ca71006a0b0c5ab301ad885a1&auto=format&fit=crop&w=2550&q=80"
                            placeholder="Add a picture!"
                            onChange={this.handleInputChange} />
                   
                  
                      
                        <FormInput
                            type="string"
                            name="tag"
                            placeholder="hashtags?"
                            onChange={this.handleInputChange} />
                   
    
                        <TextArea
                            type="string"
                            name="content"
                            placeholder="Tell us about it"
                            onChange={this.handleInputChange} />
                   
                </FormBody>
                </FormWrapper> : null}
            </div>
        )

    }
}



export default NewPost