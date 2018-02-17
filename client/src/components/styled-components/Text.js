import styled from 'styled-components'

export const CityInfo = styled.p `
    font-size: 14px;
    color: #1b1b1b;
    font-family: 'Helvetica';

    a {
        text-decoration: none;
        color: #1b1b1b;
    }  

`

export const LoginText = CityInfo.extend`
    font-size: 2em;
`

export const PostTitle = styled.p`
    font-weight: 600;
`


export default { CityInfo, Href, LoginText, PostTitle }