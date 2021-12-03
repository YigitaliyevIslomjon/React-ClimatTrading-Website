import React from 'react'
import styled from 'styled-components'
import NavbarBottom from '../NavbarBottom'
import TextLine from '../TextLine/index'
import telephone from '../assets/images/telephone.png'
import messege from '../assets/images/message.png'
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Wrapper>
            <NavbarBottom 
            title1='Главная / '
            title2='Аренда / '
            title3='Дизельные теплогенераторы'
            title4=''
            title5=''
            />
            <TextLine title='Контакты'/>
            <Wrap>
                <WrapLeft>     
                    <div className='contact_data_1'>
                        <p>+7 (499) 347-25-62</p>    
                        <p>+7 (926) 008-81-46</p>    
                        <p>sales@climattrading.ru</p>    
                        <p>24/7</p>    
                    </div>
                    <Form>
                        <div className='form_first'>отправить заявку</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder='Имя' {...register("FirstName")} />
                            <input type="text" placeholder='Имя' {...register("LastName")} />
                            <input type="text" placeholder='Телефон' {...register("Telephone")} />
                            <input type="email" placeholder='E-mail' {...register("e-mail")} />
                            <textarea  placeholder='Сообщение' {...register("textarea")} />                        
                            <input type="submit" value='отправить заявку'/>
                        </form>
                    </Form>              
                </WrapLeft>
                <WrapRight>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48517.34802358749!2d70.8961051280188!3d40.5342039479288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baeeeb2e1c3e7f%3A0x816d723cc5842908!2sKokand%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1638378681852!5m2!1sen!2s"  allowfullscreen="" loading="lazy">
                    
                </iframe>
                </WrapRight>
            </Wrap>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
    padding:0 15.4vw 0vw;
    @media only screen and (max-width:500px){
        padding:0 4vw 100vw;
        display:flex;
        flex-direction:column;
        row-gap:5vw;
    }

`
const Wrap = styled.div`
    margin:1.62vw 0 4.2vw 0;

    display:flex;
    justify-content:space-between;
    column-gap:5.05vw;
    @media only screen and (max-width:500px){
        flex-direction:column;

    }

`
const Form = styled.div`
    width:29.27vw;
    padding:2.24vw 2.6vw;
    display:flex;
    flex-direction:column;
    box-shadow:0 0 10px lightgrey;
    .form_first{
        font-size: var(--textsize30);
        font-weight: 600;
        text-transform: uppercase;
    }
    form{
        input{
            margin-top:0.52vw;
            width:24.06vw;
            height:3.12vw;
            padding-left:0.93vw;
            font-size: var(--textsize18);
            font-weight: 400;     
        }
        textarea{
            margin-top:0.52vw;
            padding:1vw 0 0 0.93vw;
            width:24.06vw;
            height:5.36vw;
            font-size: var(--textsize18);
            font-weight: 400;
        }
        input[type='submit']{
            width:15.26vw;
            height:3.12vw;
            background:rgba(207, 0, 40, 1);
            color:white;
            font-size: var(--textsize24);
            font-weight: 600;
            outline:0;
            border:0;
            text-transform: uppercase;
            &:hover{
                box-shadow:2px 2px 10px lightgrey;
            }

        }
    }
    @media only screen and (max-width:500px){
        width:100%;
        align-items: center;
        /* margin-left:-10vw; */
        margin-top:8vw;
        padding:2.24vw 0vw;
        .form_first{
        font-size: var(--mtextsize20);
        
        }
        form{
            display:flex;
            flex-direction:column;
            align-items:center;
            row-gap:5vw;
        input{
            margin-top:2.7vw;
            width:80vw;
            height:14.6vw;
            padding-left:5vw;
            font-size: var(--mtextsize18);
        }
        textarea{
            margin-top:2.7vw;
            padding:2vw 0 0 5vw;
            width:80vw;
            height:26vw;
            font-size: var(--mtextsize18);
        }
        input[type='submit']{
            width:80vw;
            height:14.6vw;
            display:flex;
            align-items:center;
            font-size: var(--mtextsize24);
        }
    }
}
   
`
const WrapLeft = styled.div`
    width:30vw;
    display:flex;
 
    flex-direction:column;

    .contact_data_1{
        justify-content:space-between;
        display:flex;
        flex-wrap:wrap;
        row-gap:1.56vw; 
        column-gap:0.5vw;
        margin: 0 0 2.7vw 0;
        & p{
            font-size: var(--textsize16);
            font-weight: 600;
        }

        & p:nth-child(1),& p:nth-child(2){
            display:flex;
            align-items:center;
            column-gap:0.84vw;
        }

        & p:nth-child(1):before,& p:nth-child(2):before{
            display:flex;
            align-items:center;
            content:url(${telephone});
            height:1.04vw;
            width:1.04vw;
        }

        & p:nth-child(3),& p:nth-child(4){
            display:flex;
            align-items:center;
            column-gap:0.84vw;
        }

        & p:nth-child(3):before, & p:nth-child(4):before{
            content:url(${messege});
            height:1.04vw;
            width:1.04vw;
        }
        & p:nth-child(4){
            margin-right: 5.4vw;
        }
      
    }
    @media only screen and (max-width:500px){
        width:100%;
        .contact_data_1{
            flex-direction:column;
            row-gap:8vw;

            & p{
            font-size: var(--mtextsize16);
            display:flex;
            align-items:center;
           
            }

            & p:nth-child(1),& p:nth-child(2){
                display:flex;
                align-items:center;
                column-gap:6vw;
            }

            & p:nth-child(1):before,& p:nth-child(2):before{
                display:flex;
                align-items:center;
                content:url(${telephone});
                height:1.04vw;
                width:1.04vw;
            }

            & p:nth-child(3),& p:nth-child(4){
                display:flex;
                align-items:center;
                column-gap:6vw;
            }

            & p:nth-child(3):before, & p:nth-child(4):before{
                content:url(${messege});
                height:100%;
                width:1.04vw;
            }
            & p:nth-child(4){
                margin-right: 5.4vw;
            }

        }

    }
`
const WrapRight = styled.div`
    flex:1;
    position:relative;
    iframe{
        position:absolute;
        width:48.24vw;
        height:41.6vw;
        border:0;
        
    }
    @media only screen and (max-width:500px){
        margin-top:30vw;
        iframe{
            
            width:100%;
            height:97vw;

        }
    }
`