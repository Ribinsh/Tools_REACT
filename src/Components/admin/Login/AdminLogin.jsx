import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

function AdminLogin() {
    const navigate= useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    

    const adminLog = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/admin/adminLogin",{
            email,
            password
        }).then((response)=>{
            let adminToken = "its Admin"
            localStorage.setItem("adminToken" , adminToken)
            toast.success('Login successful')
            navigate('/admin/dashboard')
        }).catch(error=>{
            console.log("error");
                   toast.error("Something went wrong")
          
        })

    }
  return (
    <div>
        
    
                <div class="flex flex-col h-screen bg-gradient-to-r from-neutral-200 to-emerald-500">
                            <h1 className='mt-10 text-white text-3xl  text-center font-bold font-sans'>Toools Admin</h1>
                        <div class="grid place-items-center mx-2 my-20 sm:my-auto" >
                            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                                px-6 py-10 sm:px-10 sm:py-6
                                bg-cover bg-[url(https://res.cloudinary.com/dk0cl9vtx/image/upload/v1676526221/Products/ihkeznmllmlvb3wughma.png)] bg-center rounded-lg shadow-md lg:shadow-lg">
                                <div class="text-center mb-4">
                                    <h6 class="font-semibold text-white text-xl">Welcome Back</h6>
                                </div>
                                <form class="space-y-5" action={adminLog} method="POST">
                                    <div>
                                        <input id="email" typeof='email' value={email} onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }} type="email" class="block w-full py-3 px-3 mt-2
                                            text-gray-800 appearance-none
                                            border-2 border-gray-100
                                            focus:text-gray-500 opacity-60 focus:outline-none focus:border-gray-200 rounded-md" />
                                    </div>

                                    <div class="relative w-full">
                                        <input type="password" value={password} onChange={(e)=>{
                                            setPassword(e.target.value)
                                        }} class="block w-full py-3 px-3 mt-2 mb-4
                                            text-gray-800 appearance-none
                                            border-2 border-gray-100 opacity-60
                                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                
                                            </div>
                                    </div>

                                    <button type="submit" onClick={adminLog} class="w-full py-3 opacity-80 mt-10 bg-emerald-500 rounded-md
                                        font-medium text-white uppercase
                                        focus:outline-none hover:shadow-none">
                                        Login
                                    </button>
                                </form>
                            </div>
                    </div>
                </div>
    </div>
  )
}

export default AdminLogin