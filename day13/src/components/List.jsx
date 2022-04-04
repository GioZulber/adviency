import React from 'react';
import {
  Box,
  ListItem,
  List,
  Button,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useListContext } from '../context/listContext';
export const MyList = ({ onOpen }) => {
  const { list, removeItem, setActive, clearList } = useListContext();

  return (
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
                    {item.gift} ({item.quantity})
                  </Text>
                  <Text color='gray' fontSize='smaller'>
                    {item.addressee}{' '}
                  </Text>
                </Box>
              </Box>

              <Button
                colorScheme='whatsapp'
                alignSelf='center'
                size='sm'
                onClick={() => {
                  setActive({ index: index, gift: item });
                  console.log(index);
                  onOpen();
                }}
              >
                E
              </Button>

              <Box as='button' onClick={() => removeItem(item.id)} paddingX={2}>
                <DeleteIcon
                  bgColor='red.500'
                  w='8'
                  h='8'
                  p='2'
                  borderRadius={5}
                  color='white'
                />
              </Box>
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
  );
};
