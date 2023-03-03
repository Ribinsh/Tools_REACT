import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
function orders() {

  const [bookings,setBookings] = useState([])
  const [tempBookings,setTempBookings] = useState([])
  console.log(tempBookings);
  const [search, setSearch] = useState("");
  
  const searchData = (order) => {
    return search === ""
      ? order
      : order.productId.productName.toLowerCase().includes(search) ||
      order.userId.name.toLowerCase().includes(search) ||
      order.productId.category.toLocaleLowerCase().includes(search) 
         
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = (date) => {
    const dateObj = new Date(date);
        const updatedDate = dateObj.toLocaleDateString('en-US', options)
        return updatedDate
  }

  const filterOrder = (value) => {
    if(value == "All"){
      setTempBookings(bookings)
    } else{

      let filteredOrders = bookings.filter((orders)=>orders.orderStatus === value )
     
      setTempBookings(filteredOrders)
    }
  }

 const   getAllOrders = ()=>{
  axios
  .get("http://localhost:3000/admin/getAllBookings")
  .then((response) => {
    console.log(response);
    let orders = response.data.allOrders
    setBookings(orders)
    setTempBookings(orders)
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


  useEffect(()=> {
   getAllOrders()
  },[])
  return (
    <div>
      <body class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
              <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative">
                  <select class="appearance-none h-full rounded-l border block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div class="relative">
                  <select
                  onChange={(e) =>{
                    let targetValue = e.target.value
                       filterOrder(targetValue)
                  }}  class="appearance-none h-full rounded-r border-t  sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option value= "All"  >All</option>
                    <option value= "Booked">Booked</option>
                    <option value="Renting">Renting</option>
                    <option  value="Completed">Completed</option>
                    <option  value="Pending">Pending</option>
                    <option value="Canceled">Canceled</option>
                    <options></options>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="block relative">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    class="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => {
                    let searchValue = e.target.value.toLocaleLowerCase();
                    setSearch(searchValue);
                  }} 
                  placeholder="Search"
                  class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Product
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Booked By
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Booked date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                       Return Date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                       Total days
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tempBookings.filter(searchData).map((data, index) => (

                        
              
                      <tr>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        
                          <Link 
                            to="/admin/singleOrder"
                            state={data._id}
                            class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                src= {data.productId.imageUrl}
                                alt=""
                              />
                            </div>

                            <div

                              class="ml-3"
                            >
                              <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0  bg-orange-200  opacity-50 rounded-md"
                                ></span>
                                <span class="relative">{data.productId.productName}</span>
                              </span>
                            </div>
                          </Link>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 font-bold">
                            {data.userId.name}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 font-bold">
                            {formattedDate(data.dates[0]) }
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 font-bold">
                          {formattedDate( data.dates[data.dates.length-1])}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <p class="text-green-600 font-bold">
                            {data.totalDays}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {data.orderStatus == "Booked" && (
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Booked</span>
                            </span>
                          )}

                          {data.orderStatus === "Pending" && (
                            <span class="relative   inline-block px-3 py-1 font-semibold bg-red-500 text-gray-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Pending</span>
                            </span>
                          )}

                       {data.orderStatus == "Canceled" && (
                            <span class="relative   inline-block px-3 py-1 font-semibold text-white leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-red-600 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Canceled</span>
                            </span>
                          )}

                        {data.orderStatus == "Renting" && (
                            <span class="relative   inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Renting</span>
                            </span>
                          )}

                        {data.orderStatus == "Completed" && (
                            <span class="relative   inline-block px-3 py-1 bg-green-400 font-semibold text-grey-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-white opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Completed</span>
                            </span>
                          )}
                          
                        </td>
                      </tr>
                      
                    ))}
                  </tbody>
                </table>
                <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span class="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div class="inline-flex mt-2 xs:mt-0">
                    <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default orders;
