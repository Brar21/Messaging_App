

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
 
  
  Stack,
  Button,
  Heading,
  Text,

  
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Home() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
  
const register=()=>{
fetch(`https://mushy-goat-overshirt.cyclic.app/register`,{
method:"POST",
headers:{
  "Content-Type":"application/json",

}
,body:JSON.stringify({name:name,email:email,password:password})
}).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>
console.log(err))
}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}

>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Register
          </Heading>
        
        
        </Stack>
        <Box
          rounded={'lg'}
     
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input type="text"  onChange={(e)=>setName(e.target.value)}/>
                </FormControl>
              </Box>
              
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={ 'password'} onChange={(e)=>setPassword(e.target.value)}/>
              
              
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={register}>
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}