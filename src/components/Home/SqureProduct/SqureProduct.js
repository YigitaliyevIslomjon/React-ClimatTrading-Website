import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function SqureProduct({item,index,arrow}) {
    return (
        <ProBox  key={index}>
            <Link className='home_pro_img'>
                <img  src={item.img1} alt='rasm' />
            </Link>
            <Link className='home_pro_desc'>
                <span className='home_pro_desc_span1'>Дизельные тепловые пушки</span>
                <span className='home_pro_desc_span2' >
                    <img src={arrow} alt='rasm'/>
                </span>
            </Link>             
        </ProBox>
    )
}

export default SqureProduct

const ProBox = styled.div`
    width:21.8vw;
    height:23vw;
    box-shadow:-2px 5px 10px grey;
    transition:.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &:hover{
        transform:scale(1.04);
        opacity:0.8;
    }

    .home_pro_img{
        background:white;
        display: flex;
        justify-content: center;
        img{
        /* width:19vw;
        height:17vw; */
        width:100%;
        height:100%;
        object-fit:cover;
        cursor: pointer;
        
        }
        
    }
    .home_pro_desc{
        cursor: pointer;
        display: flex;
        background:#EAEAEA;
        height:4.37vw;  
        text-decoration:none;
    
    &:hover .home_pro_desc_span2{
            background: #CF0028;
        }
        
        
        .home_pro_desc_span1{
            flex:1;
            
            display: flex;
            align-items: center;
            justify-content: center;
            font-size:var(--textsize16);
            font-style: normal;
            font-weight: 600;

        }
        .home_pro_desc_span2{
            width:5.2vw;
            height:4.37vw;
            background: #FFA825;
            transition:.4s;
            display:flex;
            justify-content:center;
            align-items:center;
            
            
            img{
                 width:1.92vw;
            }
        }
        
    }

    @media only screen and (max-width:500px){
        width:44.4vw;
        height:50.8vw;

        .home_pro_desc{
            height:9.72vw;  

            .home_pro_desc_span1{
                font-size:2.7vw;
                padding:0 1.6vw;

            }
            .home_pro_desc_span2{
                width:11.38vw;
                height:9.73vw;
                img{
                 width:5.83vw;
                }
            }
            
        
        }
    
    }

`