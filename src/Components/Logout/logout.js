
import './logout.css' 



function Logout (){
   
function delAcc(){
    localStorage.removeItem('myVal')
    alert('Successfully logged out')
    window.location = '/home';
       
}

return(
    <div className='wrap'>
        <p className='inf'>Are you sure you want to logout ?</p>
        <button className='but' onClick = {delAcc}>Log out </button>
        
         
    </div>
   
)
}

export default Logout ;