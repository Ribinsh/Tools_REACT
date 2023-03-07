import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../../axios'


function Reports() {
    const [totalSales ,setTotalSales] = useState('')
    const [totalUsers, setTotalUsers] = useState()
    const [totalProducts, setTotalProducts] = useState()
    

  const getTotalSales =() => {
      axios.get("/admin/getTotalSales")
      .then((response) => {
        setTotalSales(response.data.totalOrders)
      })

  }
  const getTotalUsers =() => {
    axios.get("/admin/getTotalUsers")
    .then((response) => {
      setTotalUsers(response.data.totalUsers)
    })

}

const getTotalProducts =() => {
    axios.get("/admin/getTotalProducts")
    .then((response) => {
      setTotalProducts(response.data.totalProducts)
    })

}

    useEffect(() => {
     getTotalSales()
     getTotalUsers()
     getTotalProducts()
    },[])
  return (
    <div>
        <div class=" flex w-full bg-teal-500  items-center justify-center px-5 py-5">
    <div class="w-full max-w-3xl">
        <div class="-mx-2 md:flex">
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Users</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">{totalUsers}</h3>
                            <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart1" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Completed Orders</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">{totalSales}</h3>
                            <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart2" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">All products</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">{totalProducts}</h3>
                            <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart3" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Reports