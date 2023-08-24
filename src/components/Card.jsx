import React from 'react'
import { styled } from 'styled-components'
import { device } from '../breakpoint'

const Card = ({icon, heading, text, light}) => {
  return (
    <CardContainer className={light? 'light': 'dull'}>
        {icon?<span>{icon}</span>:''}
        <h3>{heading}</h3>
        <p>{text}</p>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 30px;
  
  //background: rgba(1, 204, 157, 0.1);
  border: 1px solid ;
  position: relative;
  &.light {
    border-image: linear-gradient(to left top, #01C496, rgba(1, 204, 157, 0) ) 1;
    background: linear-gradient(138deg, rgba(50, 76, 78, 0) 0%, rgba(1, 204, 157, 0.2) 100%);
  }
  &.dull {
    border-image: linear-gradient(to left top, #fff, rgba(1, 204, 157, 0) ) 1;
    background:rgba(217, 217, 217, 0.08);
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 20px;
    background: rgba(1, 202, 155, 0.13);
    color: #00a881;
    opacity: 0.7;
  }
  h3 {
    font-family: 'Space Grotesk', sans-serif;
    margin: 1.5rem 0;
    font-size: 2rem;
  }
 /*  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 16px 16px 0;
    border-style: solid;
    border-color: rgba(1, 204, 157, 0.2) #19202B;
    display: block;
    width: 0;
  } */

  @media screen and (${device.lg}) {
    width: 100%;
    max-width: 100%;
  }
`
