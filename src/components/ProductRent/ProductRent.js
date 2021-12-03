import React from 'react'
import styled from 'styled-components'  
import NavbarBottom from '../NavbarBottom/index'
import ProSelect from './ProSelect'
import calc from '../assets/images/calc.png'
import redline from '../assets/images/redline.png'
import rentimg1 from '../assets/images/rentimg1.png'
import rentimg2 from '../assets/images/rentimg2.png'
import ProInfoContainer from './ProInfoContainer'
import retconimg3 from '../assets/images/slideimage.png' 
import retconimg1 from '../assets/images/slideimge2.png' 
import retconimg2 from '../assets/images/slideimage4.png' 
import arrow from '../assets/images/arrow.png'
import tovar1 from '../assets/images/tovar1.png'
import tovar2 from '../assets/images/tovar2.png'
import tovar3 from '../assets/images/tovar3.png'
import {Link} from 'react-router-dom'
import TextLine from '../TextLine/index'
const ArrImg = [
    {img1:tovar1},
    {img1:tovar2},
    {img1:tovar3}
]


function ProductRent() {
    return (
        <Wrapper>
            <NavbarBottom title1='Главная /' title2='Аренда /' title3='  Дизельные теплогенераторы' title4='' title5=''/>
            <Content>
                <ContentLeft>
                    <div className='contentleft_cover'>

                    <div  className='rentProduct_btn'>
                        АРЕНДА
                    </div>
                    <div className='rentProduct_selects'>
                        <ProSelect color='' title='Дизельные котельные'/>
                        <ProSelect color='#A6A6A6' title='Котельные 0,3 МВт'/>
                        <ProSelect color='' title='Котельные 0,5 МВт'/>
                        <ProSelect color='#A6A6A6' title='Котельные 1 МВт'/>
                        <ProSelect color='#A6A6A6' title='Котельные 1,5 МВт'/>
                        <ProSelect color='#A6A6A6' title='Котельные 2 МВт'/>
                    </div>
                    <div className='rentProduct_select_cotainer'>
                        дизельные теплогенераторы
                    </div>
                    <div className='rentProduct_selects'>
                        <ProSelect color='black' title='Дизельные котельные'/>
                        <ProSelect color='#A6A6A6' title='Котельные 0,3 МВт'/>
                    </div>
                    <div className='rentProduct_select_cotainer'>
                         электрические пушки
                    </div>
                    <div className='rentProduct_selects'>
                        <ProSelect color='black' title='генераторы'/>
                        <ProSelect color='#A6A6A6' title='Бензиновые генераторы'/>
                        <ProSelect color='#A6A6A6' title='Дизельные генераторы'/>
                    </div>
                    <div className='rentProduct_select_cotainer'>
                         <ProSelect color='black' title='осушители'/>
                         <ProSelect color='#A6A6A6' title='Электрические осушители'/>
                    </div>
                    <div className='rentProduct_select_cotainer'>
                         <ProSelect color='black' title='Для работы с полом'/>
                         <ProSelect color='#A6A6A6' title='Затирочные машины'/>
                         <ProSelect color='#A6A6A6' title='Шлифовальные машины'/>
                    </div> 
                    <div className='rentProduct_select_cotainer'>
                         <ProSelect color='black' title='для уплотнения грунта'/>
                         <ProSelect color='#A6A6A6' title='Виброплиты'/>
                        
                    </div> 

                    </div>
                    <RentSqure className='rent_arenda'>
                        <img src={calc} alt='rasm'/>
                        <img src={redline} alt='rasm'/>
                        <p>РАСЧЕТ ТЕПЛОВОЙ МОЩНОСТИ</p>
                    </RentSqure>
                </ContentLeft>
                <ContentRight>
                    <FirstWrap>
                        <div className='rent_img'>
                            <img src={rentimg1} alt='rasm' />
                            <p>ПРЯМОГО НАГРЕВА</p>
                        </div>
                        <div className='rent_img'>
                            <img src={rentimg2} alt='rasm' />
                            <p>НЕПРЯМОГО НАГРЕВА</p>
                        </div>
                    </FirstWrap>
                    <SecondWrap>
                        <ProInfoContainer img={retconimg1} />
                        <ProInfoContainer img={retconimg2} />
                        <ProInfoContainer img={retconimg3} />
                        <ProInfoContainer img={retconimg1} />
                        <ProInfoContainer img={retconimg2} />
                        <ProInfoContainer img={retconimg3} />
                        <ProInfoContainer img={retconimg1} />
                        <ProInfoContainer img={retconimg2} />
                        <ProInfoContainer img={retconimg3} />
                    </SecondWrap>

                    <Thrid>
                        <div className='thrid_title'>Сопутствующее оборудование</div>
                        <div className='thrid_product'>
                        {
                            ArrImg.map((item,index)=>{
                            return <ProBox2 >
                                        <Link className='home_pro_img2'>
                                            <img  src={item.img1} alt='rasm' />
                                        </Link>
                                        <Link className='home_pro_desc2'>
                                            <span className='home_pro_desc_span12'>ЕМКОСТИ</span>
                                            <span className='home_pro_desc_span22' >
                                                <img src={arrow} alt='rasm'/>
                            
                                            </span>
                                        </Link>             
                                    </ProBox2>
                            })
                        }
                        </div>
                    </Thrid>
                </ContentRight>
                
            </Content>
            <ContnentBottom>
                    <TextLine title='ДИЗЕЛЬНЫЕ' />
                    <div className='rent_title_content'>
                            Компания Climat Trading - активный участник рынка климатических услуг, обеспечивающий оборудованием строительные объекты, производственные и складские помещения, временные конструкции и сооружения на территории России. 
                            Благодаря обширному парку оборудования компания Climat Trading успешно занимается снабжением строительных объектов даже в самых отдаленных уголках нашей страны, предоставляет услуги доставки, подключения, настройки, а также обслуживания теплового оборудования 24 часа в сутки. 
                            За время работы наши услуги стали востребованными не только Москве, Екатеринбурге, Твери, Рязани, Туле, Вологде, Калуге, Пензе, Уфе, Североморске, Выборге, Южносахалинске, а также других городах и регионах России. Этот перечень, надеемся, будет расширяться и дальше.
                    </div>
                </ContnentBottom>
        </Wrapper>
    )
}

