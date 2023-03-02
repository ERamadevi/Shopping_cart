import React from 'react';
import { Link } from "react-router-dom";
import Home from './home';
import Cart from './cart';
//import { useCart } from 'react-use-cart';
import { CartProvider } from 'react-use-cart';



const Header = () =>{
  
    return(
      
        <>
        <div className='container'> 
         <div className='fixed-top'> 
       
       <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 shadow-sm">

        <a className="navbar-brand text-dark fw-bold fs-4 px-4" >Shopping App  </a>
     
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
       <span className="navbar-toggler-icon"></span>
     </button>
        
       <div className="container">
       <ul className="navbar-nav mx-auto text-center" >  
 
         <li className="navbar-brand ">
         <Link className="nav-link text-dark" to="/front/home"> 
         
           <i className='fa fa-home fa-sm'> </i> Home </Link>
         </li>
 
           <li className="navbar-brand ">
           <Link  className="nav-link text-dark .hover-overlay"  to="/front/home"> 
           <i className='fa fa-user-circle'> </i> Products </Link>
         </li>
         
        </ul>

           <div className='buttons '>
             <a href="" className='btn btn-outline-info'>
            <Link  to="/login/login"> 
              <i className='fa fa-sign-in me-1'></i> Login </Link> </a>

              <a href="" className='btn btn-outline-info ms-2'>
              <Link  to="/login/signin"> 
              <i className='fa fa-user-plus'></i> Register  </Link> </a>

              <a href="" className='btn btn-outline-info ms-2'>
              <Link  to="/front/app1"> 
              <i className='fa fa-shopping me-1'></i>
              Cart </Link>  </a>

           </div>
         </div>
     </nav>
    </div>
    </div>
    
     <div className='hero'>
     <div className="card bg-dark text-white border-0">
     <img src="https://img.freepik.com/premium-photo/shopping-cart-moves-speed-light-backdrop-with-balloons-gift-boxes-all-live-futuristic-atmosphere-3d-render_172660-11.jpg?w=900" 
       alt="Random Name" height="400" width="100%" />
       <div className='card-img-overlay d-flex flex-column justify-content-center'>
        <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0'>NEW SEASONS ARRIVALS</h5>
             <p className='card-text lead fs-2'>
                CHECK OUT ALL THE TRENDS
             </p>
        </div>
       </div>
      </div>
      </div>

     <CartProvider>
    <Home />
    <Cart />
  </CartProvider>

     </>
     )
        }

        export default Header; 