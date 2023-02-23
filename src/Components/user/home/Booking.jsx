import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
// import Calendar from 'react-calendar'
import BookingCalender from '../../Calender/BookingCalender'

function Booking() {
    const navigate = useNavigate()
    const location = useLocation()
    const productId = location?.state
    const [product,setProduct] = useState('')
    const [totalDays, setTotalDays] = useState('')
    const [allDates, setAllDates] = useState('')
    // const [date, setDate] = useState('')


    const placeBooking = () =>{
        axios.post("http://localhost:3000/bookProduct",{
         productId : product._id,
         totalPrice : product.rentPrice*totalDays,
         dates : allDates
        }, { headers : {
            Authorization : "Bearer " + localStorage.getItem("token"),
        }})
        .then((response) => {
           
          toast.success(" TOOL Booked")
          navigate("/Orders")
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

    useEffect(()=>{
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

    },[])
  return (
    <div>
   
<section>
  <div class="relative bg-slate-100 mx-auto max-w-screen-xl px-4 py-8">
    <div>
      <h1 class="text-2xl font-bold lg:text-3xl">{product.productName}</h1>

      <p class="mt-1 text-sm text-gray-500">{product.brandName}</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-5 lg:items-start">
      <div class="lg:col-span-3">
        <div class="relative ml-10 mt-4">
          <img
            alt="Tee"
            src={product.imageUrl}
            class="h-72 w-fit rounded-xl object-cover lg:h-[540px]"
          />

          <div
            class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
          >
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
                   <BookingCalender updateData={setTotalDays}  updateDates ={setAllDates}/>
                </div>
                
            </div>
        
          <div className='w-96 flex justify-center mt-5 align-middle px-5'>
            <p class="text-xl font-bold">RS. {product.rentPrice}/DAY</p>
          </div>
          <div className='w-96 flex justify-center mt-5 align-middle px-5'>
           <p className='text-xl font-bold'>Total amount :</p> <p class="text-green-500 text-xl font-bold"> RS.{product.rentPrice*totalDays}</p>
          </div>
          <div className='w-96 flex justify-center mt-5 align-middle px-5'>
          <button
            onClick={placeBooking}
            class="w-full rounded bg-green-600 px-8  py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            BOOK NOW
          </button>      
              </div>



          
       
      </div>

      <div class="lg:col-span-3">
        <div
          class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
            labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
            accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
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
  )
}

export default Booking