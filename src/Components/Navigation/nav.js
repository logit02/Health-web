import React from "react";
import {NavLink} from "react-router-dom";


function Navigator()  {

    let status = localStorage.getItem('myVal')
    
        return (
            <header className='header'>


                <ul className='ul1'>

                    <li>
                        <h1 className='logo'>T</h1>
                    </li>
                    <li>
                        <NavLink to="/home" className='trafalgar'>Trafalgar</NavLink>
                    </li>

                </ul>
                <ul className='ul2'>
                    
                        <NavLink to="/home" className='home1'>Home</NavLink>
                     
                        <NavLink to="/home" className='home'>Find a doctor </NavLink> 

                        <NavLink to="/home" className='home'>Testimonials</NavLink>
                       
                        <NavLink to="/home" className='home'>About us</NavLink>
                     
                        {!status &&  <NavLink to="/signup" className='home'>Log In</NavLink>}
                     
                        {!status && <NavLink to="/signup" className='sign_up'>Sign Up</NavLink>}

                        {status && <NavLink to="/myaccount" className='sign_up'>My account</NavLink>}

                        

                        

                        
                        
                    
                </ul>




            </header>

        )
    }


export default Navigator;