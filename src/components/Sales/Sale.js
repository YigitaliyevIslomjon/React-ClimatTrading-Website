import React from 'react'
import styled from 'styled-components'
import NavbarBottom from '../NavbarBottom'
import saleimg from '../assets/images/saleimg.png' 
import TextLine from '../TextLine/index'
function Sale() {
    return (
        <Wrapper>
            <NavbarBottom title1="Главная / "
                          title2="Аренда / "
                          title3="Дизельные теплогенераторы / "
                          title4="Непрямого нагрева / "
                          title5="Master BV  690"
            />
            <Container>
                <ContainerLeft>
                    <div className='first_left'>Дизельный генератор <font>Master BV 690</font> в аренду</div>
                    <div className='second_left'>
                        <img src={saleimg} alt='ras' />
                    </div>
                    <div className='thrid_left'>
                        <img className='thrid_left_img' src={saleimg} alt='rasm'/>
                        <img className='thrid_left_img' src={saleimg} alt='rasm'/>
                        <img className='thrid_left_img' src={saleimg} alt='rasm'/>
                    </div>
                </ContainerLeft>
                <ContentRight>
                    <div className='sale_right_first'>
                        <p>Цена {'>'} 30 смен</p><p> 6000 руб.</p>
                    </div>
                    <div className='sale_right_first2'>
                        <p>Цена {'<'} 30 смен</p><p> 6000 руб.</p>
                    </div>
                    <div className='sale_right_first3'>
                        <div className='sale_right_first3_btn'>
                            АРЕНДОВАТЬ
                        </div>  
                    </div>
                    <div className='sale_right_first4'>
                        Характеристики:
                    </div>
                    <WrapSecond>
                    



                    <div className='sale_right_first_2'>
                        <p>Страна производитель</p><p>Великобритания</p>
                    </div>
                    <div className='sale_right_first2_2'>
                        <p>Напряжение</p><p>220-380В, 55Гц</p>
                    </div>
                    <div className='sale_right_first_2'>
                        <p>Объем бака</p><p>888 л.</p>
                    </div>
                    <div className='sale_right_first2_2'>
                        <p>Двигатель</p><p>1500 об/мин</p>
                    </div>
                    <div className='sale_right_first_2'>
                        <p>Марка двигателя</p><p>Perkins</p>
                    </div>
                    <div className='sale_right_first2_2'>
                        <p>Расход топлива</p><p> 69.6 л/час</p>
                    </div>
                    <div className='sale_right_first_2'>
                        <p>Расход с нагрузкой 50% </p><p>34,8 л/ч</p>
                    </div>
                    <div className='sale_right_first_2'>
                        <p>Габариты</p><p> 4400/1700/2200</p>
                    </div>
                    
                    <div className='sale_right_first2_2'>
                        <p>Вес</p><p> 4655 тонн</p>
                    </div>
                    
                    </WrapSecond>
                </ContentRight>
            </Container>
            <Wrap>
                <TextLine title='О ТОВАРЕ'/>
                <div className='sale_data'>
                     Компания Climat Trading - активный участник рынка климатических услуг, обеспечивающий оборудованием строительные объекты, производственные и складские помещения, временные конструкции и сооружения на территории России. 
                     Благодаря обширному парку оборудования компания Climat Trading успешно занимается снабжением строительных объектов даже в самых отдаленных уголках нашей страны, предоставляет услуги доставки, подключения, настройки, а также обслуживания теплового оборудования 24 часа в сутки. 
                     За время работы наши услуги стали востребованными не только Москве, Екатеринбурге, Твери, Рязани, Туле, Вологде, Калуге, Пензе, Уфе, Североморске, Выборге, Южносахалинске, а также других городах и регионах России. Этот перечень, надеемся, будет расширяться и дальше.
                </div>
            </Wrap>
        </Wrapper>
    )
}

export default Sale;

const Wrap = styled.div`
    margin-top:5.2vw;
    .sale_data{
        margin:3.59vw 0 5.83vw 0;
        font-size: var(--textsize18);
        font-weight: 400;
    }
    @media only screen and (max-width:500px){
        margin-top:20.2vw;
        .sale_data{
        margin:5.59vw 0 30.83vw 0;
        font-size: var(--mtextsize13);
    }

    }
    

`

