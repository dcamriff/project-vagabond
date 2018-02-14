import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { GenericFormContainer } from './styled-components/Containers'
import { InputAndButtonContainer, ButtonContainer, TextArea, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'
class NewPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newPost: {}
        }
    }

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newPost = {
            ...this.state.newPost
        }
        newPost[attributeName] = attributeValue
        this.setState({newPost})
        console.log(this.state)
    }

    resetForm = () => {
        const newPost = {...this.state.newPost}
        this.setState({newPost, redirect: true})
    }

    addNewPost = (event) => {
        event.preventDefault()
        const newPost = {...this.state.newPost}
        this.resetForm()
        // this.props.addNewPost(newPost)
        console.log(this.state)
    }

    showPostForm = () => {
        this.props.showPostForm()
    }

    render() {
        return (
           
            <div>
                {this.props.showPostFormState ?  
                <FormWrapper>
                      <FormBody onSubmit={this.addNewPost}>
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
                            type="text-area"
                            name="img"
                            placeholder="Image URL"
                            onChange={this.handleInputChange} />
                   
    
                        <TextArea
                            type="string"
                            name="img"
                            placeholder="Tell us about it"
                            onChange={this.handleInputChange} />
                   
                </FormBody>
                </FormWrapper> : null}
            </div>
        )

    }
}



export default NewPost