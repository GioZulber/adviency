import { React, createContext, useContext, useState, useEffect } from 'react';
import { api } from '../helpers/api';
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [active, setActive] = useState({ index: '', gift: '' });
  const [loading, setLoading] = useState(true);
  // i take the list from localStorage and i put it in the state
  useEffect(() => {
    api
      .gifts()
      .then((gifts) => setList(gifts.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    api
      .save(list)
      .then((res) => console.log(res))
      .catch((err) => console.log('error en el save' + err));
  }, [list]);

  const addItem = (item) => {
    const isInList = list.some(
      (listItem) =>
        listItem.gift.toUpperCase().trim() === item.gift.toUpperCase().trim()
    );
    if (!isInList) {
      setList([...list, item]);
    } else {
      alert('gift already in list');
    }
  };
  console.log(list);

  const removeItem = (id) => {
    const remove = list.filter((el) => el.id !== id);
    setList(remove);
  };

  const clearList = () => {
    setList([]);
  };

  const totalPrice = () => {
    return list.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const listRandom = [
    'Bicicleta',
    'Monopatin',
    'Pelota de futbol',
    'Skate',
    'Muñecas',
    'Juego de mesa',
    'Medias',
    'Buso',
    'Zapatillas',
    'Zapatos',
  ];

  return (
    <ListContext.Provider
      value={{
        list,
        addItem,
        removeItem,
        clearList,
        totalPrice,
        active,
        setActive,
        loading,
        listRandom,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
