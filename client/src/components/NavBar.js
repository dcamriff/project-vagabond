import React from 'react'
import { Nav, NavItems } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'
const NavBar = () => {
    return (
        <Nav>
            <LogoImage src="https://i.imgur.com/Iv70Ed1.png"/>
            <div>
                <a href="#">Sign Up</a>
                <a href="#">Login</a>
            </div>
        </Nav>
    )
}

export default NavBar