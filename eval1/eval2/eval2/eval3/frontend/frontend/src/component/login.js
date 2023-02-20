import React, { useState } from 'react'

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const login=()=>{
        fetch("https://ill-ruby-penguin-wear.cyclic.app/users/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
            
        }).then((res)=>res.json()).then((res)=>localStorage.setItem("token",res.token)).catch((err)=>console.log(err))
  
    }
  return (
    <div>
        <h1>Login</h1>
        <input placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <input placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={login}>login</button> 
        </div>
  )
}

export default Login