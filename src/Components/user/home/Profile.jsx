import React from 'react'

function Profile() {
  return (
    <div>
        
<div
                                            class="h-full flex flex-col bg-gray-100  shadow-xl overflow-y-scroll">
                                            <div class="ml-3 h-7 flex justify-end items-center">
                                                <button type="button"
                                                    class="bg-gray-100  m-1 p-3 justify-end rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                                                    <span class="sr-only">Close panel</span>
                                                  
                                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="bg-green-300 shadow-lg pb-3 rounded-b-3xl">
                                                <div
                                                    class="flex  rounded-b-3xl bg-gray-100 space-y-5 flex-col items-center py-7">
                                                    <img class="h-28 w-28 rounded-full"
                                                        src="https://i.pinimg.com/originals/4c/41/ef/4c41eff22888e5e5d8277cf5121691db.png"
                                                        alt="User"/>
                                                    <a href="#"> <span
                                                            class="font-bold text-2xl  text-teal-600 ">Ribinsh</span></a>
                                                </div>
                                                <div
                                                    class="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
                                                    <div class="col-span-1 flex flex-col items-center ">
                                                        <span class="text-2xl font-bold dark:text-gray-500">4</span>
                                                        <span class="text-lg font-medium 0">Rentings</span>
                                                    </div>
                                                    <div class="col-span-1 px-3 flex flex-col items-center ">
                                                        <span class="text-2xl font-bold dark:text-gray-500">
                                                        Engineer</span>
                                                        <span class="text-lg font-medium">Profession</span>
                                                    </div>
                                                    <div class="col-span-1 px-3 flex flex-col items-center ">
                                                        <span class="text-2xl font-bold dark:text-gray-500">
                                                            546</span>
                                                        <span class="text-lg font-medium">Wallet Money</span>
                                                    </div>
                                                </div>

                                            </div>

                                            <div
                                                class="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
                                                <div class="col-span-1  p-3">
                                                    <div class="flex flex-col items-center ">
                                                        <a href=""> <button
                                                                class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span class="text-lg font-medium">Address</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                                <div class="col-span-1  p-3">
                                                    <div class="flex flex-col items-center ">
                                                        <a href=""> <button
                                                                class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                                </svg>
                                                                <span class="text-lg font-medium">Payments</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                                <div class="col-span-1  p-3">
                                                    <div class="flex flex-col items-center ">
                                                        <a href=""> <button
                                                                class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                                                </svg>
                                                                <span class="text-lg font-medium">Notifications</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                                <div class="col-span-1  p-3">
                                                    <div class="flex flex-col items-center ">
                                                        <a href="">
                                                            <button class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                                <span class="text-lg font-medium">Edit Details</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                                <div class="col-span-1  p-3">
                                                    <div class="flex flex-col items-center ">
                                                        <a href=""> <button class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                <span class="text-lg font-medium">History</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                                <div class="col-span-1 bg-red-200 p-3">
                                                    <div class="flex  flex-col items-center ">
                                                        <a href=""> <button class="tr-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-14 w-14 text-gray-500" fill="none"
                                                                    viewBox="0 0 24 24" stroke="currentColor"
                                                                    stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                                </svg>
                                                                <span class="text-lg font-medium">Logout</span>
                                                            </button></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="flex mx-auto mt-3 w-100 ">
                                                <a href=""> <button
                                                        class="p-2 shadow-lg rounded-2xl tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">Mejorar
                                                        membresía</button></a>
                                            </div>
                                        </div>
    </div>
  )
}

export default Profile