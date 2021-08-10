import React, { Fragment } from 'react'; 
import Navigator from '../../Components/Navigation/nav.js'
import {NavLink} from 'react-router-dom';
import './acc.css'
import {
    Switch,
    Route,
    
} 
from "react-router-dom";

import Logout from '../Logout/logout.js'

const NavigatorNew = () => {
    return (
        <div className ='comps'>
                <Navigator />
                    <div className ='menu'>
                    <NavLink to="/home" className='elements'>Home</NavLink>
                    <NavLink to="/hodme" className='elements'>Settings</NavLink>
                    <NavLink to="/myaccount/logout" className='elements'>Logout</NavLink>

                    </div>
                <div>
                <Switch>
                    <Route path="/myaccount/logout">
            
                    <Logout />
                    </Route>

            
                </Switch>
                </div>
    
        
           </div>
    )
}


const NotLogged = () => {
    return(
    <div className='comps'>
    <Navigator />
    <h3>You are not logged in ! </h3>
    </div>
    )
}

function Account(){
   
    return(
            localStorage.getItem('myVal') ?  <NavigatorNew /> : <NotLogged />
    )   
        
}

export default Account;