import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useLocation } from 'react-router-dom'
import AdminCalender from '../../Calender/AdminCalender'
// import BookingCalender from '../../Calender/BookingCalender'

function AdminSingleProduct() {
    const location = useLocation()
    const productId = location?.state
    const [product,setProduct] = useState('')
    const [update,setUpdate] = useState('')

    

    const listProduct = () =>{
        axios.get(`/admin/listProduct/${productId}`)
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
        axios.get(`/admin/unlistProduct/${productId}`)
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
        axios.get(`/singleView/${productId}`)
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

            <p class="mt-1 text-lg font-semibold  text-gray-500">{product.brandName}</p>
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
            
            <div class=" w-96 ">
                <div class=" font-black bg-white ">
                   <AdminCalender productId ={productId}/>
                </div>
              </div>

                <div className=" mt-4 w-96 px-5">
                  <p class="text-xl text-center font-bold">Rs.{product.rentPrice}/DAY</p>
                  <Link 
                  to= "/admin/addProduct"
                  state={productId} >
                  <button
                  
                  type="button"
                  class="w-36 mt-3 rounded bg-gradient-to-r from-indigo-400 to-cyan-400 px-8  py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                 Edit
                </button>
                  </Link>
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
