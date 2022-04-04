import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    white: '#fff',
    brand: {
      errorText: '#f44336',
    },
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: 'Roboto, sans-serif',
        height: '105vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgImage:
          'url("https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2020-12/Christmas-table-with-presents.jpg")',
        bgRepeat: 'no-repeat',
        bgSize: 'cover',
      },
    },
  },
});
