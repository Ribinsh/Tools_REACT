import React from 'react'

function Orders() {
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
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://5.imimg.com/data5/HP/PV/MY-18623913/hitachi-professional-hand-drilling-machine-500x500.jpg" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Driller</p>
                  <p class="text-xs text-gray-600">Hitachi</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">200</td>
            <td class="px-4 py-3 text-sm border">6/4/2000</td>
            <td class="px-4 py-3 text-sm border">8/4/2000</td>
            <td class="px-4 py-3 text-ms font-semibold border">2</td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Returned </span>
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Paid </span>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://5.imimg.com/data5/HP/PV/MY-18623913/hitachi-professional-hand-drilling-machine-500x500.jpg" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Chain Saw</p>
                  <p class="text-xs text-gray-600">Machine</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-md font-semibold border">270</td>
            <td class="px-4 py-3 text-sm border">6/10/2020</td>
            <td class="px-4 py-3 text-sm border">7/10/2020</td>
            <td class="px-4 py-3 text-ms font-semibold border">2</td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Delay </span>
            </td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Delay </span>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://5.imimg.com/data5/HP/PV/MY-18623913/hitachi-professional-hand-drilling-machine-500x500.jpg" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Chain Saw</p>
                  <p class="text-xs text-gray-600">Machine</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-md font-semibold border">150</td>
            <td class="px-4 py-3 text-sm border">6/10/2020</td>
            <td class="px-4 py-3 text-sm border">7/10/2020</td>
            <td class="px-4 py-3 text-ms font-semibold border">1</td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-gray-100 rounded-sm"> Renting </span>
            </td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-blue-400 bg-gray-100 rounded-sm"> Pay now </span>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://5.imimg.com/data5/HP/PV/MY-18623913/hitachi-professional-hand-drilling-machine-500x500.jpg" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Chain Saw</p>
                  <p class="text-xs text-gray-600">Machine</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-md font-semibold border">200</td>
            <td class="px-4 py-3 text-sm border">6/10/2020</td>
            <td class="px-4 py-3 text-sm border">7/10/2020</td>
            <td class="px-4 py-3 text-ms font-semibold border">5</td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-gray-100 rounded-sm"> Renting </span>
            </td>

            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-gray-100 rounded-sm"> Paid </span>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</section>
    </div>
  )
}

export default Orders