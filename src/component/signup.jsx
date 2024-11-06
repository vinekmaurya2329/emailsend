import React, { useEffect, useState } from 'react';
import './signup.css'
import Swal from 'sweetalert2';
function SignUp() {
  const [name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  function signUpHandler(e){
    e.preventDefault()
  if(!name && !phone ){
   return  Swal.fire('Opps!','Enter required fields','info')
  }
  
  Swal.fire('Congrats','Request sent successfully','success')
  setTimeout(()=>{
  window.location.reload()
  },2000)
  }
  
     
    
  return (
    <div className='signUp-main'>
        <div className="sign-up-container">
           <form onSubmit={signUpHandler}>
            
           <div className="signUp-lower">
           <div className='input-container'>
                 <i class="ri-user-fill"> | </i>
                <input type="text" onc onChange={(e)=>setName(e.target.value)}   name='name' placeholder=' Name'/>
            </div>
            <div className='input-container'>
                <i class="ri-phone-fill"> | </i>
                 <input type="text" onChange={(e)=>setPhone(e.target.value)}   name='phone' placeholder='Phone no.' />
            </div>
            <div className='input-container'>
                <i class="ri-mail-fill"> | </i>
                 <input type="text" onChange={(e)=>setEmail(e.target.value)}   name='email' placeholder='Email (optional)' />
            </div>
            <div className='input-container'>
                <i class="ri-lock-fill"> | </i>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}   name='password' placeholder='Address' />
            </div>
            <button type='submit' className='signUp-btn'>Request Account Deletion</button>
           </div>
           </form>
        </div>

    </div>
  )
}

export default SignUp