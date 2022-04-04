import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useListContext } from '../context/listContext';

const schema = yup.object({
  gift: yup
    .string()
    .required('Ingrese un regalo')
    .typeError('No se aceptan números'),
  quantity: yup
    .number()
    .required('Ingrese una cantidad')
    .typeError('No se aceptan letras'),
  urlImage: yup.string(),
  addressee: yup
    .string()
    .required('Ingrese un destinatario')
    .typeError('No se aceptan números'),
});

export const MyForm = ({ onClose, isOpen }) => {
  const { addItem, active, setActive } = useListContext();
  const { index, gift } = active;
  const {
    handleSubmit,
    register,
    // setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gift: gift.gift || '',
      quantity: gift.quantity || '',
      urlImage: gift.urlImage || '',
      addressee: gift.addressee || '',
    },
  });

  const onSubmit = (values) => {
    if (typeof index === 'number') {
      values = { ...values, id: gift.id };
      addItem(values);
    } else {
      values = {
        ...values,
        id: Date.now(),
      };
      addItem({
        ...gift,
        ...values,
      });
    }
    setActive({ index: '', gift: '' });
    onClose();
  };

  return (
    <Stack align='center' justify='center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.gift}>
          <Input
            id='gift'
            placeholder='Bicicleta, libro, etc.'
            focusBorderColor='teal.500'
            mb={4}
            {...register('gift')}
          />
          <FormErrorMessage>
            {errors.gift && errors.gift.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.quantity}>
          <Input
            id='quantity'
            placeholder='1,3,5, etc.'
            focusBorderColor='teal.500'
            mb={4}
            {...register('quantity')}
          />
          <FormErrorMessage>
            {errors.quantity && errors.quantity.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.urlImage}>
          <Input
            id='urlImage'
            placeholder='https://imagen.com/'
            focusBorderColor='teal.500'
            mb={4}
            {...register('urlImage')}
          />
          <FormErrorMessage>
            {errors.urlImage && errors.urlImage.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.addressee}>
          <Input
            id='addressee'
            placeholder='Nombre del destinatario'
            focusBorderColor='teal.500'
            mb={4}
            {...register('addressee')}
          />
          <FormErrorMessage>
            {errors.addressee && errors.addressee.message}
          </FormErrorMessage>
        </FormControl>
        <Stack direction='row-reverse' mt={4}>
          <Button
            type='submit'
            w='100%'
            colorScheme='whatsapp'
            //   isLoading={isSubmitting}
            _focus={{
              boxShadow: '0 0 1px 2px green, 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            {typeof index === 'number' ? 'Guardar' : 'Agregar'}
          </Button>
          <Button onClick={onClose} colorScheme='red' w='100%'>
            Close
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
