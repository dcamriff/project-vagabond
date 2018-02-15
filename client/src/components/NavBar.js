import React from 'react'
import { Nav, NavItems } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Nav>
        <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>
            {/* {this.props.isLoggedIn ?  */}
            <div>
            <a href="/">Logout</a>
            
            </div> :
            <div>
                <a href="#">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </Nav>
    )
}

export default NavBar