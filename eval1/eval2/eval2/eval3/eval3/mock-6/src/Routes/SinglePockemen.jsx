import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
function SinglePockemen() {
    const [data,setData]=useState({})
    const [query,setQ]=useState("")
let fav=JSON.parse(localStorage.getItem("fav"))||[]

    const val=useParams();
    console.log(val.pokemon_name)
    useEffect(()=>{
      
        
async function getData(q){
   try{
    let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    let data=await res.json();
    console.log(data)
    setData(data)
  
}
    catch(err){
console.log(err)


    }
}

getData(val.pokemon_name)
    },[val.pokemon_name])
    const search=async()=>{
        try{
            let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            let data=await res.json();
            console.log(data)
            setData(data)
          
        }
            catch(err){
        console.log(err)
        
        
            } 
    }
    const addfav=(el)=>{
fav.push(el)
localStorage.setItem("fav",JSON.stringify(fav))
    }
  return (
    <div>
        <input placeholder='search here' type={"text"} onChange={(e)=>setQ(e.target.value)} value={query}/>
        <button onClick={search}>search</button>
        <img src={"https://img.favpng.com/21/2/9/bookmark-computer-icons-favicon-aptoide-google-play-png-favpng-GYJ8qR3jxEHA2AJkycrsAbXzv_t.jpg"} width="50" onClick={()=>addfav(data)}/>
        <h1>Name:{data.name}</h1>
        <img src={data}/>
        <h1>id:{data.id}</h1>
        <h1>Base Experience:{data.base_experience}</h1>
        <h1>hp:{data.hp}</h1>
        <h2>Attack Score:{data.attack_score}</h2>
        <h2>Defence Score:{data.defence_score}</h2>
        <h2>Special-Attack Score:{data.special_defence_score}</h2>
        <h2>Special-Defence Score:{data.special_defence_score}</h2>
        <h3>speed:{data.speed}</h3>
        <p>
            Ability:{data.abilities?.map((el)=>(el.ability.name), )}
        </p>
        <p>
            moves:{data.moves?.map((el)=>(el.move.name), )}
        </p>
<h1>Weight:{data.weight}</h1>
<h1>Height:{data.height}</h1>

    </div>
  )
}

export default SinglePockemen