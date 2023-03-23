import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleTypes() {
    const [data,setData]=useState({})
    
        const val=useParams();
        console.log(val.types_id)
        useEffect(()=>{
          
            
    async function getData(q){
       try{
        let res=await fetch(`https://pokeapi.co/api/v2/type/${q}`);
        let data=await res.json();
        console.log(data)
        setData(data)
      
    }
        catch(err){
    console.log(err)
    
    
        }
    }
    getData(val.types_id)
        },[val.types_id])
       
        
      return (
        <div>
            <h1>Name:{data.name}</h1>
           <h1>id:{data.id}</h1>
           
           
           
           
    
        </div>
      )
}

export default SingleTypes