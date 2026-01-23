import PropTypes from 'prop-types';
import React from 'react';
export const UserContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

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
