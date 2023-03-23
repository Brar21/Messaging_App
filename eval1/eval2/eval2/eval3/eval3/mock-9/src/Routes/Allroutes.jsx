import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import Quiz from '../Pages/Quiz'
import Results from '../Pages/Results'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/results" element={<Results/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
           
           

        </Routes>
    </div>
  )
}

export default Allroutes