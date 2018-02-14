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
    render() {
        return (
           
            <div>
                {/* {this.state.redirect ? <Redirect to="/users">Users</Redirect> : */}
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
                                <FormButton><Link to="#">-</Link></FormButton>
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
                </FormWrapper>
            </div>
        )

    }
}



export default NewPost