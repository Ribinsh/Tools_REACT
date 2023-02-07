import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'



function Signup() { 
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] =useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  const eventHandler = (e) =>{
    e.preventDefault()

    axios.post("http://localhost:3000/sendOtp",{
      name,
      email,
      profession,
      phone,
      password
    }).then(()=>{
      toast.success('Registration successful')

      navigate("/otp")
    })
  }

  return (
    <div>
      <div class=" flex  overflow-hidden   bg-[url('/src/assets/images/wallpaperflare.com_wallpaper.jpg')] px-20 pt-5 bg-cover items-center justify-start" >
    <div class="bg-white opacity-80 rounded-md py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Registration  
        </div>
        <div class="">
          <form action={eventHandler}>
            <div>
                 <input type="text" value={name} required class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                  onChange={(e)=>{
                      setName(e.target.value)
                 }} 
                  placeholder="Name "/>
            </div>
             <div>
                 <input type="email" value={email} required class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" 
                 onChange={(e)=>{
                  setEmail(e.target.value)
                 }}
                 placeholder="Eamil Adress "/>
            </div>
             {/* <div>
            <input type="" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Profession "/>
            
            </div> */}
            <div>
            <select required value={profession}
             onChange={(e)=>{
              setProfession(e.target.value)
            }}
             class="focus:outline-none border-b w-full pb-2 border-sky-400 text-gray-500 mb-8"  >
              <option value="">Profession</option>
              <option value="Engineer">Engineer</option>
              <option value="Contractor">Contractor</option>
              <option value="Welder">Welder</option>
            </select>
            </div>
             <div>
            <input type="phone" value={phone} required class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" 
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
            placeholder="Phone "/>
            </div>
            <div class="">
                <input type="password" value={password} required class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                placeholder="Password " />
            </div>
            <div class="flex">
                <input type="checkbox" required class="border-sky-400 " value="" />
                <div class="px-3 text-gray-500">
                    I accept terms & conditions 
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button type='submit' onClick={eventHandler} class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Create Account
                </button>
            </div>
            <div class="flex justify-center ">
                <p class="text-gray-500">Already have an acount? </p>
                {/* <a  onClick={()=>{
                  navigate('/login')}} class="text-sky-600 pl-2"> Sign In</a> */}
                <button onClick={()=>{
                  navigate('/login')}} class="text-sky-600 pl-2">Sign In</button>
            </div>
          </form>
        </div>
    </div>
</div>
    </div>
        
  )
}

export default Signup   