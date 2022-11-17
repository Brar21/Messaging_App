import { Container, Box, Image, Text, Button, Heading } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { GrCertificate } from "react-icons/gr";
import { SlSpeedometer } from "react-icons/sl";
import { GiOnTarget } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
function Test() {

    return (
        <Box w='100%' h='auto'>
            <Box bg='#577b87' h='90vh'>
                <Box w='70%' m='auto' display='flex' flexDirection='row' gap={10} p='1rem' >
                    <Box>
                        <Image w='100rem' borderRadius={20} src='https://i.pinimg.com/originals/3f/82/40/3f8240fa1d16d0de6d4e7510b43b37ba.gif' />
                    </Box>
                    <Box m='auto' _disabled='flex' flexDirection='column' >
                        <Heading textAlign='start' color='white'>Speed Test</Heading>
                        <Text textAlign='start' p='1.65rem 0' color='white' fontSize={18}>You can test your typing speed in wpm on English, Spanish, or French and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</Text>
                        <Button colorScheme='blue' bg='#e7b75f' _hover={{ bg: "yellow.300", color: 'brown' }} fontSize='20px'>Test you speed free</Button>
                    </Box>
                </Box>
            </Box>
            <Box w='70%' bg='white' m='-14rem auto 0' border='2px solid red' borderRadius={15} >
                <Image w='50%' m='auto' h={400} src='https://img.freepik.com/premium-vector/gold-silver-bronze-medals-flat-style-icon-set_201904-154.jpg?w=2000' />
                <Box display='flex' w='90%' m='auto' flexDirection='row' gap={10}>
                    <Box w='70%' m='1rem'>
                        <TableContainer>
                            <Table variant='simple'>
                                
                                <Thead w='50%'>
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between'>
                                        <Th display='flex' gap='5px' pl="1rem"><GrCertificate fontSize={20}/>CERTIFICATE</Th>
                                        <Th display='flex' gap='5px' ml='2rem'><SlSpeedometer fontSize={20} />SPEED</Th>
                                        <Th display='flex' gap='5px'><GiOnTarget fonrSize={20} />ACCURACY</Th>
                                    </Tr>
                                </Thead>
                                <hr />
                                <Tbody fontWeight='500'>
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between' alignItems='center'>
                                        <Td display='flex' textAlign='center'><Image w={30} src='https://cdn.vectorstock.com/i/preview-1x/65/82/silver-rosette-vector-996582.jpg' /><Text pt={2}>PLATINUM</Text></Td>
                                        <Td pl='5px'>70 WPM</Td>
                                        <Td>99.5%</Td>
                                    </Tr>
                                    <hr />
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between'>
                                        <Td display='flex' textAlign='center' ><Image w={35} src='https://static.vecteezy.com/system/resources/previews/005/724/486/original/gold-circle-medal-with-red-ribbon-golden-round-trophy-for-first-place-of-competition-metal-award-for-leader-on-white-background-honor-victory-prize-isolated-illustration-vector.jpg' /><Text pt={3}>GOLD</Text></Td>
                                        <Td pr='5px'>50 WPM</Td>
                                        <Td>98.7%</Td>
                                    </Tr>
                                    <hr />
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between'>
                                        <Td display='flex' textAlign='center'><Image w={30} src='https://t3.ftcdn.net/jpg/04/87/34/18/360_F_487341885_43bjb9IUYv8c7Fhxm5kp9KgvWgZUeNMo.jpg' /><Text pt={2}>SILVER</Text></Td>
                                        <Td>40 WPM</Td>
                                        <Td>96%</Td>
                                    </Tr>
                                    <hr />
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box width='30%' m='1rem'>
                        <Text textAlign='start' fontSize={18}>
                            You can take the test as many times as you want! Only the best score will count towards your certification, there’s no need to worry about making a mistake.</Text>
                        <Box display='flex' h='5rem' mt={5} color='blue' fontSize={20} fontWeight='500' textAlign='center' _hover={{ textDecoration: "underline",gap:"1.5rem" }} gap='0.5rem' >
                            <Text textAlign='start' pb='5rem' ><Link to='testpage'>Take Typing Test</Link> </Text><Text pt={1} fontSize={22}><AiOutlineArrowRight /></Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Test;