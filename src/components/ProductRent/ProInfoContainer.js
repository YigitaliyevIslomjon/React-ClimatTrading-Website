import React from 'react'
import styled from 'styled-components'
function ProInfoContainer({img}) {
    return (
        <Wrap>
            <img src={img} alt='rasm' />
            <div className='rent_con'>
                <p>ДИЗЕЛЬНЫЙ ГЕНЕРАТОР ТСС АД</p>
                <p>10.4 л/ч; 40 кВт; 1050 кг</p>
                <p><font>Самовывоз: </font> сегодня</p>
                <p><font>Cтоимость за смену: </font>  2 500 Р</p>
                <p><font>Доставка по москве: </font>  от 6 000 Р</p>
                <p>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
                <div>АРЕНДОВАТЬ</div>
            </div>
        </Wrap>
    )
}

export default ProInfoContainer

const Wrap = styled.div`
    width:15.62vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0px 0px 5px grey;
    cursor:pointer;
    transition:.4s;
    &:hover{
        
    }

    .rent_con{
        padding:0 1.09vw 5vw;
        display: flex;
        flex-direction: column;
        row-gap:0.41vw;  
        position: relative;
        div{
            padding:0.93vw;
            font-size: var(--textsize20);
            font-weight: 600;
            color:white;
            display:flex;
            justify-content: center;
            background:rgba(50, 50, 50, 1);
            position: absolute;
            width:100%;
            left:0;
            bottom:0.7vw;
        }  
    }

    img{
        width:13vw;
        height:11vw;
        margin-top:0.8vw;
        margin-bottom:1vw;
    }
    p:nth-child(1){
        font-size: var(--textsize14);
        font-weight: 600;
    }
    p:nth-child(2),p:nth-child(3),p:nth-child(4),p:nth-child(5){
        font-size: var(--textsize13);
        font-weight: 600;
    }
    p:nth-child(6){
        font-size: var(--textsize13);
        font-weight: 600;
        

        
    }
    p font{
        color:rgba(0, 0, 0, 0.4);
    }
    @media only screen and (max-width:500px){
        width:44.4vw;
        height:69.44vw;
        padding-top:5vw;
        img{
        width:31.16vw;
        height:23.3vw;
        margin-top:0.8vw;
        margin-bottom:1vw;
    }
    .rent_con{
        padding:0 1.09vw 14vw;
        row-gap:1.38vw;  
        div{
            padding:2.93vw;
            font-size: var(--mtextsize11);           
            left:0;
            
        }  

        p:nth-child(1){
        font-size: 2.2vw;
        }
        p:nth-child(2),p:nth-child(3),p:nth-child(4),p:nth-child(5){
            font-size: 2.2vw;
        }
        p:nth-child(6){
            font-size: 2.2vw;
            
        }
    }

    }


`