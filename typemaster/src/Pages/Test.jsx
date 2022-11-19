import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Text,Button } from '@chakra-ui/react';
export const TestSpeed = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <div >

          <AlertDialog
              isOpen={isOpen}
              onClose={onClose}
          >
              <AlertDialogOverlay>
                  <AlertDialogContent w="90%">
                      <AlertDialogHeader fontSize='lg' fontWeight='bold'>

                      </AlertDialogHeader>

                      <AlertDialogBody>
                          You can <Link to='/donate'><Text _hover={{ color: "blue", textDecoration: 'undeline' }}>thanks us and Donate</Text></Link>
                      </AlertDialogBody>

                      <AlertDialogFooter>
                          <Button onClick={onClose}>
                              Start Typing Test
                          </Button>

                      </AlertDialogFooter>
                  </AlertDialogContent>
              </AlertDialogOverlay>
          </AlertDialog>
    </div>
  )
}
