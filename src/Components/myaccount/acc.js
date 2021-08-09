import React from 'react'; 
import Navigator from '../../Components/Navigation/nav.js'
import {NavLink} from 'react-router-dom';
import './acc.css'

function Account(){
   
    return(
            
            (localStorage.getItem('myVal') && ( <div className ='comps'>
                <Navigator />
                    <div className ='menu'>
                    <NavLink to="/login" className='elements'>Logout</NavLink>
                    </div>
                </div>)
             ) || 
            (!localStorage.getItem('myVal') && ( 
                <div className='comps'>
                <Navigator />
                <h3>You are not logged in ! </h3>
                </div>
            ))

            
        )   
        
}

export default Account;