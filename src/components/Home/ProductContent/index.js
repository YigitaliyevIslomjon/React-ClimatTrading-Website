import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/images/arrow.png'
import proimg1 from '../../assets/images/home-pro1.png'
import proimg2 from '../../assets/images/home-pro2.png'
import proimg3 from '../../assets/images/home-pro3.png'
import backproduct from '../../assets/images/backproduct.png'
import {Link} from 'react-router-dom'
import RedButton from '../../Buttons/RedButton'
import mauntinimage from '../../assets/images/moutinimage.png'
import workerman from '../../assets/images/workerman.png' 
import mapsvg from '../../assets/svgicons/map.svg'
import advanback from '../../assets/images/advantageback.png'
import adimg1 from '../../assets/images/adimg1.png'
import adimg2 from '../../assets/images/adimg2.png'
import adimg3 from '../../assets/images/adimg3.png'
import adimg4 from '../../assets/images/adimg4.png'
import adimg5 from '../../assets/images/adimg5.png'
import TextLine from '../../TextLine/index'
import SqureProduct from '../SqureProduct/SqureProduct'

const ArrImg = [
    {img1:proimg1},
    {img1:proimg2},
    {img1:proimg1},
    {img1:proimg3},
    {img1:proimg1},
    {img1:proimg2},
]

