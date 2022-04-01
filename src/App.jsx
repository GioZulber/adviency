import {
  Button,
  Container,
  Heading,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { MyForm } from './components/Form';
import { MyList } from './components/List';
import { ListProvider } from './context/listContext.jsx';

function App() {
  return (
    <ListProvider>
      <Container maxW='sm'>
        <Stack
          w={300}
          direction={'column'}
          align={'center'}
          bgColor='white'
          spacing={4}
          padding={4}
          borderRadius={5}
          boxShadow='0px 2px 3px rgb(0, 0, 0, 0.3)'
          divider={
            <StackDivider
              width='90%'
              alignSelf='center'
              borderColor='gray.300'
            />
          }
        >
          <Heading fontStyle='italic'>Regalos:</Heading>
          {/* <Button colorScheme='red' width='90%'>
          Agregar Regalo
        </Button> */}
          <MyForm />
          <MyList />
        </Stack>
      </Container>
    </ListProvider>
  );
}

export default App;
