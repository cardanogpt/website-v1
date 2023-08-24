import React from 'react'
import hero from '../assets/images/hero.png'
import logo from '../assets/images/logo.png'
import robot from '../assets/images/robot.png'
import token from '../assets/images/token_background.png'
import bitcoin from '../assets/images/bitcoinist.png'
import business from '../assets/images/business_Insider_logo.png'
import foreon from '../assets/images/foreon.png'
import MainButton from '../components/Buttons/MainButton';
import PillButton from '../components/Buttons/PillButton';
import { styled } from 'styled-components';
import Card from '../components/Card';
import {FaRobot, FaTools, FaTwitter, FaGithub, FaDiscord} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
import {LuKey} from 'react-icons/lu';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiGitbook} from 'react-icons/si';

import { device } from '../breakpoint'
import Nav from '../components/Buttons/Nav'


const Home = () => {
  return (
    <div>
        <Header>
            <Hero>
                <div className="circle-two"></div>
                <div className="hero-content">
                    <Nav/>
                    <div className='hero-text'>
                        <h1 className="hero-heading">
                            CardanoGPT, harnessing the potential of AI to drive web3 initiatives and communities forward
                        </h1>
                        <h3 className="hero-subheading">
                            Exclusive AI features for CGI holders on the CardanoGPT DApp
                        </h3>
                        <div className="hero-button">
                            <MainButton href='https://discord.gg/7mAMbRg7VR' text='Join Discord'/>
                            <MainButton text='Join CGI Presale' secondary />
                        </div>
                    </div>
                </div>
            </Hero>
        </Header>
        <Showcase className="showcases">
            <div className="circle"></div>
            <div className="showcase">
                <h1>Our Solutons</h1>
                <p>At CardanoGPT, our mission is to deploy AI-driven tools that elevate the performance and catalyze productivity of Cardano Projects</p>
            </div>
            <div className="showcase_img">
                <img alt='logo' src={robot}/>
            </div>
        </Showcase>

        <Features>
            <div className='content'>
                <div className='features-heading'>
                    <h1>Features</h1>
                    <span></span>
                </div>

                <div className="feature-list">
                    <Card light
                    icon={<FaRobot size='3rem' />}
                    heading={'Custom AI Bots'}
                    text={"CardanoGPT is pioneering a new era in the crypto social space with tailor-made Al bots for platforms like Twitter, Telegram, and Discord.\nTrained on specific datasets, these bots serve as community moderator, central hubs for information, providing instantaneous support wherever they're deployed."}
                    />
                    <Card
                    icon={<LuKey size='3rem' />}
                    heading={'SDK & API Access'}
                    text={"For developers and enterprises, Our API & SDK opens doors to integrating specific CardanoGPT Al functionalities or constructing of new applications atop our Al model.\nIt's a shortcut to the prowess of an advanced Al like CardanoGPT, eliminating the need to train one from the ground up"}
                    />
                    <Card
                    icon={<FaTools size='3rem' />}
                    heading={'Access to AI products'}
                    text={"As a CGI holder, immerse yourself in our comprehensive DApp, boasting Al-driven tools such as smart contract generator & auditor, code writer, contents & arts generator and more"}
                    />
                </div>
                <Hr className='hr'/>
            </div>
        </Features>

    

        <FeaturesII className="features-2">
            <div className='text'>
              <h1 className='feature-2-heading'><span>CardanoGPT</span>Ecosystem</h1>
              <p>At the heart of cardanoGPT ecosystem is the $CGI token, which is the utility token and key to accessing the marvels of the cardanoGPT Al model, API access, and our inclusive DAO</p>
            </div>
            <div className="feature-2-list">
                <div className='flex-center'>
                    <Card className='standalone'  
                        heading={'Staking & Farming'}
                        text={"Holder can stake their CGI tokens and unlock a treasure trove of perks: from access to CardanoGPT DApp, Launchpad and a voice in the DAO."}
                        />
                </div>
                <div className='flex'>
                    <Card  
                        heading={'CardanoGPT launchpad'}
                        text={"CGI holders can stake their tokens and get guaranteed allocation to participate in upcoming IDOs on the cardanoGPT launchpad."}
                        />
                    <Card  
                        heading={'DAO Voting'}
                        text={"Democracy thrives in the CardanoGPT ecosystem. $CGI holders wield the power to shape the future of cardanoGPT through our DAO: propose, vote, and channel resources."}
                        />
                    </div>
                </div>
        </FeaturesII>

        <Hero className='showcase2'>
            <div className="hero-content2">
                <h1>&#x24;CGI Token</h1>
                <h2>Powering the CardanoGPT Ecosystem</h2>

                <div className="info">
                    <div className="details">
                        <h3 className='headings-details'>Token Details:</h3>
                        <div className='buttons'>
                            <PillButton text={'Token Name: CARDANOGPT'}/>
                            <PillButton text={'Ticker:   CGI'} />
                            <PillButton text={'CGI Total Supply: 10,000,000'} />
                            <PillButton text={'Blockchain: Cardano'} />
                        </div>
                    </div>
                    <div className="dist">
                        <h3 className='headings-details'>Token Distribution:</h3>
                        <div className='buttons'>
                            <PillButton text={'Team & Advisors: 9%'} />
                            <PillButton text={'Airdrop: 3%'} />
                            <PillButton text={'Private Sale: 10%'} />
                            <PillButton text={'Presale: 25%'} />
                            <PillButton text={'Liquidity: 18.7%'} />
                            <PillButton text={'Staking & Farming Rewards: 20.3%'} />
                            <PillButton text={'Further Research & Development: 14%'} />
                        
                        </div>
                    </div>
                </div>
                <PillButton centerDark text={'Dive into our Tokenomics'} />
            </div>
            
            

        </Hero>

        <Media>
            <h3 className="media-heading">
                On The Media
            </h3>
            <div className='img-container'>
                <a target='__blank' href='https://bitcoinist.com/cardanogpt-launches-ai-powered-tools-to-increase-productivity-of-cardano-projects-launches-cgi-private-round-whitelist/'>
                    <img alt='bitcoinist logo' src={bitcoin} />
                </a>
                <a target='__blank' href='https://markets.businessinsider.com/news/stocks/cardanogpt-an-innovative-cardano-project-looking-to-utilize-artificial-intelligence-to-increase-productivity-cardano-projects-1032531384'>
                    <img alt='business insider logo' src={business} />
                </a>
            </div>
                <h3>Partners</h3>
                <img alt='foreon logo' src={foreon} />
        </Media>

        <Footer>
            <div className="hero-content">
                <div className='section'>
                    <h2>Support & Contact</h2>
                    <p>Got Queries? Explore our Documentation</p>
                    <p>For bespoke? AI tools development, kindly reach us at:</p>
                    <PillButton centerDark text={'Contact@cardanogpt.ai'} />
                    
                </div>
                <div >
                    <hr />
                    <nav>
                        <img src={logo} alt='logo'/>
                        <ul>
                            <li>
                                <a target='__blank' href='https://docs.cardanogpt.ai/learn-the-concepts'> Learn The Concept</a>
                            </li>
                            <li>
                                <a target='__blank' href='https://docs.cardanogpt.ai/'> Documentation</a>
                            </li>
                            <li>
                                <a target='__blank' href='https://docs.cardanogpt.ai/disclaimer'> Disclaimer</a>
                            </li>
                            <li>
                                <a target='__blank' href='https://medium.com/@cardanogpt'> Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                </div>
                <div className='copy-section'>
                    {/*copyright*/}
                    <p>&copy; 2023 CardanoGPT. All Rights Reserved</p>
                    <div className="icons">
                        <a target='__blank' href='https://docs.cardanogpt.ai/' ><FaGithub /></a>
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
    }
    &.showcase2 {
        background: url(${token});
        max-height: fit-content;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        min-height: 100vh;
        height: 60rem;
        
        .hero-content, .hero-content2 {
            text-align: center;
            position: absolute;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
        .hero-content {
            margin: 40% 0;
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
        min-height: 60rem;

        &.showcase2 {
            min-height: 90rem;
        }
        h1 {
            font-size: 3rem;
        }
        
        
        
    }
    @media screen and (max-width:1200px) {
        .circle-two {
            display: none;
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
            padding-left: 1rem;
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
    .flex-center p, .flex p {
        margin-bottom: 7rem;
    }
    .feature-2-heading {margin:1.5rem 0;}
    .feature-2-heading span {
        display: block;
        color: #01CC9C;
    }
    .feature-2-list {
        display: flex;
        gap:3rem;
        flex-basis: 1;
        margin-bottom: 3rem;

        .flex {
            display: flex;
            flex-direction: column;
            gap:3rem;
        }
    }

    @media screen and (${device.md}) {
        flex-direction: column;
        margin:0 2rem;
        .text {
            width: 100%;
        }
        .feature-2-list {
            flex-direction: column;
            gap: 2rem;
        }
        
    }
    @media screen and (${device.lg}) {
        h1 {
            font-size: 3rem;
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
    min-height: 100vh;
    margin: 2rem 0;
    h3 {
        font-size: 3rem
    }
    div {
        display: flex;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
    }
    .img-container {
        display: flex;
        
    }
    
    img {
        max-width: 100%;
    }
    a {
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
        margin:0 1rem;
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
        min-height: 50rem;
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
