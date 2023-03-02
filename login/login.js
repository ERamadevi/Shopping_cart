import { Link } from "react-router-dom";

export default function Loginpage() {
    return (

        <div className=" container pt-4 bg-light secondary">
            <div className="row"> 
         <h1 className="text-center"> New user login & Register </h1>
             <div className="col-lg-4 offset-4 pt-4"> 
           <div className="card border-none shadow">
            <div className='card-header bg-white'> 
                <h2 className="text-center"> Create Account</h2>
            </div>
            <div className='card-body'>
               <div className='mb-3'>
                <label> Mobile number </label>
                <input type="text" className="form-control"/>
               </div>
               <div className='mb-3'>
                <label> Email(optional) </label>
              <input type="text" className="form-control"/>
                  </div>
               <div className='mb-3'>
                <label> Password </label>
                <input type="password" className="form-control" placeholder="At least 6 characters." />
               </div>
               <h5 style={{ fontSize:12}}> 
                  
                Passwords must be at least 6 characters.
              By enrolling your mobile phone number, you consent to receive automated 
             security notifications via text message from Shopping.
             Message and data rates may apply. 
              
                </h5>
               </div>
               <div className='card-footer text-center'>
                <button className='btn btn-lg bg-warning'> Continue </button>
            
               </div>
               
              <h6 className="text-center"> Already have an account?  <Link to="/login/signin"> Sign in  </Link> </h6>

         </div>
  </div>
  </div>
  </div>
  

        
    )
}

  

