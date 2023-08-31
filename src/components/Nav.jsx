import React, {useState} from 'react'
import { CgMenu } from 'react-icons/cg'
import {IoCloseCircleOutline} from 'react-icons/io5';
import MainButton from './Buttons/MainButton'
import logo from '../assets/images/logo.png'
import styled from 'styled-components'
import { device } from '../breakpoint'
import hero from '../assets/images/hero.png'
//import 'reactjs-popup/dist/index.css';

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
        <a href='/' ><img alt='CardanoGPT logo' src={logo}/></a>
        <ul className='navlist-pc'>
            <li><a href='#solutions'>Solutions</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#ecosystem'>Ecosystem</a></li>
            <li><a target='__blank' href='https://docs.cardanogpt.ai/' >Docs</a></li>
        </ul>
        <MainButton target='onTab' className='modal-button' href='https://sale.cardanogpt.ai/' text='Buy CGI' />
        
        <CgMenu onClick={toggleNav} className='menu-button' id='menu' size='4rem' />
        

        <div className={nav? 'navlist navlist-mobile': 'navlist'}>
            <div className='top-mobile'>
                <img alt='CardanoGPT logo' src={logo}/>
                <IoCloseCircleOutline onClick={closeNav} 
                className='menu-button-mobile' id='menu' size='4rem' />
            </div>
            <ul>
                <li onClick={closeNav}><a href='#solutions'>Solutions</a></li>
                <li onClick={closeNav}><a href='#features'>Features</a></li>
                <li onClick={closeNav}><a href='#ecosystem'>Ecosystem</a></li>
                <li onClick={closeNav}><a target='__blank' href='https://docs.cardanogpt.ai/' >Docs</a></li>
            </ul>
            {/* <Popup trigger={<button className='modal-button'>Buy CGI</button>} position="right center" modal>
            <div className='popup'>Coming Soon!!</div>
            </Popup> */}
            <MainButton href='https://sale.cardanogpt.ai/' text='Buy CGI' />
        </div>

    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
    .modal-button {
        border-radius: 8px;
        border: 1px;
        width: 200px;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 13px 24px;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease-in-out;
        background-color: #01CC9C;
        color: #000;
        &:hover 
        { background-color: #3d70c1; 
        border: 3px solid white;
        outline: 3px solid #4287f5;
        }
    }
    .menu-button {
        display: none;
    }
    
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;

    &> .action-button {
        width: 200px;
    }     

    ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            color: white;
            min-width: 35%;
            gap: 0.5rem;
            
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