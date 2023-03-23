import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate,NavLink, useNavigate } from 'react-router-dom';
import { register } from '../Redux/loginandregister/loginaction';

function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [user,setUser]=useState("");
    const navgiate=useNavigate()
    const dispatch=useDispatch();
    const registered=()=>{
        dispatch(register({email:email,password:password,username:user}))
        navgiate("/login")
    }
  return (
    <Box>
        <Input placeholder="enter username" type="text" onChange={(e)=>setUser(e.target.value)}/>
        <Input placeholder="enter email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <Input placeholder="enter password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={registered}>Register</Button>
    </Box>
  )
}

export default Register