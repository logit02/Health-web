import React from "react";
import {NavLink} from "react-router-dom";
import  { Component } from 'react';


class  Edit extends Component {
    constructor(props) {
        
        super(props);
          this.state = {
            value: ''
          };
          
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
         
      }
      

    handleChange(event){
        
        this.setState({
            value: event.target.value,
           
            
        })
        
        
    }

    handleSubmit(event){
        console.log(this.state.value)
        event.preventDefault();
        
    }

   


    render(){
    
        return(
            <div className = 'all_items'>
                <div className= 'space'>

                    <h1> {this.state.value}</h1>
                    
                   
                </div>
            <div className = 'input_image'>
                
    
                <input type = 'text'
                
                value = {this.state.value}
                onChange = {this.handleChange}
                className = 'input'>

                </input>

                <button type='button' className ='submit_image' onClick = {this.handleSubmit} >Submit</button>

            </div>
            </div>
        )
    }    
}





export default Edit; 