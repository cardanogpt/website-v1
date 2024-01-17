import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.png'
import logo from '../assets/images/logo.png'
import robot from '../assets/images/robot.png'
import token from '../assets/images/token_background.png'
import bitcoin from '../assets/images/bitcoinist.png'
import business from '../assets/images/business_Insider_logo.png'
import cryptoslate from '../assets/images/cryptoslate.png'
import utoday from '../assets/images/utoday.png'
import dailyhodl from '../assets/images/dailyhodl.png'
import foreon from '../assets/images/foreon.png'
import MainButton from '../components/Buttons/MainButton';
import PillButton from '../components/Buttons/PillButton';
import { styled } from 'styled-components';
import Card from '../components/Card';
import {FaRobot, FaTools, FaTwitter, FaDiscord} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
import {LuKey} from 'react-icons/lu';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiGitbook} from 'react-icons/si';
//import PopupButton from '../components/Buttons/PopupButton';


import { device } from '../breakpoint'
import Nav from '../components/Nav'


const Home = () => {
  return (
    <div>
        <Header>
            <Hero>
                <div className="circle-two"></div>
                <div className="hero-content">
                    <Nav/>
                    <div className='hero-text'>
                        <h1 className="hero-heading waivy">
                            CardanoGPT, harnessing the potential of AI to drive web3 initiatives and communities forward
                        </h1>
                        <h3 className="hero-subheading waivy">
                            {/* Exclusive AI features for CGI holders on the CardanoGPT DApp */}
                        </h3>
                        <div className="hero-button">
                            <MainButton target to='/discord' text='Join Discord'/>
                            <MainButton target to='/buy' text='Buy CGI' secondary />
                        </div>
                    </div>
                </div>
            </Hero>
        </Header>
        <Showcase className="showcases" id='solutions'>
            <div className="circle"></div>
            <div className="showcase">
                <h1 className='waivy'>Our Solutions</h1>
                <p>At CardanoGPT, our mission is to deploy AI-driven tools that elevate the performance and catalyze overall productivity.</p>
            </div>
            <div className="showcase_img">
                <img alt='' src={robot}/>
            </div>
        </Showcase>

        <Features id='features'>
            <div className='content'>
                <div className='features-heading waivy'>
                    <h1>Features</h1>
                    <span></span>
                </div>

                <div className="feature-list">
                    <Card
                        light  
                        heading={'CardanoGPT General Knowledge Chatbot'}
                        text={"Holders with the required amount CGI tokens have an exclusive access to CardanoGPT’s internet-enabled general knowledge chatbot, Girolamo, A valuable resource for information and research."}
                        linkText={"Learn More"}
                        link={"https://medium.com/@cardanogpt/cardanogpt-has-successfully-deployed-its-generative-discord-chatbot-girolamo-on-beta-66454eef6b3a"}
                        />
                    <Card
                    icon={<FaRobot size='3rem' />}
                    heading={'Custom Bot Development'}
                    text={"CardanoGPT empowers projects and businesses with the ability to utilize custom AI powered chatbots tailored to their specific needs. Whether it's for community management on social platforms, automated customer support, or data analysis, we offers a comprehensive suite of AI tools across every social platform."}
                    linkText={"Learn More"}
                    link={"https://docs.cardanogpt.ai/custom-bot-development"}
                    />
                    <Card
                    icon={<LuKey size='3rem' />}
                    heading={'X Chatbot'}
                    text={"AskGirolamo, CardanoGPT's X chat and reply bot, is your real-time companion for all things Cardano. AskGirolamo provides instant responses to queries about Cardano and it's ecosystem developments on X.\nStay informed and receive timely updates on Cardano without leaving your X feed."}
                    linkText={"Learn More"}
                    link={"https://medium.com/@cardanogpt/cardanogpt-successfully-launches-the-first-internet-enabled-cardano-focused-chatbot-on-x-72f4fb3ef0eb"}
                    />
                </div>
                <Hr className='hr'/>
            </div>
        </Features>

    

        <FeaturesII className="features-2" id='ecosystem'>
            <div className='text'>
              <h1 className='feature-2-heading'><span className='green'>CardanoGPT</span><span className='waivy'>Ecosystem</span></h1>
              <p>At the heart of cardanoGPT ecosystem is the $CGI token,the utility token and key to accessing the marvels of the cardanoGPT Al products and our inclusive DAO.</p>
            </div>
            <div className="feature-2-list">
                <div className='flex-center'>
                    <Card className='standalone'  
                        heading={'Providing Liquidity and Farming CGI'}
                        text={"CardanoGPT offers users the opportunity to participate in decentralized finance (DeFi) activities. By providing liquidity to the CGI token liquidity pool and engaging in yield farming, users can earn rewards while supporting CGI token liquidity."}
                        linkText={"Farm CGI on Wingriders"}
                        link={"https://app.wingriders.com/pools/026a18d04a0c642759bb3d83b12e3344894e5c1c7b2aeb1a2113a570c4e6e6bdef1478db5a455bf62a5abbe33a35d5632265ad15c81b383bf93df219?graph=tvl"}
                        />
                </div>
                <div className='flex'>
                    <Card
                        icon={<FaTools size='3rem' />}
                        heading={'General Knowledge Discord ChatBot'}
                        text={"Inspired by the Italian physicist Girolamo Cardano, CardanoGPT internet-enabled general knowledge Chatbot Girolamo, is a treasure trove of information which operates similarly to ChatGPT-4. Girolamo provides real-time answers to wide range of questions, generates ultra realistic images, and gives a well thought description when asked to interpret an image.\nEnjoy the convenience of an AI-powered information resource right from Discord."}
                        linkText={"Join Girolamo Beta Testers"}
                        link={"https://discord.gg/Ah5A3XsDW7"}
                        />
                    <Card  
                        heading={'Governance & Decision-Making'}
                        text={"CGI token holders have the power to participate in the governance of CardanoGPT ecosystem. DAO members can propose and vote on changes, upgrades, and make strategic decisions. This feature ensures that the community plays an active role in shaping the CardanoGPT’s future direction."}
                        />
                    </div>
                </div>
        </FeaturesII>

        <Hero className='showcase2'>
            <div className="hero-content2">
                <h1 className='waivy'>&#x24;CGI Token</h1>
                <h2>Powering the CardanoGPT Ecosystem</h2>

                <div className="info">
                    <div className="details">
                        <h3 className='headings-details'>Token Details</h3>
                        <div className='buttons'>
                            <PillButton text={'Token Name: CARDANOGPT'}/>
                            <PillButton text={'Ticker:   CGI'} />
                            <PillButton text={'CGI Total Supply: 5,000,000'} />
                            <PillButton text={'Blockchain: Cardano'} />
                            <PillButton text={'Policy ID: 2d587111358801114f04df83dc0015de0a740b462b75cce5170fc935 '} />
                        </div>
                    </div>
                    <div className="dist">
                        <h3 className='headings-details'>Token Distribution</h3>
                        <div className='buttons'>
                            <PillButton text={'Airdrop: 6%'} />
                            <PillButton text={'Private Sale: 20%'} />
                            <PillButton text={'Presale: 7.2%'} />
                            <PillButton text={'Dex Liquidity: 6.8%'} />
                            <PillButton text={'Farming Rewards: 20%'} />
                            <PillButton text={'Research & Development (R&D): 14%'} />
                            <PillButton text={'Marketing: 10%'} />
                            <PillButton text={'Reserve: 6%'} />
                            <PillButton text={'Team & Partnerships: 10%'} />
                            <PillButton text={'Burnt $CGI: 5 Million'} />
                        </div>
                    </div>
                </div>
                <PillButton target to='/tokenomics' centerDark text={'Dive into our Tokenomics'} />
            </div>
            
            

        </Hero>

        <Media>
            <h2 className="media-heading waivy">
                On The Media
            </h2>
            <div className='img-container'>
                <a target='__blank' href='https://bitcoinist.com/top-5-cardano-projects-to-look-out-for-in-2023/'>
                    <img alt='bitcoinist logo' src={bitcoin} />
                </a>
                <a target='__blank' href='https://markets.businessinsider.com/news/stocks/cardanogpt-an-innovative-cardano-project-looking-to-utilize-artificial-intelligence-to-increase-productivity-cardano-projects-1032531384'>
                    <img alt='business insider logo' src={business} />
                </a>
                <a target='__blank' href='https://cryptoslate.com/cardano-enters-beta-test-phase-for-new-blockchain-based-ai-chat-bot-girolamo/'>
                    <img alt='cryptoslate logo' src={cryptoslate} />
                </a>
                <a target='__blank' href='https://u.today/cardano-makes-ai-progress-with-first-internet-generative-chatbot'>
                    <img alt='u-today logo' src={utoday} />
                </a>
                <a target='__blank' href='https://dailyhodl.com/2023/11/27/new-artificial-intelligence-ai-powered-chatbot-girolamo-launches-beta-phase-on-cardano-blockchain/'>
                    <img alt='dailyhodl logo' src={dailyhodl} />
                </a>
            </div>
            <h2 className='waivy'>Partners</h2>
            <a target='__blank' href='https://foreon.network/'>
                <img alt='foreon logo' src={foreon} />
            </a>
        </Media>

        <Footer>
            <div className="hero-content">
                <div className='section'>
                    <h2 className='waivy'>Support & Contact</h2>
                    <p>Got Queries? Explore our <a target='__blank' href='https://docs.cardanogpt.ai/' >Documentation</a></p>
                    <p>For bespoke? AI tools development, kindly reach us at</p>
                    <PillButton to='mailto:Contact@cardanogpt.ai' centerDark text={'Contact@cardanogpt.ai'} />
                    
                </div>
                <div >
                    <hr />
                    <nav>
                        <img src={logo} alt='logo'/>
                        <ul>
                            <li>
                                <Link target='__blank' to='/learn'> Learn The Concept</Link>
                            </li>
                            <li>
                                <Link target='__blank' to='/docs'> Documentation</Link>
                            </li>
                            <li>
                                <Link target='__blank' to='/disclaimer'> Disclaimer</Link>
                            </li>
                            <li>
                                <Link target='__blank' to='/blog'> Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                </div>
                <div className='copy-section'>
                    {/*copyright*/}
                    <p>&copy; 2023 CardanoGPT. All Rights Reserved</p>
                    <div className="icons">
                        <a target='__blank' href='https://medium.com/@cardanogpt'> <BsMedium /> </a>
                        <a target='__blank' href='https://docs.cardanogpt.ai/' ><SiGitbook /></a>
                        <a target='__blank' href='https://twitter.com/replyada'> <FaTwitter /></a>
                        <a target='__blank' href='https://t.me/cardanogptcommunity'> <BiLogoTelegram /></a>
                        <a target='__blank' href='https://discord.gg/7mAMbRg7VR'> <FaDiscord /></a>
                    </div>
                </div>
            </div>
        </Footer>


            
    </div>
  )
}

