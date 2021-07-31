import React from "react";
import {NavLink} from "react-router-dom";
import image from '/Users/inesatoroyan/Desktop/React-app/src/trafalgar-illustration sec03 1.png'
import '/Users/inesatoroyan/Desktop/React-app/src/land_style.css'

function Land3(){
    return(<div className='str_land'>

        <ul className='ul_land'>
            <h1 className='title'>Download our mobile apps</h1>
            <p> Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
            <NavLink to="/home" className='download'>Download</NavLink>
        </ul>
        <div className='image'>
            <img src={image} alt='#' className='vector_image' />
        </div>
    </div>)
}

export default Land3;