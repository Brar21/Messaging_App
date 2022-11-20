import React from 'react'
import { Link } from 'react-router-dom';
import { Text, Button, Box } from '@chakra-ui/react';

export const TestSpeed = () => {


  return (
      <Box w='100%' bg='#577b87'>
          <Box w='70%' display='flex' m='auto' gap={12} p='5rem 0'>
          <Box bg='white' borderRadius={10} w='80%' >
              <Text>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</Text>
          </Box>
          <Box display='flex' flexDirection='column'>
              <Text>SPEED</Text>
              <span>0 WPM</span>
              <Text>ACCURACY</Text>
                  <span>100%</span>
                  <Button>Restart</Button>
              </Box>
          </Box>

     </Box>
  )
}
