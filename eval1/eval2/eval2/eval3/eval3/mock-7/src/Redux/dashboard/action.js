import { ADDATE, GETDATA, REMOVE, UPDATE } from "./actiontype";

export const getdata=()=>async(dispatch)=>{
let res=await fetch(`https://mock-node-depolyment.onrender.com/companies`);
let data=await res.json()
dispatch({type:GETDATA,payload:data})
}
export const adddata=(data)=>(dispatch)=>{
    fetch(`https://mock-node-depolyment.onrender.com/companies`,{
        method:"POST",
        headers:{
        "Content-Type":"application/json"}
        ,
        body:JSON.stringify(data)
    }).then((res)=>res.json()).then((res)=>dispatch({type:ADDATE,payload:res}))
}
export const deletedata=(id)=>(dispatch)=>{
    fetch(`https://mock-node-depolyment.onrender.com/companies/${id}`,{
        method:"DELETE",
        headers:{
        "Content-Type":"application/json"}
       
        
    }).then((res)=>res.json()).then((res)=>dispatch({type:REMOVE,payload:id}))   
}
export const updatedata=(id,change)=>(dispatch)=>{
    fetch(`https://mock-node-depolyment.onrender.com/companies/${id}`,{
        method:"PATCH",
        headers:{
        "Content-Type":"application/json"}
        ,
        body:JSON.stringify({...change})
    }).then((res)=>res.json()).then((res)=>dispatch({type:UPDATE,payload:res}))
}