export default ProductRent

const ContnentBottom = styled.div`

    .rent_title_content{
        margin:2.25vw 0 0 0;
        font-size:var(--textsize18);
        font-weight: 400;

    }
    @media only screen and (max-width:500px){
        .rent_title_content{
        margin:5.5vw 0 0 0;
        font-size:var(--mtextsize11);

    }
    }

`
// contnet right
const ContentRight = styled.div`
    flex:1;

`
const Thrid = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:5.67vw;
    margin-bottom:1.82vw;
    flex-wrap:wrap;

    .thrid_title{
        display:flex;
        justify-content: center;
        font-size: var(--textsize30);
        font-weight: 600;
    }
    .thrid_product{
        display:flex;
        flex-wrap:wrap;
        column-gap:1.04vw;
    }
    @media only screen and (max-width:500px){
       display:none;
    }
`

const SecondWrap = styled.div`
    margin-top:8vw;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;

    row-gap:0.78vw;
    @media only screen and (max-width:500px){
        row-gap:3.78vw;

    }

`
const FirstWrap = styled.div`
    display: flex;  
    justify-content: space-between;
    margin-bottom:4.45vw;

    .rent_img{
        border:1px solid #E7E7E7;
        cursor:pointer;
        box-shadow:-2px 2px 7px #E7E7E7;
        transform:scale(1);
        transition:.4s;
        &:hover{
            transform:scale(1.06);
        }
        img{
            width:17.57vw;
            height:12.96vw;
            
        }
        p{  
            margin-top:2vw;
            padding:0.6vw;
            display:flex;
            justify-content:center;
            border-bottom:2px solid #CF0028;
            font-size: var(--textsize20);
            font-weight: 600;
            color:white;
            background:#CF0028;
            transition:.4s;

        }
        p:hover{
            background:white;
            color:black;
        }
    }
    @media only screen and (max-width:500px){
        display:none;
    }
