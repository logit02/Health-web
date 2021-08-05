import React from "react";
import {NavLink} from "react-router-dom";
import './admin.css'
import mard from '../../Components/Opinions/image 1.png';

import Edit from './edit.js';

import {
    Switch,
    Route,
    
} 
from "react-router-dom";

function Admin(){
    return(
        <div className='all'>
            <div className='nav_part'>
                <div className='items_nav'>
                <NavLink to="/home" className='items_left_bar'>Overview</NavLink>
                <NavLink to="/admin/edit" className='items_left_bar'>Edit</NavLink>
                <NavLink to="/home" className='items_left_bar'>Customize </NavLink>
                <NavLink to="/home" className='items_left_bar'>Ideas </NavLink>
                <NavLink to="/home" className='items_left_bar'>Website </NavLink>
                </div>
            
                
            </div>
            <div className='use_part'>
                <div className ='top_bar'>
                    <div className ='left'>
                        
                        <p className='text'>Trafalgar</p>
                    </div>
                    <div className='right'>
                    <p className='name'> Artur Sargsyan</p>
                        <img src = {mard} alt='#' className='mard' />
                        
                    </div>

                </div>


                <div className ='space'>
            
            <Switch>
                <Route path="/admin/edit">
                 
                    <Edit />
                    
                </Route>

                
             </Switch>
        
            </div>
        </div>
            </div>


    )
}

export default Admin ;