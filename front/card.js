import React from 'react';



    const Card = () =>{

        return( 
            <> 
        <section className="Our services py-1">                  {/*  <!--- py -  pading ---> */}
    <div className="container text-center my-2">   
    <div className="row">           
        <div>
             <h1>
                 Our <span className="text-info"> services </span>
                 <hr className="w-25 m-auto" />
             </h1>
        </div>
    
      
    
    {/* <!-- this is first card -->  */}
     
      <div className="col-md-3 ">
      
      <div className="card-body flex">
        <img src="https://m.media-amazon.com/images/G/31/IMG15/WM-Category-Halo1._CB620366030_.png" 
          alt="fridge" height="100" width="150" />
    </div>
    <h6>Washing Machines</h6>
    <a href="#" className="btn btn-primary text-center">Add to Cart</a>
        </div>
        {/* this is second card */}

        <div className="col-md-3">   
             <div className="card-body flex">
              <img src="https://m.media-amazon.com/images/G/31/IMG_22/Varun/BAU_Ref/RefrigeratorsCB619903594_._CB617555754_.png" 
               alt="Rf" height="100" width="150" />
              </div>
              <h6>Refrigerator</h6>
              <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        
        {/* <!-- this is thrid card --> */}
        
        <div className="col-md-3">   
             <div className="card-body flex">
              <img src="https://m.media-amazon.com/images/G/31/IMG15/MWO._CB619902992_.png" 
               alt="Mc" height="100" width="150" />
              </div>
              <h6>Microovel</h6>
              <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>

        <div className="col-md-3">   
             <div className="card-body flex">
              <img src="https://m.media-amazon.com/images/G/31/IMG15/Chimney._CB619902992_.png" 
               alt="Cy" height="100" width="150" />
              </div>
              <h6>Chimney</h6>
              <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>

        <div className="col-md-3"> 
                <div className="card-body flex">
                <h6 className="text-center text-primary">Headphones</h6>
        <img src="https://m.media-amazon.com/images/G/31/img22/Electronics/Re-Vamp/Halo/300x300_helo_Headphones._CB636489442_.jpg" 
     alt="fridge" height="150" width="150" />
    </div>
    <h6 className="text-center text-danger">4000</h6>
    <div className="offset-2"> 
    <a href="#" className="btn btn-primary">Add to Cart</a>
    </div>
   </div>

      
        
     </div>
     </div>
     </section>
     
   
     

       </>
        )
    }



export default Card;