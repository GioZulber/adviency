import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { MyForm } from './Form';

export const MyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xs'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center' mb='-3'>
          Agrega un regalo
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MyForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
