import React,{useState} from 'react'
import styled from "styled-components"
import logo from '../assets/svgicons/logo.svg'
import headphone from '../assets/svgicons/headphone.svg'
import karzinka from "../assets/svgicons/karzinka.svg"
import {Link} from 'react-router-dom';
import mobile from '../assets/images/mobile.png'
import telephone from '../assets/images/telephone.png'
import './index.css'

function Navbar() {
    const [show, setShow] = useState(false)
    
    function onClickFun(){
        setShow(prev=>!prev)
    }

    return (
        <Wrapper>
            <div className='nav_logo'>
                <Link  to="/"> <img src={logo} alt='rasm'/></Link>
            </div>
            <div className='nav_contact'>
                <img src={headphone} alt='rasm'/>
                <div className='nav_contact_number'>
                    +7 (499) 347-25-62<br/>
                    +7 (926) 008-81-46

                </div>
            </div>
            <ul className='desc_menu'>
                <Link to="/rent" className="nav_menu_title">аренда</Link>
                <Link to="/service" className="nav_menu_title">услуги</Link>
                <Link to="/sales" className="nav_menu_title">продажи</Link>
                <Link to="/product" className="nav_menu_title">объекты</Link>
                <Link to="/about" className="nav_menu_title">о нас</Link>
                <Link to="/contact" className="nav_menu_title">контакты</Link>
            </ul>
            <div onClick={onClickFun} className='mobile_icon'>
                <img className='mobile_icon_img1' src={mobile} alt='rasm'/>
                <ul className={show ? 'mobile_menu_block' : 'mobile_menu_none'}>
                    <Link to="/rent" className="nav_menu_title">аренда</Link>
                    <Link to="/service" className="nav_menu_title">услуги</Link>
                    <Link to="/sales" className="nav_menu_title">продажи</Link>
                    <Link to="/product" className="nav_menu_title">объекты</Link>
                    <Link to="/about" className="nav_menu_title">о нас</Link>
                    <Link to="/contact" className="nav_menu_title">контакты</Link>
                </ul>
            </div>
            <div className='mobile_telephone'>
                <img src={telephone} alt='rasm'/>
            </div>
            <div className='nav_karzinka'>
            <img src={karzinka} alt='rasm'/>
            </div>
            <div className="nav_response">
                 отправить заявку
            </div>
        </Wrapper>
    )
}

export default Navbar


const Wrapper = styled.div`
    & *{
        text-transform:uppercase;
    }
    width:100%;
    height:5.1vw;
    display:flex;
    align-items: center;
    border:1px solid rgba(193, 193, 193, 1);
    
    .nav_logo{
        padding:0 3.8vw;
        img{
            width:7.2vw;
            height:4.84vw;
            cursor:pointer;
        }
    }
    .nav_contact{
        display:flex;
        align-items: center;
        column-gap:1.03vw;
        border-left:1px solid rgba(193, 193, 193, 1);
        border-right:1px solid rgba(193, 193, 193, 1);
        height: 4.68vw;
        padding:0 1.7vw;
       

        img{
            width:1.56vw;
            height:1.56vw;
            cursor:pointer;
        }
        .nav_contact_number{
           
            font-size: 1.14vw;
            font-style: normal;
            font-weight: 600;
            cursor:pointer;
            
        }
    }
    .desc_menu{
        display:flex;
        align-items: center;
        list-style-type:none;
        column-gap:2.55vw;
        margin:0 1.56vw 0 8.64vw;
       
        .nav_menu_title{
            font-size: var(--textsize16);
            font-weight: 600;
            font-style: normal;
            cursor:pointer;
            text-decoration:none;
            position:relative;
            transition: all 250ms;
          &:hover{
              color:rgba(255, 168, 37, 1);
          }
          &:before{
              content:'';
              height:0.1vw;
              position:absolute;
              bottom:-0.1vw;
              background:rgba(255, 168, 37, 1);
              opacity:0;
              left:0;
              right:0;
              transition:.6s;
              transform:scale(0);
              
          }
          &:hover::before{
              opacity:1;
              transform:scale(1)
          }
        }
        
    }
    
    .nav_karzinka{
        margin-left:auto;
        border-left:1px solid rgba(193, 193, 193, 1);   
        padding:0 1.95vw;
        height: 4.68vw;
        display:flex;
        align-items: center;
        justify-content: center;
        img{
            width:2.5vw;
            height:2.35vw;
            cursor:pointer;
        }
    }
    .nav_response{
        background:rgba(207, 0, 40, 1);
        height:100%;
        display:flex;
        align-items:center;
        color:white;
        padding:0 2vw;
        font-size: var(--textsize20);
        font-weight: bold;
        cursor:pointer;
    }
    .mobile_icon{
        display:none;
        .mobile_icon_img1{
          
        }
    }
    .mobile_telephone{
        display:none;
    }

@media only screen and (max-width:500px){
    padding:0 4.16vw;
    height:16.1vw;
    justify-content:space-between;
    .desc_menu,.nav_karzinka,.nav_response,.nav_contact{
        display:none;
    }
    .mobile_telephone{
        display:block;
    }
    .nav_logo{
        padding:0 0;

        img{
            width:25.2vw;
            height:16.94vw;
        }
    }

    .mobile_icon{
        margin-left:-18vw;
        display:block;
        .mobile_icon_img1{
            width:5.83vw;
            height:5.83vw;
        }

        .mobile_menu_none{
            display:none;
            opacity:0;
            transition: .4s;
        }
        .mobile_menu_block{
            position:absolute;
            background:#FED501;
            padding:5vw 0;
            top:16vw;
            right:0;
            left:0;
            display:flex;
            flex-direction:column;
            align-items:center;
            row-gap:4vw;
            z-index:2;
            transition: .4s;
            opacity:1;   
            animation: menu 1s; 
                     
            
            .nav_menu_title{
                text-decoration:none;
                color:black;
            }
        }
    }

    .mobile_telephone{
            width:5.7vw;
            height:5.7vw;
    }
    
}
`