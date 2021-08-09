
//import Signup from '../../Components/signup/signup.js' 



function Result (){
   let bool = localStorage.getItem('myVal');

     
    console.log(bool)

function delAcc(){
    localStorage.removeItem('myVal')
}

return(
    <div>
        
        <button onClick = {delAcc}>Log out </button>
        <h2>{bool}</h2>
         
    </div>
   
)
}

export default Result ;