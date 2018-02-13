import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import CityShow from './components/CityShow'


class App extends Component {
  state = {
    city: {
      id: 1,
      name: 'Atlanta',
      picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg'
    },
    
    cities: [
      {
        id: 1,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }, {
        id: 2,
        name: 'Tokyo',
        picture: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=' +
            '2226&q=80'
      }, {
        id: 3,
        name: 'London',
        picture: 'https://images.unsplash.com/photo-1498829356886-bd4efcaf0901?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=fe8ff86b4c93e92d8a959804bf2b9901&auto=format&fit=crop&w=' +
            '2550&q=80'
      }, {
        id: 4,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }, {
        id: 5,
        name: 'Tokyo',
        picture: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=' +
            '2226&q=80'
      }, {
        id: 6,
        name: 'London',
        picture: 'https://images.unsplash.com/photo-1498829356886-bd4efcaf0901?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=fe8ff86b4c93e92d8a959804bf2b9901&auto=format&fit=crop&w=' +
            '2550&q=80'
      }, {
        id: 7,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }, {
        id: 8,
        name: 'Tokyo',
        picture: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=' +
            '2226&q=80'
      }, {
        id: 9,
        name: 'London',
        picture: 'https://images.unsplash.com/photo-1498829356886-bd4efcaf0901?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=fe8ff86b4c93e92d8a959804bf2b9901&auto=format&fit=crop&w=' +
            '2550&q=80'
      }, {
        id: 10,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }, {
        id: 11,
        name: 'Tokyo',
        picture: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=' +
            '2226&q=80'
      }, {
        id: 12,
        name: 'London',
        picture: 'https://images.unsplash.com/photo-1498829356886-bd4efcaf0901?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=fe8ff86b4c93e92d8a959804bf2b9901&auto=format&fit=crop&w=' +
            '2550&q=80'
      }, {
        id: 13,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }, {
        id: 14,
        name: 'Tokyo',
        picture: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=' +
            '2226&q=80'
      }, {
        id: 15,
        name: 'London',
        picture: 'https://images.unsplash.com/photo-1498829356886-bd4efcaf0901?ixlib=rb-0.3.5&ixid' +
            '=eyJhcHBfaWQiOjEyMDd9&s=fe8ff86b4c93e92d8a959804bf2b9901&auto=format&fit=crop&w=' +
            '2550&q=80'
      }, {
        id: 13,
        name: 'Atlanta',
        picture: 'http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jp' +
            'g'
      }
    ]
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