function ProductContent() {
    return (
        <>
        <Wrapper>
            <Title>
                 АРЕНДА ТЕПЛОВЫХ ПУШЕК, КОТЕЛЬНЫХ И ГЕНЕРАТОРОВ<br/>
                 В МОСКВЕ С ОБЛСУЖИВАНИЕМ
            </Title>
            <Decsiption>
                 Миссия компании Climat Trading направлена на поддержание темпов строительства значимых объектов, развитие инфраструктуры столицы и регионов в зимнее время года. Парк нашей компании насчитывает более 200 единиц техники, а это значит, что мы можем обеспечить теплом помещения суммарным объемом более 10 000 000 кубических метров. Комплексный подход, а также оперативность особенно важны для наиболее эффективного расчета мощности, быстрого подбора, доставки и установки оборудования, а значит, для своевременной сдачи объектов нашими заказчиками

            </Decsiption>
            <WrapPro>
                {
                    ArrImg.map((item,index)=>{
                       return <SqureProduct  item={item} index={index} arrow={arrow}/>
                    })
                }
                <Catalog>
                    <RedButton title='смотреть каталог'/>
                </Catalog>
            </WrapPro>
        </Wrapper>
        <WrapperMap>
                <WrapImgData>
                        <div>
                            <img  src={workerman} alt='rasm'/>
                        </div>
                        <div className='home_map_data'>
                                <p>Бесплатный вызов <br/>менеджера на ваш объект</p>
                                <p>Вы можете выбрать удобное для вас время прямо сейчас!</p>
                                <div>
                                    <RedButton title='отправить заявку'/>
                                </div>
                        </div>
                </WrapImgData>
                <WrapCalculate>
                    <Calculate>
                        Расчет тепловой мощности
                    </Calculate>
                    <Wrap>
                        <div className='home_calcualte_card'>
                            <div className='home_calcualte_card_title'>Размеры помещения:</div>
                            <div className='home_calcualte_card_form'>
                                <div className='home_cal_card_two'>
                                    <label>Длина</label>
                                    <div>
                                        <input className='home_cal_card_two_inputtext' />
                                        <span>M</span>
                                    </div>
                                </div>
                                <div className='home_cal_card_two'>
                                    <label>Ширина</label>
                                    <div>
                                        <input className='home_cal_card_two_inputtext'/>
                                        <span>M</span>
                                    </div>
                                </div>
                                <div className='home_cal_card_two'>
                                    <label>Высота</label>
                                    <div>
                                        <input className='home_cal_card_two_inputtext'/>
                                        <span>M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='home_calcualte_card'>
                            <div className='home_calcualte_card_title'>Температура:</div>
                            <div className='home_calcualte_card_form'>
                                <div className='home_cal_card_two'>
                                    <label>В помещении</label>
                                    <div>
                                        <input className='home_cal_card_two_inputtext'/>
                                        <span>M</span>
                                    </div>
                                </div>
                                <div className='home_cal_card_two'>
                                    <label>Снаружи</label>
                                    <div>
                                        <input className='home_cal_card_two_inputtext'/>
                                        <span>M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='home_calcualte_card'>
                            <div className='home_calcualte_card_title'>Тип теплоизоляции:</div>
                            <div className='home_calcualte_card_form'>
                                <div className='home_cal_card_two'>
                                    <div className='home_cal_card_two_radio'>
                                        <input  name='radio' type='radio' />
                                        <span>Высокая</span>
                                    </div>
                                    <div className='home_cal_card_two_radio'>
                                        <input  name='radio' type='radio'/>
                                        <span>Средняя</span>
                                    </div>
                                </div>
                                <div className='home_cal_card_two'>
                                    <div className='home_cal_card_two_radio'>
                                        <input name='radio'  type='radio' />
                                        <span>Низкая</span>
                                    </div>
                                    <div className='home_cal_card_two_radio'>
                                        <input  name='radio' type='radio' />
                                        <span>Отсутствует</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrap>
                    <RedButton title='вычислить тепловую'/>
                </WrapCalculate>
                <Map>
                <object
                    className='map_class'
                    data={mapsvg}

                >

                </object>
                </Map>
                
        </WrapperMap>
        <Advantages>
                <AdvWrap>
                    <div >
                        НАШИ ПРЕИМУЩЕСТВА
                    </div>
                    <div className='advantage_img_and_data'>
                        <Imgtitle>
                            <img src={adimg1} alt='rasm'/>
                            <div className='advantage_title'>
                                Большой выбор оборудования европейского качества
                            </div>
                        </Imgtitle>
                        <Imgtitle>
                            <img src={adimg2} alt='rasm'/>
                            <div className='advantage_title'>
                                Проект отопления под ключ
                            </div>
                        </Imgtitle>
                        <Imgtitle>
                            <img src={adimg3} alt='rasm'/>
                            <div className='advantage_title'>
                                Быстрая доставка и установка  в день заказа
                            </div>
                        </Imgtitle>
                        <Imgtitle>
                            <img src={adimg4} alt='rasm'/>
                            <div className='advantage_title'>
                                Обслуживание оборудования 24 часа в сутки
                            </div>
                        </Imgtitle>
                        <Imgtitle>
                            <img src={adimg5} alt='rasm'/>
                            <div className='advantage_title'>
                                Работаем во всех регионах России
                            </div>
                        </Imgtitle>
                    </div>
                </AdvWrap>
                <Company>
                    <TextLine title='компания сегодня' />
                   
                    <p className='company_info'>
                    Компания Climat Trading - активный участник рынка климатических услуг, обеспечивающий оборудованием строительные объекты, производственные и складские помещения, временные конструкции и сооружения на территории России. 
                    Благодаря обширному парку оборудования компания Climat Trading успешно занимается снабжением строительных объектов даже в самых отдаленных уголках нашей страны, предоставляет услуги доставки, подключения, настройки, а также обслуживания теплового оборудования 24 часа в сутки.
                    За время работы наши услуги стали востребованными не только Москве, Екатеринбурге, Твери, Рязани, Туле, Вологде, Калуге, Пензе, Уфе, Североморске, Выборге, Южносахалинске, а также других городах и регионах России. Этот перечень, надеемся, будет расширяться и дальше.
                    </p>
                    <TextLine title='Climat trading в цифрах' />
                    <ImgDesc>
                        <div></div>
                        <div></div> 
                    </ImgDesc>
                </Company>

        </Advantages>
                
                
        </>
    )
}

