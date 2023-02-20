import React, { useEffect, useState } from 'react'

function Allposts() {
    const [data,setData]=useState([]);
    const [device,setDevice]=useState("");

    useEffect(()=>{
fetch("https://ill-ruby-penguin-wear.cyclic.app/posts",{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")  
    }
}).then((res)=>res.json()).then((res)=>setData(res)).catch((err)=>console.log(err))  
    },[])
    const deleted=(id)=>{
        fetch(`https://ill-ruby-penguin-wear.cyclic.app/posts/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                        "Authorization":localStorage.getItem("token")  
            }
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))  
    }
const updated=(id)=>{
    fetch(`https://ill-ruby-penguin-wear.cyclic.app/posts/update/${id}`,{
        method:"PATCH",
        body:JSON.stringify({device:device}),
        headers:{
            "Content-Type":"application/json",
                    "Authorization":localStorage.getItem("token")  
        }
    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))    
}
  return (
    <div>
        <h1>Allposts</h1>
{
    data?data.map((el)=><>
    <h1>title:{el.title}</h1>
    <h1>device:{el.device}</h1>
    <h1>body:{el.body}</h1>
    <button onClick={()=>deleted(el._id)}>delete</button>
    <input placeholder='enter device' value={device} onChange={(e)=>setDevice(e.target.value)}/>

    <button onClick={()=>updated(el._id)}>edit</button>

    </>):"no posts"
}
        </div>
  )
}

export default Allposts