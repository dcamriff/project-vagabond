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
            city_id : this.props.city_id
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
        this.props.showPostForm()
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