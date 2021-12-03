import React from 'react'
import NavbarBottom from '../NavbarBottom/index'
import styled from 'styled-components'
import TextLine from '../TextLine/index'
import arendaimg1 from '../assets/images/arendaimg1.png'
import arendaimg2 from '../assets/images/arendaimg2.png'
function Arenda() {
    return (
        <Wrapper>
            <NavbarBottom title1='Главная /' title2='Аренда /' title3='  Дизельные теплогенераторы' title4='' title5=''/>
            <TextLine title='Видео'/>
            <YouTobeVideo>
                <div className='youtobe_video'>
                    <iframe src="https://www.youtube.com/embed/sG-Bb_oLbps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='youtobe_video'>
                    <iframe src="https://www.youtube.com/embed/I8r7TfqK2YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <div className='youtobe_video'>
                    <iframe src="https://www.youtube.com/embed/eqbDFAJz2nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='youtobe_video'>
                    <iframe src="https://www.youtube.com/embed/Fa3Y6Z9oHYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               
                </div>
            </YouTobeVideo>
            <TextLine title='Объекты'/>

            <Wrap>
                <img src={arendaimg1} alt='rasm'/>
                <img src={arendaimg2} alt='rasm'/>
                <img src={arendaimg1} alt='rasm'/>
                <img src={arendaimg2} alt='rasm'/>
                <img src={arendaimg1} alt='rasm'/>
                <img src={arendaimg2} alt='rasm'/>
            </Wrap>
        </Wrapper>
    )
}

export default Arenda

const Wrapper = styled.div`
    padding:0 15.4vw 0vw;
    display:flex;
    flex-direction: column;
    row-gap:4vw;
    @media only screen and (max-width:500px){
        padding:0 4vw 0vw;

    
    }

`

const YouTobeVideo = styled.div`
    display: flex;
    justify-content: space-between;
    margin:4.1vw 0 5.7vw 0;

    .youtobe_video{
        iframe{
            width:16vw;
            height:11.45vw;
        }
    }
    @media only screen and (max-width:500px){
        flex-wrap:wrap;
        row-gap:2.5vw;
        .youtobe_video{
        iframe{
            width:44vw;
            height:27.7vw;
        }
    }

    }

`

const Wrap = styled.div`
    margin:3.38vw 0 6.25vw 0;
    display: flex;
    flex-wrap: wrap;
    gap:1.7vw;
    justify-content: space-between;
    img{
        width:21.45vw;
        height:20.6vw;
    }
    @media only screen and (max-width:500px){
        gap:3.7vw;

        img{
        width:44vw;
        height:41.6vw;
    }
    }

`