export default ProductContent
// advantages 

const Advantages = styled.div`
    margin-bottom:20vw;
`

const AdvWrap = styled.div`
    padding:3.75vw 15.62vw 0vw;
    height:22.39vw;
    background-image:url('${advanback}');
    background-position: top;
    background-size:100% 26.04vw;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;

    & > div:nth-child(1){
        display:flex;
        justify-content:center;
        color:white;
        text-transform: uppercase;
        font-size: var(--textsize30);
        font-weight: 600;
        margin-bottom:3.34vw;

    }
    & > div:nth-child(2){
        display:flex;
        column-gap:4.33vw;
        display:flex;
    }
    @media only screen and (max-width:500px){
        
        padding:9.75vw 4vw 0vw;
        height:175vw;
        background-size:400% 175vw;
        & > div:nth-child(1){
            font-size: var(--mtextsize20);
            margin-bottom:10.8vw;


        }
        & > div:nth-child(2){
        display:flex;
        flex-wrap: wrap;
        column-gap:3.33vw;
        row-gap:10vw;
        justify-content:center;
      
    }

    
    }

`
const Imgtitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    row-gap:5.5vw;
    img{
        width:4.48vw;
        height:4.48vw;
        text-align:center;
    }
    div{
        color:white;
        font-size: var(--textsize18);
        font-weight: 600;
        text-align:center;
    }
    @media only screen and (max-width:500px){
          
        img{
        width:18vw;
        height:18vw;
        text-align:center;
        
        }

        div{
        font-size: var(--mtextsize13);
        width:40vw;
    }
    }

`
const Company = styled.div`
    padding:3.75vw 15.62vw 0vw;
    
    .company_info{
        margin:2.5vw 0 6.25vw 0;
        font-size: var(--textsize18);
        font-style: normal;
        font-weight: 400;
        line-height:1.56vw;

    }
    @media only screen and (max-width:500px){
        padding:3.75vw 4vw 0vw;

    .company_info{
        font-size: var(--mtextsize13);
        line-height:5.5vw;


    }
    
    }


`
const ImgDesc = styled.div`
    display:flex;


`


//  map and data
 const WrapperMap = styled.div`
    padding:3.75vw 15.62vw 2vw;
    background-image:url('${mauntinimage}');
    background-position: top;
    background-size:100% 26.04vw;
    background-repeat: no-repeat;
    @media only screen and (max-width:500px){
        background-size:300% 78.6vw;
        padding:3.75vw 3.9vw 5.2vw;

    }

 `

const WrapImgData = styled.div`
    margin-top:9.63vw;
    display:flex;
    background:white;    

    .advantage_title{
        text-align:center;
    }

    img{
        width:27.76vw;
    }
    .home_map_data{
        display:flex;
        flex-direction: column;
        padding:2.65vw 0 2.65vw 3.59vw;

        & p:nth-child(1){
            font-size: var(--textsize30);
            font-weight: 600;
            line-height: 2.13vw;
            text-transform:uppercase;
        }
        & p:nth-child(2){
            font-size: var(--textsize18);
            font-weight: 600;
            margin:2.5vw 0;
            
            
        }
    }
    @media only screen and (max-width:500px){
            margin-top:17vw;
            display:flex;
            flex-direction:column;
            background:transparent;
            align-items:center;
            row-gap:20vw;
            padding-bottom:10vw;
        img{
            width:62.5vw;
            height:41.1vw;
        }
        .home_map_data{

            padding:0vw 0 0vw 0vw;

        & p:nth-child(1){
            font-size: var(--mtextsize20);
            line-height: 7.5vw;
        }
        & p:nth-child(2){
            font-size: var(--mtextsize16);
            margin:5.5vw 0 9vw;
               
        }
       
        

        }
       
    }
`
const WrapCalculate = styled.div`
    margin-top:22vw;
    
    @media only screen and (max-width:500px){
        
    }
