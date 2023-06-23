import React from 'react';
 import { useCart } from "react-use-cart";
 import Cart from './cart';


    const Itemcard = (props) =>{
      const { addItem } = useCart();
        return( 
          
        
    
        
         <div className='col-md-4 mb-4'>
           <div className='card h-100 text-center p-4 shadow'> 
           <h5 className='card-id'> {props.id} </h5>
            <img  src={props.img}  className="card-img-top img-fluid" />
            <div className="card-body text-center">
                <h5 className='card-title'> {props.title} </h5>
                <p className='card-title'> {props.last_name} </p>
               {/* <p className='card-text'> {props.desc} </p> 
                <button className='btn btn-success'
                 onClick={() =>addItem(props.item)}> Add to Cart </button> */}
                </div>
              </div>
        </div>
    
      
     
        );
    };



export default Itemcard;