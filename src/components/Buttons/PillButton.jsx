import React from 'react'
import { styled } from 'styled-components'
import { device } from '../../breakpoint'

const PillButton = (props) => {
  return (
    <Button href={props.href} target='__blank' className={props.centerDark? 'center-dark': ''}>
        {props.text}
    </Button>
  )
}

export default PillButton

const Button = styled.a`
    
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    width: 23rem;
    padding: 13px 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in-out;
    font-family: 'Space Grotesk';
    text-align: left;
    color:white;
    border-radius: 12px;
    border: 1px solid #01C496;
    background: rgba(25, 32, 43, 0.10);

    &.center-dark {
      text-align: center;
      background: #000;
    }
  @media screen and (${device.sm}) {
    width: 100%;
  }
`