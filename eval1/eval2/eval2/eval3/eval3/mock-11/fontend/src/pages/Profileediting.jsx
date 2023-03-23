import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
  
  export default function ProfileEdit() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [bio,setBio]=useState("");
    const [phone,setPhone]=useState("")
    const [url,setUrl]=useState("")
    let user=JSON.parse(localStorage.getItem("loginuser"))||{};
    const editing=()=>{
        
        fetch(`https://mushy-goat-overshirt.cyclic.app/edit/${user.user._id}`,{
            method:"PATCH",
            headers:{
              "Content-Type":"application/json",
            
            }
            ,body:JSON.stringify({name:name,email:email,password:password,bio:bio,phone:phone,url:url})
            }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>
            console.log(err))
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          
          
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2247726673.jpg">
              
              
                </Avatar>
              </Center>
              <Center w="full">
                <Input w="full" placeholder='enter url' onChange={(e)=>setUrl(e.target.value)}/>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" >
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e)=>setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="userbio" >
            <FormLabel>Bio</FormLabel>
            <Input
              placeholder="enter bio"
              type="text"
              onChange={(e)=>setBio(e.target.value)}
            />
          </FormControl>
          <FormControl id="userphone" >
            <FormLabel>Phone</FormLabel>
            <Input
              placeholder="enter phone no."
              type="number"
            />
          </FormControl>
          <FormControl id="email" >
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              onChange={(e)=>setPassword(e.target.value)}

            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
           
        
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }} onClick={editing}>
              Edit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }