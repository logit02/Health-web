import React from "react";
import {NavLink} from "react-router-dom";
import './footer.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='Copyright'>
                
                <h2 className='t_title'>Trafalgar</h2>
                
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className='p2'>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
            <div className='Company'>
                <ul>
                    <h1>Company</h1>
                    <li> <NavLink to="/home" className='element'>About</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>Testimonials</NavLink></li>
                    <li> <NavLink to="/home" className='element'>Find a doctor</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>Apps</NavLink></li>
                </ul>
            </div>
            <div>
            <ul>
                    <h1>Region</h1>
                    <li> <NavLink to="/home" className='element'>Yerevan</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>Gyumri</NavLink></li>
                    <li> <NavLink to="/home" className='element'>Lion</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>Bali</NavLink></li>
                </ul>
            </div>
            <div>
            <ul>
                    <h1>Help</h1>
                    <li> <NavLink to="/home" className='element'>Help center</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>Contact Support</NavLink></li>
                    <li> <NavLink to="/home" className='element'>Insructions</NavLink> </li>
                    <li> <NavLink to="/home" className='element'>How it works</NavLink></li>
                </ul>
            </div>
            


        </div>
    )
}
export default Footer;