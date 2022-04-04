export const api = {
  gifts: () =>
    new Promise((resolve, reject) => {
      try {
        const list = JSON.parse(localStorage.getItem('list'));
        setTimeout(() => {
          resolve({
            status: 'success',
            data: list,
          });
        }, 1000);
      } catch (error) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          status: new Error('Error'),
          data: [],
        });
      }
    }),
  save: (data) =>
    new Promise((resolve, reject) => {
      try {
        localStorage.setItem('list', JSON.stringify(data));
        resolve({
          status: 'success',
          data: data,
        });
      } catch (error) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          status: 'saving error',
          data: [],
        });
      }
    }),
};
