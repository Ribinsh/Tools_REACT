import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'


function AdminSingleProduct() {
    const location = useLocation()
    const productId = location?.state
    const [product,setProduct] = useState('')
    const [update,setUpdate] = useState('')

    

    const listProduct = () =>{
        axios.get(`http://localhost:3000/admin/listProduct/${productId}`)
        .then((response) => {
         toast.success("Product Updated")
          setUpdate("listed")
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

    const unListProduct = () =>{
        axios.get(`http://localhost:3000/admin/unlistProduct/${productId}`)
        .then((response) => {
            toast.success("Product Updated") 
            setUpdate("unlisted")
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

    const getProduct = () => {
        axios.get(`http://localhost:3000/singleView/${productId}`)
        .then((response) => {
          setProduct(response.data.product) 
          
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

    useEffect (()=>{
        getProduct()
    },[update])

  return (
    <div>
      <section>
        <div class="relative bg-slate-100 mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 class="text-2xl font-bold lg:text-3xl">
              {product.productName}
            </h1>

            <p class="mt-1 text-sm text-gray-500">{product.brandName}</p>
          </div>

          <div class="grid gap-8 lg:grid-cols-5 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt="Tee"
                  src={product.imageUrl}
                  class="h-72 w-fit rounded-xl object-cover lg:h-[540px]"
                />

                <div class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>

                  <span class="ml-1.5 text-xs"> Hover to zoom </span>
                </div>
              </div>

             
            </div>

            <div class="lg:sticky lg:top-0">
            
                <fieldset>
                  <div class="flex items-center justify-center  px-4">
                    <div class="max-w-sm w-full shadow-lg">
                      <div class="md:p-8 p-5 font-black bg-white rounded-t">
                        <div class="px-4 flex items-center justify-between">
                          <span
                            tabindex="0"
                            class="focus:outline-none  text-base font-bold text-gray-800"
                          >
                            October 2020
                          </span>
                          <div class="flex items-center">
                            <button
                              aria-label="calendar backward"
                              class="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-left"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="15 6 9 12 15 18" />
                              </svg>
                            </button>
                            <button
                              aria-label="calendar forward"
                              class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler  icon-tabler-chevron-right"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="9 6 15 12 9 18" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="flex items-center justify-between pt-12 overflow-x-auto">
                          <table class="w-full">
                            <thead>
                              <tr>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Mo
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Tu
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      We
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Th
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Fr
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Sa
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800">
                                      Su
                                    </p>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      1
                                    </p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">3</p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">4</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      5
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      6
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      7
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="w-full h-full">
                                    <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                      <a
                                        role="link"
                                        tabindex="0"
                                        class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full"
                                      >
                                        8
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      9
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">10</p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">11</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      12
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      13
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      14
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      15
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      16
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">17</p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">18</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      19
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      20
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      21
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      22
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      23
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">24</p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500">25</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      26
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      27
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      28
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      29
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 font-medium">
                                      30
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className=" w-96 px-5">
                  <p class="text-xl text-center font-bold">Rs.{product.rentPrice}/DAY</p>
                  <button 
                  type="button"
                  class="w-36 rounded bg-gradient-to-r from-indigo-400 to-cyan-400 px-8  py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                 Edit
                </button>
               {product.listingStatus === "Unlist" && 
                <button onClick={listProduct}
                  type="button"
                  class="w-36 ml-3 rounded bg-gradient-to-r from-emerald-500 to-emerald-900 px-8  py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                 List
                </button>
               }

               { product.listingStatus === "List" && 
                     <button  onClick={unListProduct}
                     type="button"
                     class="w-36 ml-3 rounded bg-gradient-to-r from-rose-600 to-stone-800 px-8  py-3 text-sm font-bold uppercase tracking-wide text-white"
                   >
                       Unlist
                   </button>
               }


                </div>
              
              
            </div>

            <div class="lg:col-span-3">
            <div class=" md:p-8  w-full mt-5 ml-3 p-5 font-black bg-gradient-to-r from-teal-200 to-teal-500 rounded-t">
                    <h1 className='text-white text-center text-2xl'>Product Status</h1>
                    <h1 className='text-2xl text-center  text-blue-500'>{product.listingStatus}</h1>
                  <h1 className='text-white text-center text-2xl'>Product Price</h1>
                        <h1 className='text-2xl text-center  text-red-600'>{product.price}</h1>
                  <h1 className='text-white   text-center  text-2xl'>Total Rentings</h1>
                  <h1 className='text-black text-center  text-2xl'>{product.totalRentings}</h1>
                  <h1 className='text-white text-center  text-2xl'>Total Earnings</h1>
                  <h1 className='text-green-600 text-center  text-2xl'>{product.totalEarning}</h1>
              </div>
              <div class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem ad labore nostrum, a explicabo iste est dolorem deserunt
                  id ullam magni accusamus saepe, nulla sed sint reiciendis,
                  aperiam cumque officiis!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
                </p>

                <h2>Features</h2>

                <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminSingleProduct;
