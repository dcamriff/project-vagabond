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

    showEditForm = () => {
        this.props.showEditForm()
    }


    render() {
        return (

            <div>
                {this.props.showEditFormState
                    ? <FormWrapper>
                            <FormBody onSubmit={this.addNewPost}>
                                <InputAndButtonContainer>
                                    <FormInput
                                        type="string"
                                        name="title"
                                        placeholder="update post title"
                                        onChange={this.handleInputChange}/>
                                    <ButtonContainer>
                                        <FormInputButton type="submit" value="+"/>
                                        <FormButton onClick={() => this.showEditForm()}>-</FormButton>
                                    </ButtonContainer>
                                </InputAndButtonContainer>

                                <FormInput
                                    type="string"
                                    name="picture"
                                    placeholder="update picture"
                                    onChange={this.handleInputChange}/>

                                <FormInput
                                    type="text-area"
                                    name="img"
                                    placeholder="Image URL"
                                    onChange={this.handleInputChange}/>

                                <TextArea
                                    type="string"
                                    name="img"
                                    placeholder="update post content"
                                    onChange={this.handleInputChange}/>

                            </FormBody>
                        </FormWrapper>
                    : null}
            </div>
        )

    }
}
// d
export default PostEdit