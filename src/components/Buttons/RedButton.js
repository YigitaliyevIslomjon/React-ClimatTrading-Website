import React from 'react'
import {Link} from 'react-router-dom'
import './redbutton.css'

function RedButton({title}) {
    return (
        <Link  className='see_catolog_btn'>
            {title}
        </Link>  
    )
}

export default RedButton

