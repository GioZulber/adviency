import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';
// import { useListContext } from './context/listContext';
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
});

export const MyForm = () => {
  const { list, addItem } = useListContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    addItem({ ...values, id: list.length + 1 });
  };
  return (
    <Stack align='center' justify='center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.gift}>
          <FormLabel htmlFor='gift' textAlign='center'>
            Regalo
          </FormLabel>
          <Input
            id='gift'
            placeholder='Bicicleta, libro, etc.'
            focusBorderColor='teal.500'
            {...register('gift')}
          />
          <FormErrorMessage>
            {errors.gift && errors.gift.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.quantity}>
          <FormLabel htmlFor='quantity' textAlign='center'>
            Cantidad
          </FormLabel>
          <Input
            id='quantity'
            placeholder='1,3,5, etc.'
            focusBorderColor='teal.500'
            {...register('quantity')}
          />
          <FormErrorMessage>
            {errors.quantity && errors.quantity.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.urlImage}>
          <FormLabel htmlFor='urlImage' textAlign='center'>
            Cantidad
          </FormLabel>
          <Input
            id='urlImage'
            placeholder='https://imagen.com/'
            focusBorderColor='teal.500'
            {...register('urlImage')}
          />
          <FormErrorMessage>
            {errors.urlImage && errors.urlImage.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type='submit'
          mt={4}
          w='100%'
          colorScheme='whatsapp'
          //   isLoading={isSubmitting}
          _focus={{
            boxShadow: '0 0 1px 2px green, 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          Agregar
        </Button>
      </form>
    </Stack>
  );
};
