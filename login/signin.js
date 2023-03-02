
export default function Signin() {
    return (

        <section className="one">
            <div>
              <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
            </div>
            
             <div className="px-4">
    
             <div className="col-lg-4 offset-4"> 
           <div className="card border-none shadow">
            <div className='card-header bg-white'> 
                <h2 className="text-center"> Signin</h2>
            </div>
            <div className='card-body'>
               <div className='mb-3'>
                <label> Email or mobile phone number </label>
                <input type="text" className="form-control"/>
               </div>
               <div className='mb-3'>
                <label> Password </label>
                <input type="password" className="form-control"/>
               </div>
               </div>
               <div className='card-footer text-center'>
                <button className='btn btn-danger'> Continue </button>
            
               </div>
         </div>
  </div>
  <div>
    <div className="pt-4">
   <div className='container bg-light secondary'>
   <div className='row'>
   <div className='col-lg-12'>
  <h2 className='text-center'> Help Line - +91-0000000000 </h2>
   </div>
   <marquee behavior="alternate">
   <p>e-Mail:support@netroconnect.com,Office Address-6810 N Lakewood Ave Chicago iL-60626</p>
   </marquee>
   </div>
   </div>      
        </div>
            </div>  
            </div>
        </section>

        
    )
}

  

