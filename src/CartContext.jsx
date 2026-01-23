import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const UserContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <UserContext.Provider value={{ cart, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
