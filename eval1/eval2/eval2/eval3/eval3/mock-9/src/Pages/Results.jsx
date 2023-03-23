import React from 'react'
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
    Button,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Results() {
    const result=JSON.parse(localStorage.getItem("result"))||{}

  return (<>
    <TableContainer>
  <Table variant='simple'>
 
 
    <Thead>
      <Tr>
        <Th>Correct answers count</Th>
        <Th>Incorrect answers count</Th>
        <Th >Total score</Th>
        <Th>Percentage</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{result.correct}</Td>
        <Td>{result.total-result.correct}</Td>
        <Td >{result.correct}</Td>
        <Td >{Math.floor((result.correct/result.total)*100)}</Td>

      </Tr>
      
      
    </Tbody>
    
    
  </Table>
</TableContainer>
<Link to="/dashboard"><Button>dashboard</Button></Link>
</>
  )
}
// - Correct answers count
// - Incorrect answers count
// - Total score
// - Percentage

export default Results