export default Home;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    min-height: 37rem;
    height: 100%;
    background-image: url(../assets/images/hero.png);

    .circle-two {
        position: absolute;
        width: 50%;
        height: 50%;
        border-radius: 20px;
        background: linear-gradient(180deg, rgba(0, 255, 214, 0.50) 0%, rgba(1, 204, 156, 0.32) 100%);
        filter: blur(200px);
        transform: translate(-50%, -50%);
        top: 10%;
        left: 90vw;
    }
    @media screen and (${device.md}) {
        min-height: 60rem;
        
    }
    
    
`


const Hero = styled.div`
    display:flex;
    background: url(${hero});
    max-height: fit-content;
    height: 100%;
    min-height: 37rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    
    .buy {
        color: #000;
    }
    
    .hero-content{
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        position: absolute;
        color: white;
        width:100%;
        min-height: 100vh;
    }
    
    .hero-text {
        margin-top: 5rem;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    h3 {
        margin: 2rem 0;
    }
    h1{
        font-family: 'Space Grotesk', sans-serif;
        font-size: 3.5rem;
        line-height: 1.5;
    }
    .hero-button {
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        .popup-button {
            border-radius: 8px;
            border: 1px;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 13px 24px;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease-in-out;
            background-color: transparent; color: #fff ; border: 1px double #01C496;
            &:hover 
            { background-color: #000; color: #fff; }
            
        }
        
    }
    &.showcase2 {
        background: url(${token});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        min-height: 100vh;
        padding:2rem 0;
        
        .hero-content2 {
            margin: 0 auto;
            text-align: center;
        }
      

        text-align: left;
        h1,h2,h3 {
            margin-bottom: 30px;
        }
        h2 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
        .details, .dist, .buttons {
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            
        }
        

    }

    .info {
        display: flex;
        gap: 4rem;
        margin: 2rem 0;
    }
    
    
    @media screen and (max-width:1200px) {
        .circle-two {
            display: none;
        }
    }
    @media screen and (${device.md}) {
        .navlist-pc{
            display: none;
        }
        .hero-content2 {
            margin: 0;
            width: 80%;
        }
        .hero-button {
            flex-direction: column;
        }
        .info {
            flex-direction: column;
        }
        h1 {
            font-size: 3rem;
        }
        .hero-button .action-button, .hero-button .popup-button {
                width: 80%;
        }
        
        
        
    }
    @media screen and (${device.sm}) {
        h1 {
            font-size: 2.5rem;
        }
        
    }
`

const Showcase = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 0;
    overflow-x: hidden;
    .circle{
        position: absolute;
        width: 50%;
        height: 50%;
        border-radius: 20px;
        background: linear-gradient(180deg, rgba(0, 255, 214, 0.50) 0%, rgba(1, 204, 156, 0.32) 100%);
        filter: blur(300px);
        transform: translate(-50%, -50%);
    }
    
    .circle {
        top: 270vh;
        left: 0%;
    }
    
    .showcase {
        margin: 0 5%;
        line-height: 1.5;
        font-size: 1.2rem;
        width: 50%;
        h2 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 3rem;
        }
    }
    .showcase_img {
        width: 70%;
        img {
            width: 100%;
            float: right;
            filter: grayscale(100%);
        }
    }
    @media screen and (${device.md}) {
        flex-direction: column;
        padding: 0;
        .showcase {
            width: 100%;
            margin: 0;
            padding: 1rem;
            align-self: self-start;
            
        }
        .circle-two { 
            display: none;
        }
        .showcase_img {
            width: 100%;
        }
        h1 {
            font-size: 3rem;
        }
    }
`

const Hr = styled.hr`
    margin: 5rem 0;
`

const Features = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
    }
    
    .features-heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0; 
        span {
            max-width: 20rem;
            width: 100%;
            height: 15px;
            color: #fff;
            border-radius: 20px;
            background: linear-gradient(138deg, #01CC9C 0%, rgba(1, 204, 156, 0.00) 100%);
            
        }
    }
    .feature-list {
        display: flex;
        justify-content: space-around;
        gap:2rem;
        & > * {
            flex: 1;
        }

    }
    @media screen and (${device.md}) {
        .feature-list {
            flex-direction: column;
            gap: 2rem;
        }
        
        h1 {
            font-size: 3rem;
        }
    }
`
const FeaturesII = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    margin:0 4rem ;
    .text {
        width: 30%;
    }
    .standalone {
        align-self: center;
        height: 50%;
    }
    .flex-center {
        display: flex;
        align-items: center;
    }
    
    .feature-2-heading {margin:1.5rem 0;}
    .feature-2-heading .green {
        display: block;
        color: #01CC9C;
    }
    .feature-2-list {
        display: flex;
        gap:3rem;
        flex-basis: 1;
        margin-bottom: 3rem;
        & > * {
            flex: 1;
        }
        .flex {
            display: flex;
            flex-direction: column;
            gap:3rem;
            & > * {
                flex: 1;
            }
        }
    }

    
    @media screen and (${device.lg}) {
        h1 {
            font-size: 3rem;
        }
    }
    @media screen and (${device.md}) {
        flex-direction: column;
        margin:0 2rem;
        .text {
            width: 100%;
        }
        .feature-2-list {
            flex-direction: column-reverse;
            gap: 2rem;
        }
        
    }
    @media screen and (${device.sm}) {
        h1 {
            font-size: 2rem;
        }
    }
`

const Media = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    margin: 2rem 0;
    h2 {
        margin-bottom: 2rem;
    }
    div {
        display: flex;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        margin-bottom: 5rem;
    }
    .img-container {
        display: flex;
        flex-wrap: wrap;
    }
    
    img {
        max-width: 100%;
    }
    a {
        min-width: 200px;
        flex: 1;
        width: 100%;
        
    }
    @media screen and (${device.md}) {
        .img-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        a {
            width: 45%;
        }
        }
        
    }
    @media screen and (${device.xs}) {
        .img-container {
            flex-direction: column;
        }
    }
