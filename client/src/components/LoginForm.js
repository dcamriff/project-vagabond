import React, {Component} from 'react'
import axios from 'axios'
import {
  LoginWrapper,
  UserFormWrapper,
  UserFormHeader,
  UserFormBody,
  GlobalFormInputButton,
  UserFormInput
} from './styled-components/Form'

<<<<<<< HEAD

state = {
=======
class LoginForm extends Component {
  state = {
>>>>>>> login
    username: ""
  }

  getUser = (event) => {
    event.preventDefault()
    const loginUser = {
      ...this.state.loginUser
    }
    console.log('Getting User for login')
    this.resetForm()
    this
      .props
      .getUser(loginUser)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    event.preventDefault()
  }

  handleSubmit = (event) => {
    axios
      .post('/api/users', this.state)
      .then((res) => {
        this
          .props
          .updateState(res.data)
        localStorage.setItem("userId", res.data._id)
        this.setState(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
      event.preventDefault()
  }

  render() {

    return (
<<<<<<< HEAD
        <div>
       Hello
        </div>
=======
      <LoginWrapper>
        <UserFormBody>
          <UserFormHeader>
            Welcome to Vojaĝo
          </UserFormHeader>

          <form onSubmit={this.getUser.username}>
            <UserFormInput
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.username}
              onChange={this.handleInputChange}/>
            <br/>
            <div>
              <GlobalFormInputButton className="input-button" type="submit" value="login"/>
            </div>
          </form>

        </UserFormBody>
      </LoginWrapper>
>>>>>>> login
    )
  }
}

export default LoginForm