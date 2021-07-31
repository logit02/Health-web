import React from "react";
import {NavLink} from "react-router-dom";
import image from '/Users/inesatoroyan/Desktop/React-app/src/trafalgar-illustration sec02 1.png'
import '/Users/inesatoroyan/Desktop/React-app/src/land2.css'

function Land2(){
    return(<div className='str_land'>

        <div className='image'>
            <img src={image} alt='#' className='vector_image' />
        </div>

        <ul className='ul_land'>
            <h1 className='title'>Leading healthcare providers</h1>
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            <NavLink to="/home" className='land2_but'>Learn more</NavLink>
        </ul>

    </div>)
}

export default Land2;