`
const Calculate = styled.div`
    font-size: var(--textsize30);
    font-weight: 600;
    text-transform:uppercase;
    margin-bottom:2vw;
    @media only screen and (max-width:500px){
        margin-bottom:7.7vw;
        font-size: var(--mtextsize20);


    }
    

`
const Wrap = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:2.6vw;
    .home_calcualte_card_title{
        margin-bottom:1vw;
        font-size:var(--textsize18);
    }
    .home_cal_card_two{
        display: flex;
        flex-direction: column;
        row-gap:0.3vw;
        label{
            font-size:var(--textsize18);
        }
        span{
            font-size:var(--textsize18);
        }

        .home_cal_card_two_radio{
            display:flex;
            align-items: center;
            column-gap:2.3vw;
            span{
                font-size:var(--textsize18);

            }
        }

        .home_cal_card_two_inputtext{
            width:4.16vw;
            height:1.61vw;
            margin-right: 0.2vw;
            border:1px solid #FFA825;
           
        }
        
    }
    .home_calcualte_card_form{
        display: flex; 
        column-gap:1.56vw;
    }
    @media only screen and (max-width:500px){
        margin-bottom:14vw;
        flex-direction:column;
        row-gap:9.4vw;

        .home_calcualte_card{
            
        }
        .home_calcualte_card_title{
            font-size:var(--mtextsize18);
            margin-bottom:3.6vw;

        }
        .home_calcualte_card_form{
            column-gap:5.5vw;

            .home_cal_card_two{
                display: flex;
                flex-direction: column;
                row-gap:2.3vw;
                label{
                    font-size:var(--mtextsize18);
                }
                span{
                    font-size:var(--mtextsize18);
                }
                div{
                    display:flex;
                    align-items:center;
                }

                .home_cal_card_two_radio{
                    display:flex;
                    align-items: center;
                    column-gap:0.3vw;
                    
                    span{
                        font-size:var(--mtextsize20);

                    }
                }

                .home_cal_card_two_inputtext{
                    width:20vw;
                    height:8vw;
                    margin-right: 0.7vw;
                
                }
                
            }
            
        }
        
    }
`
const Map = styled.div`
    display: flex;
    justify-content: center;
    object{
        width:100%;
        height:100%;
    }
    path:hover{
        color:rgba(254, 184, 1,0.5);
        fill:rgba(254, 184, 1,0.5);
        cursor:pointer;
    }
    @media only screen and (max-width:500px){
        margin:10vw 0;
        svg{
            
        }
    }
    
`
// product container
const Wrapper = styled.div`

    padding:3.75vw 15.62vw 5.2vw;
    background-image:url('${backproduct}');
    background-position: bottom;
    background-size:100% 50%;
    background-repeat: no-repeat;
    @media only screen and (max-width:500px){
        padding:3.75vw 3.9vw 5.2vw;
        background-image:none;


    }
`
const Title = styled.div`
    
    font-size: var(--textsize30);
    font-weight: 600;
    line-height: 2.1vw;
    color:#111111;
    @media only screen and (max-width:500px){
        font-size: var(--mtextsize20);
        line-height: 7.5vw;


    }

`
const Decsiption = styled.div`
    margin-top:2.5vw;
    font-size: var(--textsize18);
    font-weight: 400;
    line-height: 1.56vw;
    color:#404040;
    @media only screen and (max-width:500px){
        font-size: var(--mtextsize12);
        line-height:5.5vw;

    }

`
const WrapPro = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin:3.3vw 0;
    row-gap:3.3vw;
    background:transparent;
    
    & *{
        text-transform: uppercase;
    }
    @media only screen and (max-width:500px){
        margin:7.7vw 0;
        row-gap:5.5vw;

    }

`



const Catalog = styled.div`
        width:100%;
        display:flex;
        justify-content: center;
        background:transparent;

`
