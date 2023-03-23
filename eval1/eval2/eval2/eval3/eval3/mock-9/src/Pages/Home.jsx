import { Button, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getdata } from '../Redux/quiz/action';

function Home() {
  const [name,setName]=useState("");
  const [cat,setCat]=useState("");
  const [dif,setDif]=useState("");
  const [num,setNum]=useState("");
  const disptach=useDispatch()
  useEffect(()=>{
disptach(getdata(num,dif,cat,name))
  },[num,dif,cat,name])
  return (
    <div>

<Input placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/>
<Select placeholder='Select Category' onChange={(e)=>setCat(e.target.value)}>
  <option value={21}>Sports</option>
  <option value={22}>Geography</option>
  <option value={9}>General Knowledge</option>
</Select>
<Select placeholder='Select Difficulty' onChange={(e)=>setDif(e.target.value)}>
  <option value={"hard"}>Hard</option>
  <option value={"medium"}>Medium</option>
  <option value={"easy"}>Easy</option>
</Select>

<Input placeholder='enter number of questions' type={"number"} onChange={(e)=>setNum(e.target.value)}/>
<Link to="/quiz"><Button>start Quiz</Button></Link>
    </div>
  )
}

export default Home