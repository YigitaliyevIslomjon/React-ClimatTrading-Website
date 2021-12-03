import React from 'react'
import styled from 'styled-components'
import telephone from '../assets/images/telephone.png'
import message from '../assets/images/message.png'
import logoFooter from '../assets/images/logoFooter.png'

function Footer() {
    return (
        <Wrapper>
            <div className='footer_firt_line'>
                <img className='footer_firt_line_logo' src={logoFooter} alt='rasm'/>
                <p className='footer_firt_line_logotitle' >Современные системы <br/>обогрева</p>
                <div className='footer_firt_line_email'>
                    <p>
                        <img src={telephone} alt='rasm'/>+7 (499) 347-25-62</p>
                    <p> 
                        <img src={message} alt='rasm'/>
                        sales@climattrading.ru
                    </p>
                </div>
                <div className='footer_firt_line_date' >
                    <p>
                        <img src={telephone} alt='rasm'/>
                        +7 (926) 008-81-46
                    </p>
                    <p>
                        <img src={message} alt='rasm'/>
                         24/7
                    </p>
                </div>

                <div className='footer_firt_line_btn'>заказать обогрев</div>
            </div>
            <div className='footer_second_line'>
                <div className='footer_second_line_title'>
                     аренда
                </div>
                <div className='footer_second_line_title'>
                    услуги
                </div>
                <div className='footer_second_line_title'>
                    продажи
                </div>
                <div className='footer_second_line_title'>
                    объекты
                </div>
                <div className='footer_second_line_title'>
                    о нас
                </div>
                <div className='footer_second_line_title'>
                    контакты
                </div>
            </div>
            <div className='footer_thrid_line_title'>
                    © climat-trading.ru Политика конфиденциальности<br/>
                    Заполняя любую форму обратной связи на нашем сайте, вы соглашаетесь на обработку ваших персональных<br/>
                    данных. Вся информация, размещенная на сайте, носит ознакомительный характер и не является публичной офертой, определяемой положением ст. 437 ГК РФ.
            </div>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    height:20.9vw;
    padding:3.7vw 15.62vw 0vw;
    background:rgba(17, 17, 17, 1);
    color:white;

    .footer_firt_line{
        display:flex;
        column-gap:1vw;
        flex-wrap:wrap;
        /* align-items: center; */
        /* justify-content: space-between; */

        .footer_firt_line_logo{
            width:5.89vw;
            height:3.49vw;
            margin-top:-0.5vw;
            cursor:pointer;
        }
        .footer_firt_line_logotitle{
            font-size: var(--textsize16);
            font-weight: 400;
           

        }
        .footer_firt_line_email{
            display:flex;
            flex-direction:column;
            row-gap:1.56vw;
            margin-left:auto;
            p{
                font-size: var(--textsize16);
                font-weight: 600;
                display:flex;
                align-items: center;
                column-gap:1vw;
            }

             & p:nth-child(1) img{
               height:1.04vw;
               width:1.04vw;
               cursor:pointer;

               
            }
            & p:nth-child(2) img{
               height:0.8vw;
               width:1.04vw;
               background-size: 100%;
               cursor:pointer;

               
            }
        }

        .footer_firt_line_date{
            margin-left:auto;
            display:flex;
            flex-direction:column;
            row-gap:1.56vw; 
        
        p{
                font-size: var(--textsize16);
                font-weight: 600;
                display:flex;
                align-items: center;
                column-gap:1.04vw;
            }

             & p:nth-child(1) img{
               height:1.04vw;
               width:1.04vw;
               background-size: 100%;
               cursor:pointer;

               
            }
            & p:nth-child(2) img{
               display:inline-block;
               content:url('${message}');
               height:0.8vw;
               width:1.04vw;
               background-size: 100%;
               cursor:pointer;

               
            }
        }
        
        .footer_firt_line_btn{
            cursor:pointer;
            margin-left:auto;
            width:15.2vw;
            height:3.15vw;
            border:1px solid rgba(254, 184, 1, 1);
            display:flex;
            align-items: center;
            justify-content: center;
            color:rgba(254, 184, 1, 1);
            font-size:var(--textsize24);
            font-weight: 600;
            text-transform: uppercase;
            

        }
            
    }
    
    .footer_second_line{
        & *{
            text-transform: uppercase;
            }
        
        margin-top:3.64vw;
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        .footer_second_line_title{
            font-size: var(--textsize16);
            font-weight: 600; 
            
        }
        
    }
    .footer_thrid_line_title{
        margin-top:4vw;
        text-align:center;
        font-size: var(--textsize16);
        font-weight: 400;


    }
    @media only screen and (max-width:500px){
        height:194.1vw;
        padding:10vw 5vw 0vw;
        
        .footer_firt_line{
            row-gap:5vw;

            .footer_firt_line_logo{
                width:25.2vw;
                height:16.94vw;
                margin-top:-3.5vw;
                margin-right:2.7vw;
            }
            .footer_firt_line_logotitle{
                font-size: var(--mtextsize16);
                line-height:5.5vw;
            }
            .footer_firt_line_email{
                margin-left:0;
                p{
                font-size: var(--mtextsize16);
                column-gap:4.4vw;
                padding-top:4vw;

                }

                & p:nth-child(1) img{
                height:5.5vw;
                width:5.5vw;

                
                }
                & p:nth-child(2) img{
                height:4.5vw;
                width:5.5vw;
                
                }
             }

             .footer_firt_line_date{
                margin-left:0;
                p{
                font-size: var(--mtextsize16);
                column-gap:4.4vw;
                padding-top:5vw;
                
                }
                & p:nth-child(1) img{
                height:5.5vw;
                width:5.5vw;
                
                }
                & p:nth-child(2) img{
                height:4.5vw;
                width:5.5vw;
                  
                }

             }
             .footer_firt_line_btn{
                margin-top:8vw;
                margin-left:0;
                width:81.3vw;
                height:16.6vw;
                font-size:var(--mtextsize24); 
             }

        
        }
        .footer_second_line{
            margin-top:12vw;
            justify-content: space-between;
            column-gap:8vw;
            row-gap:11vw;
            
        .footer_second_line_title{
            font-size: var(--mtextsize16);
            
            }
            
        }
        .footer_thrid_line_title{
            margin-top:16vw;
            font-size: var(--mtextsize11);
        }
        
    
    
    
    }
`
