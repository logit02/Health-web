import React from "react";
import {NavLink} from "react-router-dom";

class Navigator extends React.Component {
    render() {
        return (
            <header class='header'>


                <ul className='ul1'>

                    <li>
                        <h1 className='logo'>T</h1>
                    </li>
                    <li>
                        <NavLink to="/home" className='trafalgar'>Trafalgar</NavLink>
                    </li>

                </ul>
                <ul className='ul2'>
                    <li>
                        <NavLink to="/home" className='home1'>Home</NavLink>
                        </li>
                    <li>
                        <NavLink to="/home" className='home'>Find a doctor </NavLink> 
                        </li>
                    <li> 
                        <NavLink to="/home" className='home'>Testimonials</NavLink>
                        </li>
                    <li>
                        <NavLink to="/home" className='home'>About us</NavLink>
                        </li>
                    <li>
                        <NavLink to="/home" className='home'>Log In</NavLink>
                        </li>
                    <li>
                        <NavLink to="/home" className='sign_up'>Sign Up</NavLink>
                        </li>
                    
                </ul>




            </header>

        )
    }
}

export default Navigator;