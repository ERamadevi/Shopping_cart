import React from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from './cart';



function App1() {
    return (
      <>
    <CartProvider>
     
      <Cart />
      
    </CartProvider>
   </>
   
    );
  }
  
  export default App1;
  