`
const ProBox2 = styled.div`
    margin-top:1.83vw;
    width:15.6vw;
    height:16.8vw;
    box-shadow:-2px 5px 10px grey;
    transition:.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &:hover{
        transform:scale(1.04) ;
    }

    .home_pro_img2{
        height:13.54vw;
        background:white;
        display: flex;
        justify-content: center;
        align-items:center;
        img{
        width:12.2vw;
        height:9.89vw;
        cursor: pointer;
        
        }
        
    }
    .home_pro_desc2{
        cursor: pointer;
        display: flex;
        background:#EAEAEA;
        height:4vw;  
        text-decoration:none;
    
    &:hover .home_pro_desc_span22{
            background: #CF0028;
        }
        
        
        .home_pro_desc_span12{
            flex:1;
            
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Open Sans;
            font-size:var(--textsize16);
            font-style: normal;
            font-weight: 600;

        }
        .home_pro_desc_span22{
            width:4.5vw;
            height:4vw;
            background: #FFA825;
            transition:.4s;
            display:flex;
            justify-content:center;
            align-items:center;
            
            
            img{
                 width:1.37vw;
            }
        }
        
    }
    @media only screen and (max-width:500px){
        .home_pro_img2{
        height:41vw;
        img{
        width:32.2vw;
        height:26.3vw;
     
        
        }
        
    
    }

`

// 
const Wrapper = styled.div`
     padding:0 15.4vw 6vw;
     display:flex;
     flex-direction:column;
     row-gap:10vw;
     @media only screen and (max-width:500px){
        
        padding:0 4vw 6vw;
    }

`
const Content = styled.div`
    display:flex;
    column-gap:1.3vw;
    justify-content: space-between;
    margin-bottom:6.25vw;
    @media only screen and (max-width:500px){
        flex-direction:column;
    }

`

const ContentLeft = styled.div`
    width:18.5vw;
    .contentleft_cover{
    width:100%;
    display:flex;
    flex-direction: column;
    border:1px solid #E7E7E7;
    }
    .rentProduct_btn{
        width:100%;
        height:4.16vw;
        background: rgba(255, 168, 37, 1);
        display:flex;
        align-items: center;
        border-bottom:2px solid rgba(207, 0, 40, 1);
        font-size: var(--textsize16);
        font-style: normal;
        font-weight: 600;
        padding-left:2.7vw;
        cursor:pointer;
    }
    .rentProduct_selects{
        padding-left:2.5vw;
    }
    .rentProduct_select{
        padding:0.78vw 0;
        width:fit-content;
        border-bottom:1px dotted #E7E7E7;
        font-size:var(--textsize16);
        font-weight: 700;
        cursor:pointer;
    }
    .rentProduct_select_cotainer{
        padding:1.25vw 2.5vw;
        font-size:var(--textsize16);
        font-weight: 700;
        border-top:1px solid #E7E7E7;
        border-bottom:1px solid #E7E7E7;
        cursor:pointer;
        
    }
    .rentProduct_select_cotainer:first-letter{
        text-transform:uppercase;
    }
    @media only screen and (max-width:500px){
        width:100%;
        .rentProduct_btn{
        height:22vw;
        font-size: var(--mtextsize16);
        padding-left:15vw;
    }
    .rentProduct_selects{
        padding-left:15vw;
    }
    .rentProduct_select{
        padding:5.8vw 0;
        font-size:var(--mtextsize16);
   
    }
    .rentProduct_select_cotainer{
        padding:5.25vw 15vw;
        font-size:var(--mtextsize16);
        
    }
}

`
const RentSqure = styled.div`
    box-shadow:-2px 2px 5px #E7E7E7;
    padding:2.7vw 3vw 0 2.5vw;
    margin-top:4vw;
    border:1px solid #E7E7E7; 
    display:flex;
    flex-direction: column;
    width:18.4vw;
    height:18.4vw;
    row-gap:1.19vw;
    img:nth-child(1){
        width:5.26vw;
        height:6.8vw;
    }
    img:nth-child(2){
        width:13.7vw;
    }
    p{
        font-size: var(--textsize20);
        font-weight: 600;
        /* line-height: 27p; */


    }
    @media only screen and (max-width:500px){
        display:none;
    }
`

