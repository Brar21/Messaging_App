import { Button, HStack,Input,Heading,Text } from '@chakra-ui/react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container,Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Login() {
   
    return <>
        <Container  w='100%'>
            <Heading textAlign='start' margin='1rem 0'>Log in</Heading>
        <HStack spacing='1.5rem'>
            <Button  colorScheme='twitter' spa leftIcon={<FaFacebook />}>
               Log in with Facebook
            </Button>
            <Button colorScheme='facebook' leftIcon={<FcGoogle/>}>
               Log in with Google
            </Button>
            </HStack>
            <Text textAlign='start' margin='1rem 0'>or you can login with your email:</Text>
            <Box w='100%' >

            <Input placeholder='Email Address' type='email' margin='1rem 0'/>
                <Input placeholder='Enter Password' type='password' margin='1rem 0' />
                <Box marginRight='58%' marginBottom='1rem' marginTop='1rem'>
                    <Button colorScheme='blue'>LOG IN</Button> <strong>or</strong> <Link to='/signup'>Sign Up now</Link>

                </Box>
                <Link to='/resetpassword'>Forget your password?</Link>

            </Box>
            
        </Container>
    </>
}
export default Login;