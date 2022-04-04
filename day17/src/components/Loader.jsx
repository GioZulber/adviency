import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import { Center } from '@chakra-ui/react';
import { useListContext } from '../context/listContext';

export const Loader = () => {
  const { loading } = useListContext();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <Center>
      <BeatLoader
        size={15}
        css={override}
        color={'#E53E3E'}
        loading={loading}
      />
    </Center>
  );
};
