import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Favorites from '../Pages/Favorites'
import Pockemon from '../Pages/Pockemon'
import Types from '../Pages/Types'
import SinglePockemen from './SinglePockemen'
import SingleTypes from './SingleTypes'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/pokemon" element={<Pockemon/>}/>
            <Route path="/types" element={<Types/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/pokemon/:pokemon_name" element={<SinglePockemen/>}/>
<Route path="/types/:types_id" element={<SingleTypes/>}/>

        </Routes>
    </div>
  )
}

export default Allroutes