const WrapSecond = styled.div`
    margin-top:0.78vw;
    background:rgba(249, 249, 249, 1);
    padding:1.4vw 1.5vw;
    .sale_right_first_2{
        display:flex;
        justify-content: space-between;
        border-bottom:1px dotted grey;
        padding-right:2vw;
        padding-bottom:0.5vw;
        margin-top:0.4vw;
        & p:nth-child(1){
        font-size: var(--textsize18);
        font-weight: 400;
        color:#7D7D7D;
        
        }
        & p:nth-child(2){
            font-size: var(--textsize18);
            font-weight: 400;     
        }
    }
    .sale_right_first2_2{
        padding-top:0.5vw;
        padding-right:2vw;
        display:flex;
        justify-content: space-between;
        & p:nth-child(1){
        font-size: var(--textsize18);
        font-weight: 400;
        color:#7D7D7D;
        
        }
        & p:nth-child(2){
            font-size: var(--textsize18);
            font-weight: 400;
            
        }
    }
    @media only screen and (max-width:500px){
        margin-top:4vw;
        padding:6.4vw 4vw;
    .sale_right_first_2{
        padding-right:4vw;
        padding-bottom:1.5vw;
        margin-top:1.4vw;
        & p:nth-child(1){
        font-size: var(--mtextsize13);
        
        }
        & p:nth-child(2){
            font-size: var(--mtextsize13);
        }
    }
    .sale_right_first2_2{
        padding-top:2.5vw;
        padding-right:4vw;
        & p:nth-child(1){
        font-size: var(--mtextsize13);
        
        }
        & p:nth-child(2){
            font-size: var(--mtextsize13);
            
        }
    }
    
    }

`

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding-top:4vw;
    
    .sale_right_first{
        display:flex;
        justify-content: space-between;
        border-bottom:1px dotted grey;
        padding-right:2vw;
        & p:nth-child(1){
        font-size: var(--textsize18);
        font-weight: 400;
        
        
        }
        & p:nth-child(2){
            font-size: var(--textsize18);
            font-weight: 400;
            color:rgba(186, 0, 47, 1);
        }
    }
    .sale_right_first2{
        padding-right:2vw;
        display:flex;
        justify-content: space-between;
        & p:nth-child(1){
        font-size: var(--textsize18);
        font-weight: 400;
        
        
        }
        & p:nth-child(2){
            font-size: var(--textsize18);
            font-weight: 400;
            color:rgba(186, 0, 47, 1);
        }
    }
    .sale_right_first3{
        margin:0.89vw 0 2.13vw 0;
        .sale_right_first3_btn{
            cursor:pointer;
            margin-left:auto;
            background:rgba(255, 168, 37, 1);
            padding:0.93vw 3.9vw;
            width:14.8vw;
            height:3.1vw;
            font-size: var(--textsize20);
            font-weight: 600;
        }
    }
    .sale_right_first4{
        text-transform: uppercase;
        font-size: var(--textsize18);
        font-weight: 600;

    }
    @media only screen and (max-width:500px){
        padding-top:12vw;

        .sale_right_first{
        border-bottom:1px dotted grey;
        padding-right:2vw;
        & p:nth-child(1){
        font-size: var(--mtextsize18);
        
        
        }
        & p:nth-child(2){
            font-size: var(--mtextsize18);
          
        }
    }
    .sale_right_first2{
        padding-right:2vw;
        & p:nth-child(1){
        font-size: var(--mtextsize18);
        
        
        }
        & p:nth-child(2){
            font-size: var(--mtextsize18);
        }
    }
    .sale_right_first3{
        margin:7vw 0 10vw 0;
        .sale_right_first3_btn{
            cursor:pointer;
            margin-left:auto;
            margin-right:auto;
            display:flex;
            align-items:center;
            justify-content: center;
            width:79.16vw;
            height:16.6vw;
            font-size: var(--mtextsize20);
            
        }
    }
    
    .sale_right_first4{
        font-size: var(--mtextsize18);

    }
    }

`

const Wrapper = styled.div`
    padding:0 15.4vw 0vw;
    @media only screen and (max-width:500px){
        padding:0 4vw 0vw;

    }


`
const Container = styled.div`
    display:flex;
    column-gap:5.93vw;
    @media only screen and (max-width:500px){
        flex-direction:column;
    }
`
const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    .first_left{
        font-family: Open Sans;
        font-size: var(--textsize30);
        font-weight: 600;
        
        font{
            color:rgba(207, 0, 40, 1);
        }
    }
    .second_left{
        display:flex;
        justify-content:center;
        margin:3.59vw 0 1.6vw 0;
        &:hover{
            opacity:0.8;
        }
        img{
            width:20.78vw;
            height:20.78vw;
            cursor:pointer;
        }
    }
    .thrid_left{
        display:flex;
        justify-content: space-between;
        img{
            cursor:pointer;
            width:8.69vw;
            height:8.69vw;
            
        &:hover{
            opacity:0.8;
        }
        }

       
    }
    @media only screen and (max-width:500px){
        margin:6.59vw 0 1.6vw 0;
        align-items:center;
        .first_left{
        font-size: var(--mtextsize20);
        width:70vw;
         }

        .second_left{
        margin:3.59vw 0 1.6vw 0;
       
        img{
            width:74.1vw;
            height:74.1vw;
        }
    }
    .thrid_left{
        column-gap:3.6vw;
        img{
            width:25.2vw;
            height:25.2vw;
        }

       
    }
    }

    
`






