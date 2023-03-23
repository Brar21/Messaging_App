import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button ,Box} from '@chakra-ui/react'
import { Alert, AlertIcon,Stack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/loginandregister/loginaction';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const {admin,error}=useSelector((data)=>data.login)
    const logindata=JSON.parse(localStorage.getItem("logindata"))
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const submit=()=>{
        dispatch(login({email:email,password:password}))
        
        if(email==="admin@stockbroker.com"&&password==="admin123"){
            if(!error){
                alert( "login successfully")
               navigate("/dashboard")
            }else {
                alert( "login failed") 
            }
           
        }else{
            if(!error){
              
              
               alert( "login successfully")
             
                 
               navigate("/stocks")
            }else {
                alert( "login failed") 
            }
        }
    }
  return (
    <Box>
<Heading>
    Login
</Heading>
<Input placeholder="enter email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
<Input placeholder="enter passowrd" type="password" onChange={(e)=>setPassword(e.target.value)}/>
<Button onClick={submit}>Login</Button>
</Box>
  )
}

export default Login