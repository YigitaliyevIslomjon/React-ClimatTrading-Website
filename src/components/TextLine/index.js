import React from 'react'
import yellowline from '../assets/images/yellowline.png'
import './index.css'
function index({title}) {
    return (
        <div className='company_title_wrap'>
                        <div  className='company_title'>{title}</div>
                        <div className='company_img' >
                          <img src={yellowline} alt='rasm' />
                        </div>
                        
        </div>
    )
}

export default index
