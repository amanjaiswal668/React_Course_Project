import React from "react";

// Designed in a way to create auto-complete feature.
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,

  //   Adding an item in the cart.
  addItem: (item) => {},
  //   Removing item from the cart by taking the id of the particular item.
  removeItem: (id) => {},
});

export default CartContext;
