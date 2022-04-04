import React, { useState } from 'react';
import {
  Button,
  Container,
  Heading,
  Stack,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { MyList } from './components/List';
import { ListProvider } from './context/listContext.jsx';
import { MyModal } from './components/Modal';
import { MyForm } from './components/Form';
import { PrevList } from './components/PrevList';
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [prev, setPrev] = useState(false);

  const handlePrev = () => {
    setPrev(!prev);
  };

  return (
    <ListProvider>
      <Container>
        <Stack
          w={400}
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
          {isOpen && (
            <MyModal isOpen={isOpen} onClose={onClose} title='Agrega un regalo'>
              <MyForm onClose={onClose} isOpen={isOpen} />
            </MyModal>
          )}
          {prev && (
            <MyModal isOpen={prev} onClose={handlePrev} title='Comprar'>
              <PrevList onClose={handlePrev} />
            </MyModal>
          )}

          <Divider w='90%' alignSelf='center' borderColor='gray.300' />
          <MyList onOpen={onOpen} />
          <Button
            colorScheme='gray'
            w='100%'
            _focus={{
              boxShadow: '0 0 1px 2px gray, 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            onClick={handlePrev}
          >
            Previsualizar
          </Button>
        </Stack>
      </Container>
    </ListProvider>
  );
}

export default App;
