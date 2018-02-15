import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import CityShow from './components/CityShow'
import NewPost from './components/NewPost'
import LoginForm from './components/LoginForm'
import axios from 'axios'

class App extends Component {
  state = {
    cities: []
  }



  async getCities() {
    try{
      const res = await axios.get('/api/cities')
      const cities = res.data
      this.setState({cities: cities})
    }
    catch(err){
      console.log(err)
    }

  }

  

  componentWillMount() {
    this.getCities();
  }

  render() {

    const HomeComponent = () => (<Home cities={this.state.cities} />)
    const CityShowComponent = (props) => (<CityShow city={this.state.city} {...props}  />)
    const NewPostComponent = ()=> (<NewPost />)
    
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/cities/:id" component={CityShowComponent} />
          <Route exact path="/cities/:city_id/posts/new" component={NewPostComponent} />
          <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App