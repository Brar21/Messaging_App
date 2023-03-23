import React, { useEffect, useState } from 'react'
import PockemonCard from '../component/PockemonCard';

function Pockemon() {
    const [data,setData]=useState([]);
    const [load,setload]=useState(false);
    const [page,setPage]=useState(1);
    useEffect(()=>{
        setload(true)
async function getData(page,limit=20){
   try{
    let res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${20*(page-1)}`);
    let data=await res.json();
    setData(data.results)
    setload(false)
}
    catch(err){
console.log(err)
setload(false)
    }
}
getData(page,20)
    },[page])

    const handlepage=(val)=>{
        setPage(val)
    }
    if(load){
        return <h1>...loading</h1>
    }

  return (
    <div>
{
    data&&data.map((el)=>(<PockemonCard {...el}/>))
}
<button disabled={page===1} onClick={()=>handlepage(page-1)}>prev</button>
<button>{page}</button>
<button onClick={()=>handlepage(page+1)}>next</button>

    </div>
  )
}

export default Pockemon