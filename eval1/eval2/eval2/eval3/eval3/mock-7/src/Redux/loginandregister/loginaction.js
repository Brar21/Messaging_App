import { LOGIN, LOGIN_ERROR, REGISTER } from "./loginactiontype"

export const login=(data)=>(dispatch)=>{
    if(data.email==="admin@stockbroker.com"&&data.password==="admin123"){
        dispatch({type:LOGIN,payload:data})

    }
    else {
fetch(`https://mock-node-depolyment.onrender.com/users?email=${data.email}&password=${data.password}`)
.then((res)=>res.json()).then((res)=>(dispatch({type:LOGIN,payload:data})))
.catch((err)=>dispatch({type:LOGIN_ERROR}))
    }
}
export const register=(data)=>(dispatch)=>{
    fetch(`https://mock-node-depolyment.onrender.com/users`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then((res)=>res.json()).then((res)=>(dispatch({type:REGISTER,payload:res})))
    .catch(err=>console.log(err))
}