import React from 'react'
import { useNavigate } from 'react-router-dom'

function adminNav() {
    const navigate = useNavigate()

    const adminLogout = () => {
      localStorage.clear();
      navigate("/admin/adminLogin")
    }
  return (
    <div className='sticky top-0 z-50'>
        
        <header aria-label="Site Header" class="bg-gray-200">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center ">
       
        <h1 className="flex py-5     font-bold text-2xl  text-teal-600">
         Toools
        </h1>


      </div>

      

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
         <a onClick={()=>{
          adminLogout()
            
         }} 
            class="rounded-md bg-teal-600 px-5 cursor-pointer py-2.5 text-sm font-medium text-white shadow"
            
          >
            Logout
          </a> 

        

          <div class="hidden sm:flex">

         


         


          </div>

        </div>

        <div class="block md:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default adminNav