import React from 'react'
import { Box,Text } from '@chakra-ui/react'
const Experince = () => {
  return (
    <Box mt={15} boxShadow={'lg'} p={5} border={"1px solid lightgray"} borderRadius={'10px'} display="flex" textAlign={'center'} alignItems='center'>
          <Text borderRadius={'60%'} border={"3px solid gray"}m={1} p={"5px 15px"} bgColor={'darkgray'} color='white' fontSize={20}>1</Text>
          &nbsp;
          &nbsp;
          &nbsp;

          <Box>
          <Text fontSize={13} fontWeight={500}> Productions Incharge at SHM</Text><span><Text fontSize={10} textAlign='start'>January 2021 - March 2022 </Text></span>
          </Box>
      </Box>
  )
}

export default Experince