import { Button, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Getprofile() {
    const [data,setData]=useState({})
let user=JSON.parse(localStorage.getItem("loginuser"))||{};
function getdata(id){
    fetch(`https://mushy-goat-overshirt.cyclic.app/getprofile/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        
        }
       
        
        }).then((res)=>res.json()).then((res)=>setData(res)).catch((err)=>
        console.log(err))
}
useEffect(()=>{
    getdata(user.user._id)
},[user.user_id])


console.log(data)
  return (
    <>
    <Image src={data.url?data.url:`https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2247726673.jpg`} w="100px"/>
    <Text>Name:{data.name}</Text>
    <Text>Email:{data.email}</Text>
    <Text>Bio:{data.bio}</Text>

<Link to="/editprofile"><Button>Edit profile</Button></Link>
    </>
  )
}

export default Getprofile