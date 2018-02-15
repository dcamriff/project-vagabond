// /////////////////////////////////////////////////////////////////
// TEAM: THIS IS STARTER CODE FOR THE EDIT FORM BUT NEEDS TO BE REFACTORED TO GET WORKING.

import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {
    InputAndButtonContainer,
    ButtonContainer,
    TextArea,
    FormWrapper,
    FormHeader,
    FormHeading,
    FormBody,
    FormField,
    FormInput,
    FormButton,
    FormInputButton
} from './styled-components/Form'

class PostEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editPost: {}
        }
    }

    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const editPost = {
            ...this.state.editPost
        }
        editPost[attributeName] = attributeValue
        this.setState({editPost})
        console.log(this.state)
    }

    resetForm = () => {
        const editPost = {
            ...this.state.editPost
        }
        this.setState({editPost, redirect: true})
    }

    addNewPost = (event) => {
        event.preventDefault()
        const updatedPost = {...this.state.updatedPost}
        this.resetForm()
        // this.props.addNewPost(newPost)
        console.log(this.state)
    }

    showPostForm = () => {this.props.showPostForm()
    }

    render() {
        return (

            <div>
                {this.props.showPostFormState
                    ? <FormWrapper>
                            <FormBody onSubmit={this.addNewPost}>
                                <InputAndButtonContainer>
                                    <FormInput
                                        type="string"
                                        name="title"
                                        placeholder="update post title"
                                        value={}
                                        onChange={this.handleInputChange}/>
                                    <ButtonContainer>
                                        <FormInputButton type="submit" value="+"/>
                                        <FormButton onClick={() => this.showPostForm()}>-</FormButton>
                                    </ButtonContainer>
                                </InputAndButtonContainer>

                                <FormInput
                                    type="string"
                                    name="picture"
                                    placeholder="update picture"
                                    value={}
                                    onChange={this.handleInputChange}/>

                                <FormInput
                                    type="text-area"
                                    name="img"
                                    placeholder="Image URL"
                                    value={}
                                    onChange={this.handleInputChange}/>

                                <TextArea
                                    type="string"
                                    name="img"
                                    placeholder="update post content"
                                    value={}
                                    onChange={this.handleInputChange}/>

                            </FormBody>
                        </FormWrapper>
                    : null}
            </div>
        )

    }
}

export default EditPost