import React, { Component } from 'react'

class LoginForm = () => {
    return (
        <div></div>
            <FormWrapper>
                <FormBody onSubmit={this.addNewPost}>
                    <InputAndButtonContainer>
                        <FormInput
                            type="string"
                            name="username"
                            placeholder="enter username"
                            onChange={this.handleInputChange}/>
                        <ButtonContainer>
                            <FormInputButton type="submit" value="+"/>
                            <FormButton>
                                <Link to="#">-</Link>
                            </FormButton>
                        </ButtonContainer>
                    </InputAndButtonContainer>

                    <FormInput
                        type="string"
                        name="picture"
                        placeholder="Add a picture!"
                        onChange={this.handleInputChange}/>

                </FormBody>
            </FormWrapper>
        </div>
    )
}

export default LoginForm