import { useState, createContext } from 'react';
import { PRODUCTS } from '../products';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    toast('Sweet Delight Added to Cart');
  };

  const increaseCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const decreaseCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    increaseCart,
    decreaseCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <ToastContainer />
      {props.children}
    </ShopContext.Provider>
  );
  
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};