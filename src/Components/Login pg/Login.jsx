import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import "./Leftlogin.css"

const Login = () => {
  const  navigate=useNavigate();
  const [username , SetUsername]=useState("")
  const [password , SetPassword]=useState("")
  const handlelogin=()=>{
    if(username !=="" && password !==""){
      navigate('/home')
    }
    else{
      alert("invalid")
    }
  }
  
  
  return (


    <div className='login'>
        <h4 className='log'>Log into Instagram</h4>

        <input type="text" placeholder= 'Mobile number,username or email address' className='name'
   value={username} onChange={(e)=>SetUsername(e.target.value)}
   />

        <input type="text" placeholder= 'Password' className='pass'
   value={password} onChange={(e)=>SetPassword(e.target.value)}/>

        <button className='btn' onClick={handlelogin}>Log in</button>

        <h4 className='forgot'>Forgot password?</h4>

        <button className='facebook-btn'><FaFacebook color='#1A8FFB'/>   Log in with Facebook</button>

        <button className='create-btn'>Create new account</button>
        
        <h5 className='meta'><FaMeta className='fameta'/> Meta</h5>
        
   

    </div>
  )
} 

export default Login