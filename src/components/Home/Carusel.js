import React from 'react'
import styled from 'styled-components'
import carusel from '../assets/svgicons/caruselImage.svg'
import Slider from "react-slick"
import slideback from '../assets/images/slideback.png'
import slidebackmobile from '../assets/images/slidebackmobile.png'
import slidemodule from '../assets/images/slidemodule.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {Link} from 'react-router-dom'

function Carusel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };

    return (
        <Wrapper>
            <Swiper {...settings}>
                
                    <Wrap>
                        <div className='slide_title'>
                            <div className='slide_title_1' >Эффективные системы обогрева</div>
                            <div className='slide_title_2' >Проект отопления объекта под ключ.<br className='gidden_br'/> Аренда дизельных котельных и теплогенераторов! </div>
                            <div className='slide_title_3'>Master BV 690 22 кВ </div>
                            <div className='slide_title_4'>Лучший выбор для обогрева нескольких<br className='gidden_br'/> помещений</div>
                        </div>
                        <BtnWrapper>
                             <div className='slide_button'>подробнее</div>
                        </BtnWrapper>
                        <img src={slidemodule} alt='rasm'/>
                    </Wrap>
                    
                    <Wrap>
                        <div className='slide_title'>
                            <div className='slide_title_1' >Эффективные системы обогрева</div>
                            <div className='slide_title_2' >Проект отопления объекта под ключ.<br className='gidden_br'/> Аренда дизельных котельных и теплогенераторов! </div>
                            <div className='slide_title_3'>Master BV 690 22 кВ </div>
                            <div className='slide_title_4'>Лучший выбор для обогрева нескольких<br className='gidden_br'/> помещений</div>
                        </div>
                        <BtnWrapper>
                             <div className='slide_button'>подробнее</div>
                        </BtnWrapper>
                        <img src={slidemodule} alt='rasm'/>
                    </Wrap>
                    <Wrap>
                        <div className='slide_title'>
                            <div className='slide_title_1' >Эффективные системы обогрева</div>
                            <div className='slide_title_2' >Проект отопления объекта под ключ.<br className='gidden_br' /> Аренда дизельных котельных и теплогенераторов! </div>
                            <div className='slide_title_3'>Master BV 690 22 кВ </div>
                            <div className='slide_title_4'>Лучший выбор для обогрева нескольких<br className='gidden_br'/> помещений</div>
                        </div>
                        <BtnWrapper>
                             <div className='slide_button'>подробнее</div>
                        </BtnWrapper>
                        <img src={slidemodule} alt='rasm'/>
                    </Wrap>
                    <Wrap>
                        <div className='slide_title'>
                            <div className='slide_title_1' >Эффективные системы обогрева</div>
                            <div className='slide_title_2' >Проект отопления объекта под ключ.<br className='gidden_br'/> Аренда дизельных котельных и теплогенераторов! </div>
                            <div className='slide_title_3'>Master BV 690 22 кВ </div>
                            <div className='slide_title_4'>Лучший выбор для обогрева нескольких<br className='gidden_br'/> помещений</div>
                        </div>
                        <BtnWrapper>
                             <Link className='slide_button'>подробнее</Link>
                        </BtnWrapper>
                        <img src={slidemodule} alt='rasm'/>
                    </Wrap>
                    

            </Swiper>
        </Wrapper>
    )
}

export default Carusel

const Wrapper = styled.div`

    height:43vw;
    width:100%;
    position: relative;
    background-image:url('${carusel}');
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content: center;
    @media only screen and (max-width:500px){
        height:180vw;
        .gidden_br{
            display:none;
        }
    
    }

`
const Swiper = styled(Slider)`
    height:30vw;
    width:85vw;
   
    display:flex;
    align-items:center;
    justify-content: center;
    
        
        .slick-list{
            
            height:100%;

            .slick-track{
                height:100%;
                
            }
        }
        .slick-dots button:before{
            display:none;
        }
        .slick-prev:before{
            font-size: 1.87vw;
            line-height: 1;
            opacity: 0.7;
            color: black;
        }
        .slick-next:before{
            font-size: 1.87vw;
            line-height: 1;
            opacity: 0.7;
            color: black;
        }
    
        @media only screen and (max-width:500px){
        height:150vw;
        width:100vw;

        .slick-track{
                height:100%;
                padding:0;
                
            }
        .slick-prev:before{
            font-size: 9.44vw;
            line-height: 1;
            opacity: 0.7;
            color: black;
            position:absolute;
            left:8vw;
            top:29vw;
        }
        .slick-next:before{
            font-size: 9.44vw;
            line-height: 1;
            opacity: 0.7;
            color: black;
            top:29vw;
            right:8vw;
            position:absolute;
     
        }
        }

`

const Wrap = styled.div`
        & *{
            text-transform:uppercase;
        }
        padding-left: 6.4vw;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        position:relative;
        padding-top:5vw;
        

        img{
            
            height:22.75vw;
            width:22.8vw;
            position:absolute;
            top:6vw;
            right:12vw;
            z-index:10;
            cursor:pointer;
        }
    .slide_title{
        background-image:url('${slideback}');
        background-size:100% 100%;
        background-repeat:no-repeat;
        height:20vw;
        width:58.38vw;
        padding-top:3.6vw;

        .slide_title_1{

            padding-left:12vw;
            font-size: var(--textsize30);
            font-weight: 600;
            color:#CF0028;
           
        }

        .slide_title_2{
            padding-left:12vw;
            font-size: var(--textsize16);
            font-weight: 600;

        }
        .slide_title_3{
            padding-left:5vw;
            font-size: var(--textsize30);
            font-weight: 700;
            color:#CF0028;
            margin-top:3.52vw;
            line-height:2.13vw;
        }

        .slide_title_4{
            padding-left:5vw;
            font-size: var(--textsize16);
            font-weight: 700;
            color:white;

        }
    }

   
    @media only screen and (max-width:500px){
        padding-left:0;
        .slide_title{
            height:76.3vw;
            width:100%;
            background-image:url('${slidebackmobile}');
            background-size:cover;
            background-repeat:no-repeat;
            background-position:-10vw 0vw;
            padding:6.3vw 5vw 0 0;
            .slide_title_1{
            padding-left:15vw;
            font-size: var(--mtextsize20);

            }
            .slide_title_2{
                padding-left:15vw;
                font-size: var(--mtextsize12);

            }
            .slide_title_3{
                padding-left:15vw;
                font-size: var(--mtextsize20);
                margin:17vw 0 2vw 0;
                line-height:2.13vw;
            }

            .slide_title_4{
                padding-left:15vw;
                font-size: var(--mtextsize14);
            }
         
        }
        img{   
            height:50.8vw;
            width:53.3vw;
            top:77vw;
            right:22vw;
        }

       

    }


       
    
`


const BtnWrapper = styled.div`
    display:flex;
    justify-content:center;
    
    .slide_button{
        margin-right:5vw;
        width:15.2vw;
        height:3.12vw;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size: var(--textsize20);
        font-weight: 700;
        background:#FFA825;
        color:#222222;
        cursor:pointer;
        text-decoration:none;

    }
    @media only screen and (max-width:500px){
        .slide_button{
            margin-left:5vw;
            margin-top:48vw;
            width:81.3vw;
            height:16.6vw;
            font-size: var(--mtextsize20);
            background:rgba(207, 0, 40, 1);
            color:white;

        }
    }

`