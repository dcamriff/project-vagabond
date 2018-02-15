import styled from 'styled-components'


export const FormWrapper = styled.div`
overflow: hidden;
margin: 48px auto 0;
width: 45vw;
height: 20vh;
font-family: Quicksand, arial, sans-serif;
// background-color: #1b1b1b;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  
`

export const FormHeader = styled.header`
padding-top: 32px;
padding-bottom: 32px;
`

export const FormHeading = styled.p`
font-size: 24px;
font-weight: bold;
text-align: center;
color: white;
`
export const FormBody = styled.form`
display: flex;
flex-direction: column;
padding-right: 10px;
padding-left: 10px;
`
export const FormField = styled.fieldset`
position: relative;
padding: 0;
margin-top: 1px;
border: 0;

&:last-of-type {
  text-align: center;
  }
`

export const ButtonContainer = styled.div`
display: flex;
`

export const FormInput = styled.input`
display: grid;
padding: 3px 0;
margin-top: 2px;
width: 33%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color .25s ease-in;

&:focus {
  border-bottom-color: #ff9a00;
  outline: 0;
}
`

export const FormButton = styled.button`
font-family: inherit;
font-size: 24px;
font-weight: 700;
color: #1b1b1b;
border: 0;
background-color: rgba(0,0, 0,  0.01);
cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
  a{
      text-decoration: none;
      color: white;
  }
`
export const FormInputButton = styled.input`


font-family: inherit;
font-size: 20px;
font-weight: 700;
color: #1b1b1b;
background-color: rgba(0,0, 0,  0.01);
border: 0;
cursor: pointer;
transition: all .25s cubic-bezier(.02, .01, .47, 1);
&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
  transform: translate(0, -5px);
}
`


export const TextArea = styled.textarea`
width: 100%;
height: 45%;
`

export const InputAndButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

// USER FORM STYLES - CONSIDER CREATING NEW STYLED COMPONENT FOR THESE
export const GlobalFormInputButton = styled.input`

font-family: inherit;
font-size: 20px;
font-weight: 700;
color: #fff;
background-color: rgba(0,0, 0,  0.01);
border: 0;
cursor: pointer;
transition: all .25s cubic-bezier(.02, .01, .47, 1);
&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
  transform: translate(0, -5px);
}
`
export const LoginWrapper = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: center;
width: 100vw;
height: 60vh;
background-color: #1b1b1b;


`

export const UserFormBody = styled.div`
/* display: flex;
flex-direction: column;
justify-content: center; */
align-items: center;
padding-right: 10px;
padding-left: 10px;
background-color: #1b1b1b;
    
`

export const UserFormWrapper = styled.div`
overflow: hidden;
justify-content: center;
align-items: center;
margin: 48px auto 0;
  
font-family: Quicksand, arial, sans-serif;
background-color: #1b1b1b;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08); 
`

export const UserFormHeader = styled.header`
padding-top: 32px;
padding-bottom: 32px;
display: flex;
justify-content: center;
align-items: center;
font-size: 3em;
color: white;
`

export const UserFormInput = styled.input`
display: grid;
padding: 3px 0;
margin-top: 2px;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color .25s ease-in;

&:focus {
  border-bottom-color: #ff9a00;
  outline: 0;
}
`

export default {
    InputAndButtonContainer, 
    ButtonContainer, 
    FormWrapper, 
    FormHeader, 
    FormHeading, 
    FormBody, 
    FormField, 
    FormInput, 
    FormButton, 
    FormInputButton, 
    TextArea,
    UserFormWrapper,
    UserFormBody,
    GlobalFormInputButton,
    LoginWrapper
}