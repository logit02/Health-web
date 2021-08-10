import React from "react";
import './signup.css'
import{  useState } from "react";

    
function Signup(){
    let [isauth, setAuth] = useState(false)
   let [val, setVal] = useState()
   let [pass, setPass] = useState()

   

    function handleInput(event) {
         setVal(event.target.value)
         
        }

        function handlePass(event) {
            setPass(event.target.value)
            
           }
       
         

   function handleClick(){
      if (val === 'inesa' && pass ==='12345678'){
          setAuth(true)
          alert('Successfully logged in')
          window.location = '/home';
         

      }else{
         alert('Username or password are incorrect!')
      }

    }
    
    if(isauth){
        localStorage.setItem('myVal', JSON.stringify(isauth));
    }
    
    return(
               <div className='dv1' value ={isauth}>

            <div className='sign_up_page'>
                <div className='parts'>
               <h1 className='title_sign_up'> Join now ! It's free.</h1>

               
               <input className='input'
              name="username"
              onChange = {handleInput}
              placeholder ='username'
              type = "text" />

            <input className='input'
              name="password"
              onChange = {handlePass}
              placeholder ='password'
              type = "password" />

                <input className='submit'
                    name="submit"
                    onClick ={handleClick}
                    type = "submit" />
                </div>          
            </div>

            <div className='dv2'></div>
        </div>
    )
}



export default Signup;


