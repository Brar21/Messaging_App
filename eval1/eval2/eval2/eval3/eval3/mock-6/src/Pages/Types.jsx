import React, { useEffect, useState } from 'react'
import TypesCard from '../component/TypesCard';

function Types() {const [data,setData]=useState([]);
    const [load,setload]=useState(false);
   
    useEffect(()=>{
        setload(true)
async function getData(){
   try{
    let res=await fetch(`https://pokeapi.co/api/v2/type`);
    let data=await res.json();
    setData(data.results)
    setload(false)
}
    catch(err){
console.log(err)
setload(false)
    }
}
getData()
    },[])

   
    if(load){
        return <h1>...loading</h1>
    }

  return (
    <div>
{
    data&&data.map((el)=>(<TypesCard {...el}/>))
}



    </div>
  )
}

export default Types