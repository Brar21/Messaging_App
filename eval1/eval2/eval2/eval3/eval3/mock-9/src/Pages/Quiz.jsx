import { Box, Button, Heading, Input, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Quiz() {
    const {data}=useSelector((data)=>data.data);
    const [score,setscore]=useState(0);
    const [wron,setWront]=useState(0)
    const [page,setpage]=useState(1);
    const [answer,setAns]=useState("");
    const navigate=useNavigate();
    console.log(data)
    const users=JSON.parse(localStorage.getItem("users"))||[]
    function checksore(){
        if(data.results[page-1].correct_answer==answer){
            setscore(score+1)
localStorage.setItem("result",JSON.stringify({name:data.username,correct:score,wrong:wron,total:Number(data.amount)}))

        }
        else{
            setWront(wron+1)
            localStorage.setItem("result",JSON.stringify({name:data.username,correct:score,wrong:wron,total:Number(data.amount)}))


        }
    }
    const submitquiz=()=>{
users.push({name:data.username,correct:score,wrong:wron});
localStorage.setItem("users",JSON.stringify(users))
localStorage.setItem("result",JSON.stringify({name:data.username,correct:score,wrong:wron,total:Number(data.amount)}))
navigate("/results")

    }
    console.log(wron,score,answer)
    
    const handle=(e)=>{
        setAns(e.target.value)
        console.log(e.target.value)
        checksore()
        
    }
  return (
    <Box>
        <Heading>USERNAME:{data.username}</Heading>
  <Box>
        <Text>
{
   data?.results[page-1].question
   
   
}</Text>
<Select placeholder='select answer' onChange={handle} defaultValue="select answer">
{data?.results[page-1].incorrect_answers.map((el)=><option value={el}>{el}</option>)  }
<option value={data?.results[page-1].correct_answer}>{data?.results[page-1].correct_answer}</option>
</Select>



</Box>
<Button onClick={()=>setpage(page-1)} disabled={page==1}>prev</Button>
<Button>Question({page})</Button>
{page===Number(data.amount)?<Button onClick={submitquiz}>Submit quiz</Button>:
<Button onClick={()=>setpage(page+1)}>next</Button>}
    </Box>
  )
}

export default Quiz