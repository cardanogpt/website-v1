import React from 'react'
import { styled } from 'styled-components'

const MainButton = (props) => {
  return (
    <Button to={props.to} target={props.target? '__blank' : ''} className={`action-button ${props.secondary? 'secondary': 'primary'} `} >
        {props.text}
    </Button>
  )
}

export default MainButton


const Button = styled.a`

    border-radius: 8px;
    border: 1px;
    width: 250px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 13px 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in-out;
    &.primary {
      background-color: #01CC9C;
      color: #000;
      &:hover 
      { background-color: #3d70c1; 
        border: 3px solid white;
        outline: 3px solid #4287f5;
      }
    }
    &.secondary {
      background-color: transparent; color: #fff ; border: 1px double #01C496;
      &:hover 
      { background-color: #000; color: #fff; }
      
    }
`