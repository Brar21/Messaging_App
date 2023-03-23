import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/login"><Text>Admin access</Text></Link>
        <Link to="/register"><Text>User access</Text></Link>

        
    </div>
  )
}

export default Home