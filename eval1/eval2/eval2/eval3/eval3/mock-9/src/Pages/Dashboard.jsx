import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Dashboard() {
    let users=JSON.parse(localStorage.getItem("users"))||[]
users=users.sort((a,b)=>b.correct-a.correct)
  return (
    <Box>
{
    users.map((el)=><>
    <Text>USER:-{el.name}</Text>
    <Text>Score:-{el.correct}</Text>

    </>)
}
    </Box>
  )
}

export default Dashboard