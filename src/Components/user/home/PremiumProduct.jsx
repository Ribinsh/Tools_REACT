import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from '../../../axios'

function PremiumProduct() {
    const navigate = useNavigate()
    const[product,setProduct] = useState([])

    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        axios
        .get("/premiumProduct")
        .then((response) => {
          const data = response.data.product
          
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
 
    },[])

    const bookProduct= () =>{
        if(!token){ toast.error("Please Login...")
     } else{

         navigate('/Booking')
     }
        
    }
  return (
    <div>
           <div className="relative w-screen flex flex-col min-w-0 mb-6 break-words bg-gray-50 rounded-2xl bg-clip-border m-auto p-auto border-0 shadow-2xl">
        <h1 className="flex py-5 md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
           PREMIUM PRODUCTS
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap md:ml-20 ml-10">
            {product.map((product, index)=>(

            <div class="max-w-md w-72 bg-gray-100 shadow-xl transform transition hover:scale-95 duration-300 ease-in-out rounded-xl p-6 mr-5">
              <div class="flex flex-col ">
                <div class="">
                  <div class="relative h-62 w-full mb-3">
                    <div class="absolute flex flex-col top-0 right-0 p-3">
                     
                    </div>
                    <img src={product.imageUrl} alt="Just a flower" class=" w-full   object-fill  rounded-2xl" />
                  </div>
                  <div class="flex-auto justify-evenly">
                    <div class="flex flex-wrap ">
                      <div class="w-full flex-none text-sm flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-gray-800 whitespace-nowrap mr-3 font-semibold">{index+1}</span>
                      </div>
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h1 class="text-lg mr-auto cursor-pointer text-black hover:text-gray-700 font-semibold truncate mb-1">{product.productName}</h1>
                      </div>
                    </div>
                    <div class="text-xl text-black font-bold mt-1">{product.rentPrice}/DAY</div>
                    <Link to={'/Booking'} state={product._id} class="flex space-x-2 text-sm font-medium justify-start mt-3">
                      <button  class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-gray-900 ">
                        <span>Book</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumProduct