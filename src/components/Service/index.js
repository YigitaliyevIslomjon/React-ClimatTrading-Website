import React from 'react'
import styled from 'styled-components'
import NavbarBottom from '../NavbarBottom'
import TextLine from '../TextLine/index'
import SqureProduct from '../Home/SqureProduct/SqureProduct'
import arendimg1 from '../assets/images/arendaimg1.png'
import arendimg2 from '../assets/images/arendaimg2.png'
import arrow from '../assets/images/arrow.png'
const ArrImg = [
    {img1:arendimg1},
    {img1:arendimg2},
    {img1:arendimg1},
    {img1:arendimg2},
    {img1:arendimg1},
    {img1:arendimg2}
]

function index() {
    return (
        <Wrapper>
            <NavbarBottom 
            title1='Главная / '
            title2='Аренда / '
            title3='Дизельные теплогенераторы'
            title4=''
            title5=''
            />
            <TextLine title='УСЛУГИ'/>
            <Wrap>
                {
                    ArrImg.map((item,index)=>{
                       return <SqureProduct  item={item} index={index} arrow={arrow}/>
                    })
                }
            </Wrap>
        </Wrapper>
    )
}

export default index

const Wrapper = styled.div`
    padding:0 15.4vw 0vw;
    @media only screen and (max-width:500px){
        padding:2vw 4vw 50vw 4vw;
        display:flex;
        flex-direction:column;
        row-gap:5vw;
    }
`

const Wrap = styled.div`
    margin:4.68vw 0 6.25vw 0;
    display:flex;
    flex-wrap:wrap;
    row-gap:4vw;
    justify-content:space-between;
`