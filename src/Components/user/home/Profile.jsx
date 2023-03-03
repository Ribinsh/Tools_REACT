import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from '../../../axios'

function Profile() {

    const [user, setUser] = useState('')

    const options = { year:"numeric", month: "long", day: "numeric" };
  const formattedDate = (date) => {
    const dateObj = new Date(date);
    const updatedDate = dateObj.toLocaleDateString("en-US", options);
    return updatedDate;
  };
    
    const getProfile = () =>{
        axios.get("/getProfile",  {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }).then((response) => {
            let userData = response.data.userData
            console.log(userData);
            setUser(userData)
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
      getProfile()
    },[])

  return (
    <div className='bg-emerald-100'>
        
    
    {/* <div>
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
        <div class="w-full h-[250px] bg-fixed bg-cover  bg-[url(https://res.cloudinary.com/dk0cl9vtx/image/upload/v1676526848/Products/p7f0xmuefhdpjfqniomn.png)] bg-center">
          
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img
            src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/lacheev210900016.jpg?ver=6"
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 year Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consecteturLorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt voluptates
                obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad
                incidunt laboriosam, laudantium est unde natus cum numquam,
                neque facere. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas
                eveniet aperiam at maxime, iste id dicta autem odio laudantium
                eligendi commodi distinctio!
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div> */}


<a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 px-20 sm:p-6 lg:p-20"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-2xl font-bold text-gray-900 ">
      {user.name}
      </h3>

      <p class="mt-1 text-sm font-medium text-gray-600">{user.profession}</p>
    </div>

    <div class="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        class="h-40 w-40 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div>
    <span>Orders Completed : </span>
    <span className='text-green-600 font-bold'> {user.Rentings}</span>
        
    
  </div>
  <div>
    <p>{user.phone}</p>
    <p>{user.email}</p>
  </div>

  <div class="mt-4">
   
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Joined</dt>
      <dd class="text-xs text-gray-500">{formattedDate(user.joined)}</dd>
    </div>

   
  </dl>
<div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-1/2 flex flex-col 2xl:w-1/3">
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
                  <span class="text-green-600 font-bold ">{user.Rentings}</span>
                </li>
               
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Joined:</span>
                  <span class="text-gray-700">{formattedDate(user.joined) }</span>
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
       </div>
   </a>



    </div>
  )
}

export default Profile