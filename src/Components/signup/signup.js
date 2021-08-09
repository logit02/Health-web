import React from "react";
import './signup.css'
import{  useState } from "react";

    
function Signup(){
    let [isauth, setAuth] = useState(false)
   let [val, setVal] = useState()


   

    function handleInput(event) {
         setVal(event.target.value)
         
        }
       
         

   function handleClick(){
      if (val === 'inesa'){
          setAuth(true)
          console.log(isauth)
         
          console.log('ha')
      }else{
          console.log('che')
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
              type = "text" />

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


