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
import {CgMenu} from 'react-icons/cg';

import { device } from '../breakpoint'


const Home = () => {
  return (
    <div>
        <Header>
            <Hero>
                <div className="circle-two"></div>
                <div className="hero-content">
                    <nav>
                        <img alt='CardanoGPT logo' src={logo}/>
                        <ul className='navlist'>
                            <li>Solutions</li>
                            <li>Feautures</li>
                            <li>Ecosystem</li>
                            <li>Docs</li>
                        </ul>
                        <MainButton text='Buy CGI'/>
                        <CgMenu className='menu-button' size='2rem' />
                    </nav>
                    <div className='hero-text'>
                        <h1 className="hero-heading">
                            CardanoGPT, harnessing the potential of AI to drive web3 initiatives and communities forward
                        </h1>
                        <h3 className="hero-subheading">
                            Exclusive AI features for CGI holders on the CardanoGPT DApp
                        </h3>
                        <div className="hero-button">
                            <MainButton text='Join Discord'/>
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
                    <Card
                    icon={<FaRobot size='3rem' />}
                    heading={'Custom AI Bots'}
                    text={"CardanoGPT is pioneering a new era in the crypto social space with tailor-made Al bots for platforms like Twitter, Telegram, and Discord.<br/>                Trained on specific datasets, these bots serve as community moderator, central hubs for information, providing instantaneous support wherever they're deployed."}
                    />
                    <Card
                    icon={<LuKey size='3rem' />}
                    heading={'SDK & API Access'}
                    text={"For developers and enterprises, Our API & SDK opens doors to integrating specific CardanoGPT Al functionalities or constructing of new applications atop our Al model. <br/> It's a shortcut to the prowess of an advanced Al like CardanoGPT, eliminating the need to train one from the ground up"}
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
              <h1 className='feature-2-heading'>CardanoGPT Ecosystem</h1>
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
            <div>
                <img alt='bitcoinist logo' src={bitcoin} />
                <img alt='business insider logo' src={business} />
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
                            <li>Learn The Concept</li>
                            <li>Documentaion</li>
                            <li>Disclaimer</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <hr />
                </div>
                <div className='copy-section'>
                    {/*copyright*/}
                    <p>&copy; 2023 CardanoGPT. All Rights Reserved</p>
                    <div className="icons">
                        <FaGithub />
                        <BsMedium />
                        <SiGitbook />
                        <FaTwitter />
                        <BiLogoTelegram />
                        <FaDiscord />
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
    min-height: 100vh;
    background-Image: url(../assets/images/hero.png);

    
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
    
`


const Hero = styled.div`
    display:flex;
    background: url(${hero});
    min-height:100vh;
    max-height: fit-content;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    nav {
        width: 95%;
        .menu-button {
            display: none;
        }
        @media screen and (${device.md}) {
            .navlist, .action-button {
                display: none;
            }
            .menu-buttton {
                display: block;
            }
            
        }
        
    }
    .hero-content{
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        height:170vh;
        max-height: fit-content;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
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
            
            
        }
        button {
            margin: 10px;
        }

    }

    .info {
        display: flex;
        gap: 4rem;
    }

    @media screen and (${device.md}) {
        .hero-content2 {
            margin: 0;
            width: 80%;
            margin: 0 10px;
        }
        .hero-button {
            flex-direction: column;
            .action-button {
                display: block;
            }
        }
        .info {
            flex-direction: column;
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
            padding-left: 3rem;
            align-self: self-start;
            
        }
        .circle-two { 
            display: none;
        }
        .showcase_img {
            width: 100%;
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
            width: 20rem;
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
        .text {
            width: 100%;
        }
        .feature-2-list {
            flex-direction: column;
            gap: 2rem;
        }
    }
`

const Media = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    h3 {
        font-size: 3rem
    }
    div {
        display: flex;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
    }
`

const Footer = styled.footer`
    display:flex;
    background: url(${token});
    height:100vh;
    max-height: fit-content;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

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
        height: 100vh;

        .section {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 40%;
        }
        hr {
            background: rgba(255, 255, 255, 0.1);
        }
        nav {
            margin: 20px 0;
            ul {
                width: 45%;
            }
        }
        .copy-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
        }
        .icons {
            display: flex;
            justify-content: space-between;
            min-width:40%;
            gap: 2rem;

            * {
                font-size: 1.5rem;
                border: 1px solid #01C496;
                width: 2rem;
                height: 2rem;
                padding: 0.2rem 0.2rem;
                border-radius: 50%;
            }
        }
    }
    @media screen and (${device.md}) {
        nav, .copy-section {
            flex-direction: column-reverse;
            
        }
        .icons {
            width: 100%;
            justify-content: space-around;
        }
        .hero-content {
            width: 100%;
        }
        ul {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }
`
