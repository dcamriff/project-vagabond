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
    cities: [],
    city: {
      name: "Atlanta",
      picture: "http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg"
    },
    posts: []
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

  // getPosts = () => {
  //   axios.get('/api/cities/:city_id/posts')

  // }

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