import React, { useState } from 'react'

function Createposts() {
    const [title,setTitle]=useState("");
    const [device,setDevice]=useState("");
    const [body,setBody]=useState("")
    const posted=()=>{
        fetch("https://ill-ruby-penguin-wear.cyclic.app/posts/create",{
            method:"POST",
            body:JSON.stringify({title,body,device}),
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
            
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))  
    }
  return (
    <div>
        <h1>Createposts</h1>
        <input placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <input placeholder='enter device' value={device} onChange={(e)=>setDevice(e.target.value)}/>
       <input placeholder='enter body' value={body} onChange={(e)=>setBody(e.target.value)}/>
<button onClick={posted}>post</button> 

    </div>
  )
}

export default Createposts