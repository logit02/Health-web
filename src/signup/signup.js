import React from "react";
import '/Users/inesatoroyan/Desktop/React-app/src/signup/signup.css'


    let username ;
    let password ;
function Signup(){
    
    return(
        <div className='all_comps'>
         
            <div className='dv1'></div>

            <div className='sign_up_page'>
                <div className='parts'>
               <h1 className='title_sign_up'> Sign up</h1>

               
               <input className='input'
              name="username"
              value={username}
              type = "text"


                 />

                <input className='input'
                     name="password"
                     value={password}
                     type = "text"
                 />

                <input className='submit'
                    name="submit"
                
                    type = "submit"
                    onClick = {send_data}

                 />

                </div>          



            </div>

            <div className='dv2'></div>
        </div>
    )
}

function send_data(e){
    e.preventDefault();
    console.log(username)
}

export default Signup;

