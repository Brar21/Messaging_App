import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Adminprivate({children}) {
  const {admin}=useSelector((data)=>data.login)
  console.log(admin,"private")
  
  if(!admin){
  return  <Navigate to="/login"/>
  }
  
    return children
  
    
}

export default Adminprivate