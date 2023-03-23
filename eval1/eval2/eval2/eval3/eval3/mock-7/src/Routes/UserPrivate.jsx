import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function UserPrivate({children}) {
  const {admin,login}=useSelector((data)=>data.login)
  console.log(admin)
if(admin===true||login.email===""){
    return <Navigate to="/login"/>
}
return children
  
  
}

export default UserPrivate