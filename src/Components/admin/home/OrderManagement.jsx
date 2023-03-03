import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import axios from "../../../axios";

function OrderManagement() {
  const location = useLocation();
  const orderId = location?.state;
  const [orderDetails, setOrderDetails] = useState("");
  const [updation,setUpdation] = useState('')

  const options = { month: "long", day: "numeric" };
  const formattedDate = (date) => {
    const dateObj = new Date(date);
    const updatedDate = dateObj.toLocaleDateString("en-US", options);
    return updatedDate;
  };

  const payment = (orderId) => {
      axios.post("/admin/offlinePayment",{orderId})
      .then((response) => {
        toast.success("Payment Updated")
        setUpdation("paid")
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

  const changeOrderStatus = (update) =>{
    
    axios.post("/admin/changeOrderStatus",{update,orderId})
    .then((response) => {
        toast.success("Order Updated")
        setUpdation("Order status updated")
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

  const getOrderDetails = () => {
    axios
      .get(`/admin/getOrderDetails/${orderId}`)
      .then((response) => {
        let orderData = response.data.order;
        console.log(orderData);
        setOrderDetails(orderData);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  };

  useEffect(() => {
    getOrderDetails();
  }, [updation]);

  return (
    <div>
      <article class="flex bg-white transition hover:shadow-xl">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            {/* <span>{formattedDate(orderDetails.dates[0])}</span> */}
            <span class="w-px flex-1 bg-gray-900/10"></span>
            {/* <span>{formattedDate(orderDetails.dates[dates.length-1])}</span> */}
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="">
              <h3 class="font-bold uppercase text-gray-900">
                ${/* {orderDetails.productId.productName} */}
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              {orderDetails.orderStatus}
            </p>
            <div>
              <span>Booked days :</span>{" "}
              <span className="font-bold"> {orderDetails.totalDays}</span>
              <span className="ml-5">Amount :</span>{" "}
              <span className="font-bold"> {orderDetails.totalPrice}</span>
            </div>

            <div>
              <span>Paymant :</span>
              {orderDetails.paymentStatus === "Not paid" && (
                <span className="font-bold text-red-600">
                  {" "}
                  {orderDetails.paymentStatus}
                </span>
              )}
              {orderDetails.paymentStatus === "Paid" && (
                <span className="font-bold text-emerald-500">
                  {" "}
                  {orderDetails.paymentStatus}
                </span>
              )}
            </div>
          </div>

          <div className="ml-7">
            <div className="w-44 mb-4">
              {orderDetails.paymentStatus === "Not paid" && (
                <a 
                onClick={()=> {
                    payment(orderDetails._id)
                }}
                  class="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-emerald-300 px-2 py-2 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
                  
                >
                  Payment recieved
                </a>
              )}
            </div>

            {orderDetails.orderStatus === "Booked" && (
              <a
              onClick={()=> {
                changeOrderStatus("Canceled")
              }}
                class="group relative inline-block focus:outline-none focus:ring"
                href=""
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Cancel
                </span>
              </a>
            )}

            {orderDetails.orderStatus === "Booked" && (
              <a
              onClick={()=> {
                changeOrderStatus("Renting")
              }}
                class="group relative inline-block focus:outline-none focus:ring ml-2"
                href=""
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-sky-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Delivered
                </span>
              </a>
            )}

            {orderDetails.orderStatus === "Renting" && (
              <a
              onClick={()=> {
                changeOrderStatus("Pending")
              }}
                class="group relative inline-block focus:outline-none focus:ring ml-2"
                
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-orange-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  Pending
                </span>
              </a>
            )}
            {orderDetails.orderStatus === "Renting" && (
              <a
              onClick={()=> {
                changeOrderStatus("Completed")
              }}
                class="group relative inline-block focus:outline-none focus:ring ml-2"
                
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  Completed
                </span>
              </a>
            )}
             {orderDetails.orderStatus === "Booked" && (
              <a 
              onClick={()=> {
                changeOrderStatus("Completed")
              }}
                class="group relative inline-block focus:outline-none focus:ring ml-2"
                
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  Completed
                </span>
              </a>
            )}
             {orderDetails.orderStatus === "Pending" && (
              <a 
              onClick={()=> {
                changeOrderStatus("Completed")
              }}
                class="group relative inline-block focus:outline-none focus:ring ml-2"
                
              >
                <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  Completed
                </span>
              </a>
            )}
          </div>

          <div class="sm:flex sm:items-end sm:justify-end mt-9">
            {orderDetails.orderStatus === "Booked" && (
              <a
                href=""
                class="block bg-sky-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Booked
              </a>
            )}
            {orderDetails.orderStatus === "Canceled" && (
              <a
                href=""
                class="block bg-red-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Canceled
              </a>
            )}
            {orderDetails.orderStatus === "Renting" && (
              <a
                href=""
                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                renting
              </a>
            )}
            {orderDetails.orderStatus === "Pending" && (
              <a
                href=""
                class="block bg-orange-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Pending
              </a>
            )}
            {orderDetails.orderStatus === "Completed" && (
              <a
                href=""
                class="block bg-emerald-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Completed
              </a>
            )}
          </div>
        </div>
      </article>

      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          {" "}
        </span>
        <h1 className="text-center font-bold text-blue-500 text-xl font-mono">
          Customer Details
        </h1>
        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              {/* {orderDetails.userId.name} */}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </div>
  );
}

export default OrderManagement;
