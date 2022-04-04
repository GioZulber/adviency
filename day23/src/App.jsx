import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Container,
  Heading,
  Stack,
  Divider,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { MyList } from './components/List';
import { ListProvider } from './context/listContext.jsx';
import { MyModal } from './components/Modal';
import { MyForm } from './components/Form';
import { PrevList } from './components/PrevList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import christmas from './assets/christmas.mp3';
import Snowflakes from 'magic-snowflakes';
const snowflakes = new Snowflakes({
  color: '#fff',
});
function App() {
  snowflakes.start();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [prev, setPrev] = useState(false);

  const audio = useRef(new Audio(christmas));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
    audio.current.volume = 0.3;
  }, [playing]);

  const handlePrev = () => {
    setPrev(!prev);
  };
  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <ListProvider>
      <Container>
        <Stack
          w={[300, 400]}
          direction={'column'}
          align={'center'}
          bgColor='white'
          spacing={4}
          p={4}
          borderRadius={5}
          boxShadow='0px 2px 3px rgb(0, 0, 0, 0.3)'
        >
          <Stack
            w='100%'
            direction='row'
            justify='space-around'
            align='flex-end'
          >
            <Heading fontStyle='italic'>Regalos:</Heading>
            <Box as='button' onClick={handlePlay}>
              <audio
                autoPlay={true}
                loop={true}
                muted={!playing}
                src={audio}
                id='audio'
              />
              {playing ? (
                <FontAwesomeIcon icon={faVolumeHigh} size='2x' />
              ) : (
                <FontAwesomeIcon icon={faVolumeXmark} size='2x' />
              )}
            </Box>
          </Stack>
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
