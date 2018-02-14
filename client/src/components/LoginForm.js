import React from 'react'


state = {
    username: ""
  }

  handlChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }

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
       Hello
        </div>
    )
}

export default LoginForm