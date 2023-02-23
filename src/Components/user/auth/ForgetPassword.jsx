import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()
 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3000/changePassword', {email, newPassword}).then((response)=>{
        
        if(response){
         
          toast.success('Password Updated')
          navigate("/")
       
        }
      }).catch(error=>{
        console.log(error);
        if(error.response){

          toast.error(error.response.data.error)
        }else{
         toast.error(error.message)
        }
        
      })
  }

 

  return (
     <div>

     
    <div className="flex flex-col justify-center bg-cover bg-[url(https://res.cloudinary.com/dk0cl9vtx/image/upload/v1676526221/Products/ihkeznmllmlvb3wughma.png)] bg-center  items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        
        <h1 className="text-4xl text-center text-white font-bold mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">

            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Enter your email:
            </label>
            <input 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />

            
          </div>
          <div className="mb-4">
  
            <label className="block text-gray-700 font-bold mb-2" >
                Enter new password:
            </label>
            <input 
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="password" 
                id="password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)}
            />
            </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
       

      


    
     </div>
   

    
  );
}

export default ForgotPassword;
