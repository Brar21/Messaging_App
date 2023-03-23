import { GETDATA } from "./actionType"

export const getdata=(amount,difficulty,category,username)=>(dispatch)=>{
fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
.then((res)=>res.json()).then((res)=>
dispatch({type:GETDATA,payload:{...res,username:username,amount:amount,difficulty:difficulty,category:category}}))
.catch((err)=>console.log(err))
}
