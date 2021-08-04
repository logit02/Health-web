import React from "react";
import {NavLink} from "react-router-dom";
import image from './trafalgar-header illustration 1.png'
import './land_style.css'


function Land(){
    return(<div className='str_land'>

            <ul className='ul_land'>
                <h1 className='title'>Virtual healthcare for you</h1>
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <NavLink to="/home" className='consult'>Consult today</NavLink>
            </ul>
        <div className='image'>
            <img src={image} alt='#' className='vector_image' />
        </div>
    </div>)
}

export default Land;


