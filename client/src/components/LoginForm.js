import React from 'react'

<<<<<<< HEAD
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
=======
state = {
    username: ""
  }

  handlChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }
>>>>>>> login

  handleSubmit = (event) => {
    axios.post('/api/users', this.state)
      .then((res) => {
        this.props.updateState(res.data)
        localStorage.setItem("userId", res.data._id)
        this.setState(res.data)
      })
      .catch((error) => { console.log(error) })
    event.preventDefault()
  }

const LoginForm = () => {
    return (
        <div>
            Hello from Login Form
        </div>
    )
}

export default LoginForm