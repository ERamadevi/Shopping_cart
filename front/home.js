import React from 'react';
 //import Header from './header';

 import Itemcard from './card1';
 import data from '../data';
 

    const Home = () =>{

        return( 
            <> 
            
              
        <h1 className='text-center'> All Items </h1>
        <section className='py-4'>
            <div className='container'> 
            <div className='row justify-content-center'>
                {data.productData.map((item, index)=>{
                    return(
                    <Itemcard 
                        id={item.id}
                        img={item.img}
                         title={item.title} 
                         
                         item={item}
                         key={index} 
                        /> 
                    )
                })}
               
            </div>
            </div>
        </section>
    

       </>
        )
    }



export default Home;