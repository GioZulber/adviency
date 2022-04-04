import { React, createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [list, setList] = useLocalStorage('list', []);
  const [active, setActive] = useState({ index: '', gift: '' });

  const addItem = (item) => {
    const isInList = list.some(
      (listItem) => listItem.gift.toUpperCase() === item.gift.toUpperCase()
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

  return (
    <ListContext.Provider
      value={{
        list,
        addItem,
        removeItem,
        clearList,
        active,
        setActive,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
