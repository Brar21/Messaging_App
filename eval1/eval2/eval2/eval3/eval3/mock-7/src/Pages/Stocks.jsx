import React, { useEffect, useState } from 'react'
import { Image,Input,Button } from '@chakra-ui/react';
function Stocks() {
    const [page,setPage]=useState(1);
    const [type,setType]=useState("")
    const [data,setData]=useState([]);
    const [quan,setquan]=useState(0);
    const [sort,setSort]=useState("")
    useEffect(()=>{
        if(type!==""){
            fetch(`https://mock-node-depolyment.onrender.com/companies?_page=${page}&_limit=4`).then((res)=>res.json())
            .then((res)=>setData(res.filter((el)=>el.company_type===type))).catch((err)=>console.log(err))   
        }
        else if(sort!==""){
if(sort==="asc"){
    fetch(`https://mock-node-depolyment.onrender.com/companies?_page=${page}&_limit=4`).then((res)=>res.json())
    .then((res)=>setData(res.sort((a,b)=>a.cost_per_share-b.cost_per_share))).catch((err)=>console.log(err))   
}
else{
    fetch(`https://mock-node-depolyment.onrender.com/companies?_page=${page}&_limit=4`).then((res)=>res.json())
    .then((res)=>setData(res.sort((a,b)=>b.cost_per_share-a.cost_per_share))).catch((err)=>console.log(err))   
}
        }
fetch(`https://mock-node-depolyment.onrender.com/companies?_page=${page}&_limit=4`).then((res)=>res.json())
.then((res)=>setData(res)).catch((err)=>console.log(err))
    },[page,type,sort])
    const handlepage=(val)=>{
        setPage(val)
    }
    const buystock=(data)=>{
        fetch(`https://mock-node-depolyment.onrender.com/buy`,{
        method:"POST",
        headers:{
        "Content-Type":"application/json"}
        ,
        body:JSON.stringify(data)
    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err)) 
    }
  return (
    <div>
        <select onChange={(e) => setType(e.target.value)}>
        <option value="">select filter by company type</option>
        <option value="Bank">Bank</option>
        <option value="IT">IT</option>
        <option value="Automobile">Automobilek</option>
        <option value="Pharma">Pharma</option>
        <option value="Oil">Oil</option> </select>
        <select >
        <option value="">sorting</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>   
        </select>
        {
            data&&data.map((el)=>(
                <>
                <Image src={el.company_logo} w="100px"/>
                <h1>{el.compayn_name}</h1>
                <h2>EXCHANGE: {el.stock_exchange}</h2>
                <h2>TYPE:{el.company_type}</h2>
                <h2>TOTAL SHARES{el.total_shares}</h2>
                <h2>COST PER SHARE:{el.cost_per_share}</h2>
                <h2>PRICE ACTION:{el.price_action}</h2>
                <Input placeholder="enter quantity" type="number" onChange={(e)=>setquan(e.target.value)}></Input>
<Button onClick={()=>buystock({...el,quantity:Number(quan)})}>Buy</Button>
                </>
            ))
        }
        <Button disabled={page===1} onClick={()=>handlepage(page-1)}>prev</Button>
        <Button>{page}</Button>
        <Button onClick={()=>handlepage(page+1)}>next</Button>


    </div>
  )
}

export default Stocks