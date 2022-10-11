
import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";



function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  }
  const hideCarthandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown &&
        <Cart onClose={hideCarthandler} />}

      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
