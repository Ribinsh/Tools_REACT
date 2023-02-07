import React, { useState }  from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'



function Login() {

  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const doLogin = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:3000/doLogin",{
      email,
      password
    }).then((response)=>{
      console.log(response);
      
      if(response){
        toast.success('login successful')
        navigate('/')
     
      }
    }).catch(error=>{
      console.log(error);
        toast.error(error.response.data.error)
      
    })
  }
  
  return (
    <div>
      
            <div class="flex h-screen w-full items-center justify-start px-20  bg-[url('/src/assets/images/wallpaperflare.com_wallpaper.jpg')] bg-gray-900 bg-cover bg-no-repeat ">
              <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div class="text-black">
                  <div class="mb-8 flex flex-col items-center">
                    <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
                    <h1 class="mb-2 text-2xl">Toools</h1>
                    <span class="text-gray-300">Enter Login Details</span>
                  </div>
                  <form action={doLogin}>
                    <div class="mb-4 text-lg">
                      <input
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                      class="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Enter Email" />
                    </div>

                    <div class="mb-4 text-lg">
                      <input
                      value={password}
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                      class="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="Password" />
                    </div>
                    <div class="mt-8 flex justify-center text-lg text-black">
                      <button type="submit" onClick={doLogin} class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                      
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