`

const Footer = styled.footer`
    display:flex;
    background: url(${token});
    min-height:100vh;
    height: 50rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1%;
        }
        ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: white;
        width: 55%;
        
    }
    .hero-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width:80%;
        height: 100%;

        .section {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 40%;
        }
        hr {
            background: rgba(255, 255, 255, 0.048);
        }
        nav {
            gap: 2rem;
            margin: 20px 0;
        }
        
        .copy-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            width: 100%;
        }
        
    }
    .icons {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        & > * {
            font-size: 1.5rem;
            border: 1px solid #01C496;
            width: 2rem;
            height: 2rem;
            padding: 0.2rem 0.2rem;
            border-radius: 50%;
            color: #fff;
        }
    }

    @media screen and (${device.md}) {
        min-height: 60rem;
        nav, .copy-section {
            flex-direction: column-reverse;
            
        }
        nav ul {
            width: 100%;
        }
        .copy-section p {
            margin-top: 10%;
        }
        nav img {
            align-self: self-start;
        }
        .icons {
            margin-top: 2rem;
            min-width: 100%;
            gap: 0;
        }
        .hero-content {
            width: 80%;
        }
        ul {
            margin:1rem 0;
            display: flex;
            flex-direction: column;
            text-align: left;
            align-self: self-start;
            gap: 2rem;
        }
    }
`
