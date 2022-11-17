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
                                        <Th display='flex' gap='1px'><GrCertificate fontSize={20}/>CERTIFICATE</Th>
                                        <Th display='flex' gap='1px' ml='-2rem'><SlSpeedometer fontSize={20} />SPEED</Th>
                                        <Th display='flex' gap='1px'><GiOnTarget fonrSize={20} />ACCURACY</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between' alignItems='center'>
                                        <Td>PLATINUM</Td>
                                        <Td pl='5px'>70 WPM</Td>
                                        <Td>99.5%</Td>
                                    </Tr>
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between'>
                                        <Td>GOLD</Td>
                                        <Td pr='5px'>50 WPM</Td>
                                        <Td>98.7%</Td>
                                    </Tr>
                                    <Tr  display='flex' flexDirection='row' w='100%' justifyContent='space-between'>
                                        <Td>SILVER</Td>
                                        <Td>40 WPM</Td>
                                        <Td>96%</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box width='30%' m='1rem'>
                        <Text textAlign='start'>
                            You can take the test as many times as you want! Only the best score will count towards your certification, there’s no need to worry about making a mistake.</Text>
                        <Link to='testpage'>Take Typing Test</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Test;