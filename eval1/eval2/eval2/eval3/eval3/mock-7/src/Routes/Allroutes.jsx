import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Portfolio from '../Pages/Portfolio'
import Register from '../Pages/Register'
import Stocks from '../Pages/Stocks'
import Adminprivate from './Adminprivate'
import UserPrivate from './UserPrivate'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Adminprivate><Dashboard/></Adminprivate>}/>
            <Route path="/portfolio" element={<UserPrivate><Portfolio/></UserPrivate>}/>
            <Route path="/stocks" element={<UserPrivate><Stocks/></UserPrivate>}/>
            <Route path="/login" element={<Login/>}/>

        </Routes>
    </div>
  )
}

export default Allroutes