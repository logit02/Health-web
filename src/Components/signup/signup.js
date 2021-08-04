import React from "react";
import './signup.css'
import{ useEffect, useState } from "react";

    
function Signup(){

    const [merchants, setMerchants] = useState(false);
         useEffect(() => {
             getMerchant();
            }, []);
    function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }

    /*let [usernameReg, setUsernameReg] = useState("");
    let [passwordReg, setPasswordReg] = useState("");

    useEffect(()=>{
        fetch('http://localhost:5432/api/world')
        .then(()=>{
            console.log('EXAAAV')
        })
        .catch((e)=>{
            console.log('CHEXAV')
        })
    }, [])
    */
    return(
        <div className='all_comps'>

{merchants ? merchants : 'There is no merchant data available'}
         
        {/* 
          
         
            <div className='dv1'></div>

            <div className='sign_up_page'>
                <div className='parts'>
               <h1 className='title_sign_up'> Sign up</h1>

               
               <input className='input'
              name="username"
              type = "text"
              onChange = {(e) => setUsernameReg(e.target.value)}



                 />

                <input className='input'
                     name="password"
                     onChange = {(e) => setPasswordReg(e.target.value)}
                     type = "password"
                 />

                <input className='submit'
                    name="submit"
                
                    type = "submit"
                   

                 />

                </div>          



            </div>

            <div className='dv2'></div>

    */}
        </div>
    )
}



export default Signup;


