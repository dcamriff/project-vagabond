import React, { Component } from 'react'

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
                Hello from NewPost
            </div>
            // <UserFormContainer>

            //     Hello from UserForm
            //     {this.state.redirect ? <Redirect to="/users">Users</Redirect> :
            //     <FormWrapper>
            //           <FormBody onSubmit={this.addNewUser}>
            //         <FormField>
            //             <FormHeader>
            //                 <FormHeading>New User</FormHeading>
            //             </FormHeader>
            //             <FormInput
            //                 type="string"
            //                 name="firstName"
            //                 placeholder="First Name"
            //                 onChange={this.handleInputChange} />
            //         </FormField>

            //         <FormField>
                        
            //             <FormInput
            //                 type="string"
            //                 name="lastName"
            //                 placeholder="Last Name"
            //                 onChange={this.handleInputChange} />
            //         </FormField>
            //         <FormField>
            //             <FormInput
            //                 type="string"
            //                 name="img"
            //                 placeholder="Image URL"
            //                 onChange={this.handleInputChange} />
            //         </FormField>
            //         <FormField>
            //             <FormInputButton
            //                 type="submit"
            //                 value="Add New User" />
            //         </FormField>
            //         <FormField>
            //         <FormButton><Link to="/users">Cancel</Link></FormButton>
            //         </FormField>
            //     </FormBody>
            //     </FormWrapper>}
            // </UserFormContainer>
        )

    }
}



export default NewPost