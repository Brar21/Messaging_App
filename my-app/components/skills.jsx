import React from 'react'
import {Box,Text} from '@chakra-ui/react'
const SKills=() =>
{
    return (
        <Box mt={15}  fontWeight={500} fontSize={14} boxShadow={'lg'} p={5} border={"1px solid lightgray"} borderRadius={'10px'} display='flex' gap={3} flexWrap={'wrap'}>
            <Text bgColor={'skyblue'} p={1}>HTML</Text>
            <Text bgColor={'skyblue'} p={1}>CSS</Text>
            <Text bgColor={'skyblue'} p={1}>Javascript</Text>
            <Text bgColor={'skyblue'} p={1}>PYTHON</Text>
            <Text bgColor={'skyblue'} p={1}>React.js</Text>
            <Text bgColor={'skyblue'} p={1}>Next.js</Text>
            <Text bgColor={'skyblue'} p={1}>Redux</Text>
            <Text bgColor={'skyblue'} p={1}>Chakra.UI</Text>
            <Text bgColor={'skyblue'} p={1}>Bootstrap</Text>
        </Box>
    )
}

export default SKills