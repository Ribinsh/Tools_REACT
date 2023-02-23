import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

function Orders() {
   const [bookings,setBookings] = useState([])
      console.log(bookings);
   const getBookings = () => {
    axios.get("http://localhost:3000/getBooking",
     { headers : {
         Authorization : "Bearer " + localStorage.getItem("token"),
     }})
     .then((response) => {
      console.log(response);
      let allOrders = response.data.allOrders
     
      setBookings(allOrders)
     })
     .catch((error) => {
       console.log(error);
       if (error.response) {
         toast.error(error.response.data.error);
       } else {
         toast.error(error.message);
       }
     })
   }

   useEffect(()=> {
        getBookings()  
   },[])


  return (
    <div>
       
<section class="container mx-auto p-6 font-mono">
<h1 className="flex py-5 md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Your Renting List
        </h1>
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Item</th>
            <th class="px-4 py-3">Price</th>
            <th class="px-4 py-3">Booked Date</th>
            <th class="px-4 py-3">Return Date</th>
            <th class="px-4 py-3">Days</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Payment</th>
          </tr>
        </thead>
        <tbody class="bg-white">
        
          {bookings.reverse().map((data )=>(

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src={data.productId.imageUrl} alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">{data.productId.productName}</p>
                  <p class="text-xs text-gray-600">{data.productId.brandName}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{data.totalPrice}</td>
            <td class="px-4 py-3 text-sm border">{data.dates[0]}</td>
            <td class="px-4 py-3 text-sm border">{data.dates[data.dates.length-1]}</td>
            <td class="px-4 py-3 text-ms font-semibold border">{data.totalDays}</td>
            <td class="px-4 py-3 text-xs border">
              { data.orderStatus === "Booked" &&
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Booked </span>
            } 
            {data.orderStatus === "Renting" &&
                         <span class="px-2 py-1 font-semibold leading-tight text-yellow-500 bg-gray-100 rounded-sm"> Renting </span>
            }
             {data.orderStatus === "Returned" &&
              <span class="px-2 py-1 font-semibold leading-tight text-blue-500 bg-gray-100 rounded-sm"> Returned </span>
             }

            </td>
            <td class="px-4 py-3 text-xs border">
              {data.paymentStatus === "Not paid" &&
                 <button
                  className='cursor-pointer'>

                   <span class="px-2 py-1 font-semibold leading-tight text-blue-400 bg-gray-100 rounded-sm"> Pay now </span>
                 </button>
              }
              {data.paymentStatus === "Paid" &&
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Paid </span>
              }
            </td>
          </tr>
          ))}


         
         
        </tbody>
      </table>
    </div>
  </div>
</section>
    </div>
  )
}

export default Orders