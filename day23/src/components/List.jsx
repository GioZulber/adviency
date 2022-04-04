import React from 'react';
import {
  Box,
  ListItem,
  List,
  Button,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useListContext } from '../context/listContext';
import { Loader } from './Loader';
export const MyList = ({ onOpen }) => {
  const { list, removeItem, setActive, clearList, totalPrice, loading } =
    useListContext();

  return (
    <>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <Box w='100%'>
          {list.length ? (
            <List>
              {list.map((item, index) => (
                <ListItem
                  key={item.id}
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  border='1px solid '
                  borderColor='gray.300'
                  borderRadius={4}
                  mb={2}
                >
                  <Box display='flex'>
                    <Box boxSize={16}>
                      <Image
                        src={item.urlImage || 'https://via.placeholder.com/150'}
                        alt={item.gift}
                        borderRadius={4}
                      />
                    </Box>
                    <Box p='1'>
                      <Text>
                        {item.gift} ({item.quantity}) - $
                        {item.price * item.quantity}
                      </Text>
                      <Text color='gray' fontSize='smaller'>
                        {item.addressee}{' '}
                      </Text>
                    </Box>
                  </Box>
                  <Stack direction='row'>
                    <Button
                      colorScheme='whatsapp'
                      alignSelf='center'
                      size='sm'
                      onClick={() => {
                        setActive({ index: 'duplicate', gift: item });
                        onOpen();
                      }}
                    >
                      D
                    </Button>

                    <Button
                      colorScheme='whatsapp'
                      alignSelf='center'
                      size='sm'
                      onClick={() => {
                        setActive({ index: index, gift: item });
                        onOpen();
                        removeItem(item.id);
                      }}
                    >
                      E
                    </Button>

                    <Box
                      as='button'
                      onClick={() => removeItem(item.id)}
                      paddingRight={2}
                    >
                      <DeleteIcon
                        bgColor='red.500'
                        w='8'
                        h='8'
                        p='2'
                        borderRadius={5}
                        color='white'
                      />
                    </Box>
                  </Stack>
                </ListItem>
              ))}
            </List>
          ) : (
            <Box mb='4'>
              <Heading as={'h4'} size='md' textAlign='center'>
                {' '}
                No hay regalos...{' '}
              </Heading>
            </Box>
          )}
          <Divider alignSelf='center' borderColor='black.500' />
          <Box>
            <Text textAlign='center' fontWeight='bold' m='2'>
              {' '}
              Total: ${totalPrice().toFixed(2) || 0}
            </Text>
          </Box>

          <Button
            colorScheme='gray'
            width='100%'
            _focus={{
              boxShadow: '0 0 1px 2px gray, 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            onClick={clearList}
          >
            Borra todos
          </Button>
        </Box>
      )}
    </>
  );
};
