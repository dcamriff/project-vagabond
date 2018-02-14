import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import CityShow from './components/CityShow'
import axios from 'axios'


class App extends Component {
  state = {
    cities: []
  }

  getCities = () => {
    axios.get('/api/cities')
    .then((res) => {this.setState({cities : res.data}) })
  }

  componentWillMount() {
    this.getCities();
  }

  render() {

    const HomeComponent = () => (<Home cities={this.state.cities} />)
    const CityShowComponent = () => (<CityShow city={this.state.city} />)
    
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/cities/:id" component={CityShowComponent} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App