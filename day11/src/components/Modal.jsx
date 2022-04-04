import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { MyForm } from './Form';

export const MyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader textAlign='center'>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <MyForm onClose={onClose} />
        </ModalBody>
        {/* <ModalFooter>
         
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
