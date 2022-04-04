import React, { useRef } from 'react';
import { Stack, Box, Text, Image, Button } from '@chakra-ui/react';
import { useListContext } from '../context/listContext';
import { useReactToPrint } from 'react-to-print';
export const PrevList = ({ onClose }) => {
  const { list } = useListContext();

  const listRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => listRef.current,
  });

  return (
    <Stack id='imprimirLista' ref={listRef}>
      {list.length > 0 &&
        list.map((gift) => (
          <Stack
            id='imprimirLista'
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
      <Stack direction='row' justify='space-between'>
        <Button colorScheme='red' onClick={onClose}>
          Cerrar
        </Button>
        <Button colorScheme='green' onClick={handlePrint}>
          Imprimir
        </Button>
      </Stack>
    </Stack>
  );
};
