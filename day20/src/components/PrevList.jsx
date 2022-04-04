import React from 'react';
import { Stack, Box, Text, Image, Button } from '@chakra-ui/react';
import { useListContext } from '../context/listContext';
export const PrevList = ({ onClose }) => {
  const { list } = useListContext();
  return (
    <Stack>
      {list.length > 0 &&
        list.map((gift) => (
          <Stack
            key={gift.id}
            direction='row'
            border='1px solid '
            borderColor='gray.300'
            borderRadius={4}
          >
            <Box boxSize={16}>
              <Image
                src={gift.urlImage || 'https://via.placeholder.com/150'}
                alt={gift.gift}
                borderRadius={4}
              />
            </Box>
            <Box p='1'>
              <Text>
                {gift.gift} ({gift.quantity})
              </Text>
              <Text color='gray' fontSize='smaller'>
                {gift.addressee}{' '}
              </Text>
            </Box>
          </Stack>
        ))}
      <Button colorScheme='red' onClick={onClose}>
        Cerrar
      </Button>
    </Stack>
  );
};
