import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
  LoginWrapper,
  UserFormWrapper,
  UserFormHeader,
  UserFormBody,
  GlobalFormInputButton,
  UserFormInput
} from './styled-components/Form'



class LoginForm extends Component {
  state = {
    username: "",
    login : false
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    event.preventDefault()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`/api/users/retrieve/${this.state.username}`)
      .then((res) => {
        if(res.data) {
          localStorage.setItem("userId", res.data.id)
          this.setState({login: true})
        }
        
      
      })
      .catch((error) => {console.log(error)})  
  }

  render() {

    if (this.state.login === true) {
      console.log('homeeee')
      return (<Redirect to="/" />)   
    }

    return (

      <LoginWrapper>
        <UserFormBody>
          <UserFormHeader>
            Welcome to Vojaĝo
          </UserFormHeader>

          <form onSubmit={this.handleSubmit}>
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
    )
  }
}

export default LoginForm