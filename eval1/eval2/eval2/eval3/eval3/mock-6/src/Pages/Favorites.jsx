import React, { useState } from 'react'
import FavoritiesCard from '../component/FavoritiesCard'

function Favorites() {
    let fav=JSON.parse(localStorage.getItem("fav"))||[] 
    console.log(fav)
  return (
    <div>
{
    fav&&fav.map((el)=>(<FavoritiesCard {...el}/>))
}
    </div>
  )
}

export default Favorites