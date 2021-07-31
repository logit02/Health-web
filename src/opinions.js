import React from "react";

import mard from '/Users/inesatoroyan/Desktop/React-app/src/image 1.png'

import '/Users/inesatoroyan/Desktop/React-app/src/opinions.css'



function Opinions(){
    return(
        <div className='heh'>

            <div className='text_part'>
            <h1>What our customer are saying</h1>
            <p className='line_break'></p>
            </div>

            <div className='rec_part'>
            <ul className='ul'>
                    <li>
                    <img src = {mard} alt='#' className='mard' />
                    </li>
                    <li className='name'>  Edward Newgate </li>
                
            </ul>
            <div className='p'>
                <p className='long'> “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
            </div>

            </div>
        </div>
    )
}

export default Opinions;