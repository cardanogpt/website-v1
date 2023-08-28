import React from 'react'
import { styled } from 'styled-components'
import { device } from '../breakpoint'

const Card = ({icon, heading, text, light}) => {
  return (
    <CardContainer className={light? 'light': 'dull'}>
      {
        light?
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 619" fill="none" preserveAspectRatio='none'>
        <path d="M1 1H399V558.991L342.529 618H1V1Z" fill="#D9D9D9" fillOpacity="0.08" stroke="url(#paint0_linear_8_1428)" strokeWidth="2"/>
        <defs>
          <linearGradient id="paint0_linear_8_1428" x1="85.913" y1="447.798" x2="-96.041" y2="47.0578" gradientUnits="userSpaceOnUse">
            <stop stopColor="#01CC9C"/>
            <stop offset="1" stopColor="#324C4E"/>
          </linearGradient>
        </defs>
      </svg> 
      :

      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="555" viewBox="0 0 400 555" fill="none" preserveAspectRatio='none'>
        <path d="M0.528724 0H400V495.777L339.762 555H0L0.528724 0Z" fill="#D9D9D9" fillOpacity="0.08"/>
        <path d="M1.02825 0.5H399.5V495.568L339.557 554.5H0.500477L1.02825 0.5Z" stroke="url(#paint0_linear_8_1441)" strokeOpacity="0.5"/>
        <defs>
          <linearGradient id="paint0_linear_8_1441" x1="86.3278" y1="401.499" x2="-65.1618" y2="29.872" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      }
      <div>
        {icon?<span>{icon}</span>:''}
        <h3 className='waivy'>{heading}</h3>
        <p>{text}</p>
      </div>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    padding: 30px;
    
    //background: rgba(1, 204, 157, 0.1);
    //border: 1px solid ;
    
   /*  &.light {
      border-image: linear-gradient(to left top, #01C496, rgba(1, 204, 157, 0) ) 1;
      background: linear-gradient(138deg, rgba(50, 76, 78, 0) 0%, rgba(1, 204, 157, 0.2) 100%);
    }
    &.dull {
      border-image: linear-gradient(to left top, #fff, rgba(1, 204, 157, 0) ) 1;
      background:rgba(217, 217, 217, 0.08);
    } */
    p {
      font-size: 1.2rem;
      line-height: 1.5;
      white-space: pre-wrap;
    }
    span {
      position: relative;
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

    @media screen and (${device.md}) {
      width: 100%;
      max-width: 100%;
      padding: 30px;
    }
  }
`
