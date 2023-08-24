import React, {useState} from 'react'
import { CgMenu } from 'react-icons/cg'
import {IoCloseCircleOutline} from 'react-icons/io5';
import MainButton from './MainButton'
import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { device } from '../../breakpoint'
import hero from '../../assets/images/hero.png'

const Nav = () => {
    const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <NavBar>
        <img alt='CardanoGPT logo' src={logo}/>
        <ul className='navlist-pc'>
            <li>Solutions</li>
            <li>Feautures</li>
            <li>Ecosystem</li>
            <li><a target='__blank' href='https://docs.cardanogpt.ai/' >Docs</a></li>
        </ul>
        <MainButton top text='Buy CGI'/>
        <CgMenu onClick={toggleNav} className='menu-button' id='menu' size='4rem' />
        
        <div className={nav? 'navlist navlist-mobile': 'navlist'}>
            <div className='top-mobile'>
                <img alt='CardanoGPT logo' src={logo}/>
                <IoCloseCircleOutline onClick={closeNav} 
                className='menu-button-mobile' id='menu' size='4rem' />
            </div>
            <ul>
                <li onClick={closeNav}>Solutions</li>
                <li onClick={closeNav}>Feautures</li>
                <li onClick={closeNav}>Ecosystem</li>
                <li onClick={closeNav}><a target='__blank' href='https://docs.cardanogpt.ai/' >Docs</a></li>
            </ul>
            <MainButton text='Buy CGI'/>
        </div>

    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
    .menu-button {
        display: none;
    }
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;

            

    ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            color: white;
            width: 35%;
            
    }
    .navlist-mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #19202B;
        background-image: url(${hero});
        display: flex;
        flex-direction: column;
        z-index: 100;
        padding: 2%;
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: start;
            margin: 2rem 0;
        }
        li {
            margin: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .action-button {
            display: inline-block;
            width: 70%;
            text-align: center;
        }
    }
    .navlist {
        display: none;
    }
    .top-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    @media screen and (${device.md}) {
        .menu-button {
            display: flex;

        }
        .navlist-mobile {
            display: block;
        }
        &> .action-button {
            display: none;
        }
    }
`