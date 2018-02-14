import React from 'react'
import { LogoImage } from './styled-components/Images'
import { CityInfo } from './styled-components/Text'
import { Link } from 'react-router-dom'

const PostIndex = (props) => {

    return(
        <div>
        <CityInfo>
        <Link to="#"><h2>{props.title}</h2></Link>
            <LogoImage  src={props.picture}/><h2>{props.user}</h2>
            <a href="#"></a>
            <p>{props.content}</p>
        </CityInfo>
        </div>
    )
}

export default PostIndex