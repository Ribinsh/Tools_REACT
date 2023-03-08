import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-date-picker";
import axios from "../../../axios";

function SalesReport() {
    const [selectedDate , setSelectedDate] = useState(new Date())

    const [data,setData] = useState('')
   
    const  getDetails = () => {
        axios.post("/admin/getDaySales" ,{date:selectedDate})
        .then((response)=> {
           
            setData(response.data.result)
           
        })   
    }

    useEffect(() => {
       getDetails()
    },[selectedDate])

    
  return (

   
    
        <section>
          <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                <h2 class="text-3xl font-bold sm:text-4xl">
                  Sales report of the day
                </h2>

                <p class="mt-4 text-gray-600">
                Here you can see the total sales and orders of the day , You can also find the total orders completed and pending. By using the date picker you can choose whatever date you want and the report card will be changed on the basis of thw choosen date
                </p>
                <h1 className=" mt-10 text-lg text-emerald-500"> Change date</h1>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  className="block w-full px-4 py-2 mt-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                 />
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Sales</h2>

                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.total_sales}</h1>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Total  Orders </h2>

                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.completed_orders}</h1>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">completed Orders</h2>
                  
                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.completed_orders}</h1>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">New Bookings</h2>

                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.new_orders}</h1>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">online Payments </h2>

                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.onlinePayment}</h1>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Payment pending</h2>

                  <h1 class=" text-center text-3xl  sm:text-gray-600 ">{data?.notPaid}</h1>
                </a>
              </div>
            </div>
          </div>
        </section>
      
  );
}

export default SalesReport;
