import { Box, Input,Button } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Image,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata, deletedata, getdata, updatedata } from "../Redux/dashboard/action";

function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [total, setTotal] = useState("");
  const [cost, setCost] = useState("");
  const {data}=useSelector((data)=>data.dashboard)
  console.log(data)
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getdata())
  },[])
  const created = () => {
    dispatch(
      adddata({
        company_logo: logo,
        company_name: name,
        company_type: type,
        stock_exchange: stock,
        total_shares: total,
        cost_per_share: cost,
      })
    );
  };

  return (
    <Box>
      <Input
        name="logo"
        placeholder="enter logo url"
        onChange={(e) => setLogo(e.target.value)}
      />
      <Input
        name="name"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setType(e.target.value)}>
        <option value="">select company type</option>
        <option value="Bank">Bank</option>
        <option value="IT">IT</option>
        <option value="Automobile">Automobilek</option>
        <option value="Pharma">Pharma</option>
        <option value="Oil">Oil</option> </select>
        <select onChange={(e) => setStock(e.target.value)}>
          <option value={""}>select stock exchange</option>
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
        </select>
        <Input
          placeholder="enter total shares"
          name="total_shares"
          type="number"
          onChange={(e) => setTotal(e.target.value)}
        />
        <Input
        type="number"
          placeholder="enter cost per shares"
          name="total_shares"
          onChange={(e) => setCost(e.target.value)}
        />
        <Button onClick={created}>CREATE NEW STOCKS</Button>
        <TableContainer>
  <Table variant='simple'>
   
   
    <Thead>
      <Tr>
        <Th>Company Logo</Th>
        <Th>Company name</Th>
        <Th>Company Type</Th>
        <Th>Stock Exchange</Th>
        <Th>Total shares</Th>
        <Th>Cost per share</Th>

        <Th>Price action</Th>
        <Th>Edit</Th>
<Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
        data&&data.map((el)=>(
            <Tr>
                <Td>
<Image src={el.company_logo} w="100px"/>
                </Td>
                <Td>
                    {el.company_name}
                </Td>
                <Td>
                    {el.company_type}
                </Td>
                <Td>{el.stock_exchange}</Td>
                <Td>{el.total_shares}</Td>
                <Td>{el.cost_per_share}</Td>
                <Td>{el.price_action}</Td>
                <Td><Button onClick={onOpen}>Edit</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>UPDATE STOCKS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input
        name="logo"
        placeholder="enter logo url"
        onChange={(e) => setLogo(e.target.value)}
      />
      <Input
        name="name"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <select>
      <option value="">select company type</option>
        <option value="Bank">Bank</option>
        <option value="IT">IT</option>
        <option value="Automobile">Automobilek</option>
        <option value="Pharma">Pharma</option>
        <option value="Oil">Oil</option> </select>
        <select onChange={(e) => setStock(e.target.value)}>
          <option value={""}>select stock exchange</option>
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
        </select>
        <Input
          placeholder="enter total shares"
          name="total_shares"
          type="number"
          onChange={(e) => setTotal(e.target.value)}
        />
        <Input
        type="number"
          placeholder="enter cost per shares"
          name="total_shares"
          onChange={(e) => setCost(e.target.value)}
        />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={()=>dispatch(updatedata(el.id,{
        company_logo: logo,
        company_name: name,
        company_type: type,
        stock_exchange: stock,
        total_shares: total,
        cost_per_share: cost,
      }))}>Update stock</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
                </Td>
                <Td><Button onClick={()=>dispatch(deletedata((el.id)))}>Delete</Button></Td>


            </Tr>
        ))
     } 
      
    </Tbody>
    
    
  </Table>
</TableContainer>

    </Box>
  );
}

export default Dashboard;
// - Company logo
// - Company name
// - Company Type
// - Stock Exchange
// - Total shares
// - Cost per share
// - Price action
// - Edit Stock Button
// - Delete Stock Button
// - Company Logo
// - Company Name
// - Company Type ( should be a **select tag** with Bank, IT, Automobile, Pharma, and Oil as options)
// - Stock Exchange (should be a **select tag** with NSE and BSE as options)
// - Total Shares
// - Cost Per Share
// - Price Action
// - List Stock Button
// "company_logo": "https://www.jetspot.in/wp-content/uploads/2018/03/reliance-logo.jpg",
//       "company_name": "Reliance Industries",
//       "company_type": "Oil",
//       "stock_exchange": "BSE",
//       "total_shares": 20000,
//       "cost_per_share": 2132,
//       "price_action": 4
