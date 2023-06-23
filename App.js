import React from 'react';
import { HashRouter, Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import Home from './front/home';
//import Cart from './front/cart'; 


//import { CartProvider } from 'react-use-cart';

import Home from './front/home';



function App() {
  return (
    <>
 <HashRouter>
 <Routes> 
   
  <Route exact path="/" element={ <Home/> } />
  
   </Routes>
 </HashRouter>

  

  
  
 </>
  );
}

export default App;
