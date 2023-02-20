// import { stripBasename } from '@remix-run/router'
import React, { useState } from 'react'

function Register() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [gender,setGender]=useState("");
    const register=()=>{
        fetch("https://ill-ruby-penguin-wear.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify({name,email,password,gender}),
            headers:{
                "Content-Type":"application/json"
            }
            
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))

    }
  return (
    <div>
       <h1> Register</h1>
       <input placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
       <input placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <input placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <input placeholder='enter gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
<button onClick={register}>register</button>
        </div>
  )
}

export default Register