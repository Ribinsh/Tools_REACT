import React  from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik'
import axios from '../../../axios'
import { toast } from 'react-hot-toast'
import { loginValidation } from '../../../middlewares/validationHelper'



function Login() {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validate: loginValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async (values) => {
      try{

        axios.post('/doLogin',{values}).then((response)=>{
         console.log(response);
         
         if(response){
           console.log(response.data);
           let {token} = response.data
           localStorage.setItem('token', JSON.stringify(token))
           toast.success('login successful')
           navigate('/', {replace:true})
        
         }
       }).catch(error=>{
         console.log(error);
         if(error.response){

           toast.error(error.response.data.error)
         }else{
          toast.error(error.message)
         }
         
       })
      }catch (error){
        toast.error("Something went Wrong")
      }
    }
  })

 
  
  return (
    <div>
     
            <div class="flex h-screen w-full items-center justify-start px-20  bg-[url('/src/assets/images/wallpaperflare.com_wallpaper.jpg')] bg-gray-900 bg-cover bg-no-repeat ">
              <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div class="text-black">
                  <div class="mb-8 flex flex-col items-center">
                    <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
                    <h1 class="mb-2   text-teal-600 text-2xl">Toools</h1>
                    <span class="text-gray-300">Enter Login Details</span>
                  </div>
                  <form action="#"
                  onSubmit={formik.handleSubmit}
                  >
                    <div class="mb-4 text-lg">
                      <input
                      {...formik.getFieldProps('email')}
                    
                      type='email'
                      
                      
                      class=" peel rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"  placeholder="Enter Email" />
                      <p class="invisible peer-invalid:visible text-red-700 font-light">
                      Please enter a valid email address
                      </p>
                    </div>

                    <div class="mb-4 text-lg">
                      <input
                      {...formik.getFieldProps('password')}
                      type="Password" 
                     
                      class="  rounded-3xl border-none  bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"   placeholder="Password" />
                      <Link to={"/forgetPassword"}>
                         <p class=" text-red-700 font-semibold">
                            Forgot passord?
                         </p>
                      </Link>
                    </div>
                    <div class="mt-8 flex justify-center text-lg text-black">
                      <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                      
                    </div>
                    <div className='flex justify-center'>
                     <button onClick={()=>{
                      navigate('/signup')
                     }} className='flex '>Signup</button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
                  
    </div>
  )
}

export default Login