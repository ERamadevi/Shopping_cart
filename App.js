import React from 'react';
import { HashRouter, Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import Home from './front/home';
//import Cart from './front/cart'; 


//import { CartProvider } from 'react-use-cart';
import Header from './front/header';
import Home from './front/home';
import App1 from './front/app1';
import Signin from './login/signin';
import Loginpage from './login/login';


function App() {
  return (
    <>
 <HashRouter>
 <Routes> 
   
  <Route exact path="/" element={ <Header/> } /> 
  <Route exact path="/front/home" element={ <Home/> } />
  <Route exact path="/front/app1" element={ <App1/> } /> 
  <Route exact path="/login/signin" element={ <Signin/> } /> 
  <Route exact path="/login/login" element={ <Loginpage/> } /> 
   </Routes>
 </HashRouter>

  

  
  
 </>
  );
}

export default App;
