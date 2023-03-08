import axios from '../../../axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom'

function userProfile() {
    const navigate = useNavigate()
    const location = useLocation()
    const [block, setBlock] = useState("newUser")
    const userId = location?.state

    const [user,setUser] = useState('')

    const blockUser  = ()=>{
        axios
        .get(`/admin/blockUser/${userId}`)
        .then((response) => {
          toast.success("Blocked")
          setBlock("Blocked")
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
    }

    const unBlockUser  = ()=>{
        axios
        .get(`http://localhost:3000/admin/unBlockUser/${userId}`)
        .then((response) => {
          toast.success("Unblocked")
          setBlock("Unblocked")
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
    }
     

    useEffect(() => {
        axios
        .get(`http://localhost:3000/admin/getUserData/${userId}`)
        .then((response) => {
          setUser(response.data.user) 
          
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
      }, [block]);
  return (
    <div>
         <div class="h-full bg-gray-200 p-8">
      <div class="bg-white rounded-lg shadow-xl pb-8">
        <div
          x-data="{ openSettings: false }"
          class="absolute right-12 mt-4 rounded"
        >
          <button
            class="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </button>
         
        </div>
        <div class="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            class="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img
            src= {user?.imageUrl  || "https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/lacheev210900016.jpg?ver=6"}
            class="w-40 border-4 border-white rounded-full"
          />
          <div class="flex items-center space-x-2 mt-2">
            <p class="text-2xl">{user.name}</p>
            <span class="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p class="text-gray-700">Engineer</p>
          <p class="text-sm text-gray-500">Kerala</p>
        </div>
        <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div class="flex items-center space-x-4 mt-2">
            {user.status == "Unblocked" &&
            <button class="flex items-center bg-green-500    text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
             
              <span className='font-semibold text-green-900'>Active</span>
            </button>
            }
             {user.status == "Blocked" &&
            <button class="flex items-center bg-red-600    text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
             
              <span className='font-semibold text-grey-900'>Inactive</span>
            </button>
            }

            {user.status == "Unblocked" &&
             <button onClick={blockUser} class="flex items-center bg-orange-200   hover:bg-red-600 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              
             <span className='font-semibold  text-green-900'>Block</span>
           </button>
            }
            {user.status == "Blocked" &&
            <button onClick={unBlockUser} class="flex items-center bg-green-200    hover:bg-green-600 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              
              <span className='font-semibold  text-green-900'>Unblock</span>
            </button>
            }

          </div>
        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-full flex flex-col 2xl:w-1/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">
                 Personal Info
              </h4>
              <ul class="mt-2 text-gray-700">
                <li class="flex border-y py-2">
                  <span class="font-bold w-24">Full name:</span>
                  <span class="text-gray-700">{user.name}</span>
                </li>
                <li class="flex border-y py-2">
                  <span class="font-bold w-24"> Rentings:</span>
                  <span class="text-green-600 font-bold ">{user.rentings}</span>
                </li>
               
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Joined:</span>
                  <span class="text-gray-700">{user.joined}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Mobile:</span>
                  <span class="text-gray-700">{user.phone}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Email:</span>
                  <span class="text-gray-700">{user.email}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Location:</span>
                  <span class="text-gray-700">Kerala</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Gender:</span>
                  <span class="text-gray-700">{user.gender}</span>
                </li>
             
                <li class="flex items-center border-b py-2 space-x-2">
                  <span class="font-bold w-24">Address:</span>
                  <span class="text-gray-700">{user.address}</span>
                 
                </li>
              </ul>
            </div>
            
          </div>
          <div class="flex flex-col w-full 2xl:w-2/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">About</h4>
              <p class="mt-2 text-gray-700">
               A verfied user for toools
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default userProfile