import React from 'react';
import {
  Button,
  Container,
  Heading,
  Stack,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
// import { MyForm } from './components/Form';
import { MyList } from './components/List';
import { ListProvider } from './context/listContext.jsx';
import { MyModal } from './components/Modal';
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ListProvider>
      <Container maxW='sm'>
        <Stack
          w={300}
          direction={'column'}
          align={'center'}
          bgColor='white'
          spacing={4}
          p={4}
          borderRadius={5}
          boxShadow='0px 2px 3px rgb(0, 0, 0, 0.3)'
        >
          <Heading fontStyle='italic'>Regalos:</Heading>
          <Divider w='90%' alignSelf='center' borderColor='gray.300' />
          <Button colorScheme='red' w='90%' onClick={onOpen}>
            Agregar Regalo
          </Button>
          <MyModal isOpen={isOpen} onClose={onClose} />
          <Divider w='90%' alignSelf='center' borderColor='gray.300' />
          <MyList onOpen={onOpen} />
        </Stack>
      </Container>
    </ListProvider>
  );
}

export default App;
