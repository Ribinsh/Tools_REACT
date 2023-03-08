import axios from "../../../axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ReactDOM from "react-dom";

function Orders() {
  const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
 
  const [bookings, setBookings] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [amount,setAmount] = useState("")
  const [upadated, setUpdated] = useState("Not")

const options = { year: 'numeric', month: 'long', day: 'numeric' };
 
  const formattedDate = (date) => {
    const dateObj = new Date(date);
        const updatedDate = dateObj.toLocaleDateString('en-US', options)
        return updatedDate
  }
  

   const payment = (orderId, amount) =>{
      setOrderId(orderId)
      setAmount(amount)
   }
  const getBookings = () => {
    axios
      .get("/getBooking", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        let allOrders = response.data.allOrders;

        setBookings(allOrders);
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
    getBookings();
  }, [upadated]);

  const createOrder = (data, actions) => {
   
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
      
    axios
    .post("/payAmount",  {orderId}, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response);
      toast.success("Payment Successful")
      setUpdated("Updated")
    })
    .catch((error) => {
          if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.message);
      }
    });

   console.log("paid");


    return actions.order.capture();
  };

  return (
    <div>
      <section className="container mx-auto p-6 font-mono">
        <h1 className="flex py-5 md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Your Renting List
        </h1>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Booked Date</th>
                  <th className="px-4 py-3">Return Date</th>
                  <th className="px-4 py-3">Days</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Payment</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {bookings.map((data) => (
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={data.productId.imageUrl}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">
                            {data.productId.productName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {data.productId.brandName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {data.totalPrice}
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      { formattedDate(data.dates[0]) }
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      {formattedDate(data.dates[data.dates.length - 1]) }
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {data.totalDays}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {data.orderStatus === "Booked" && (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          Booked{" "}
                        </span>
                      )}
                       {data.orderStatus === "Pending" && (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-orange-300 rounded-sm">
                          {" "}
                          Pending{" "}
                        </span>
                      )}
                       {data.orderStatus === "Canceled" && (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm">
                          {" "}
                          Canceled{" "}
                        </span>
                      )}
                      {data.orderStatus === "Renting" && (
                        <span className="px-2 py-1 font-semibold leading-tight text-yellow-500 bg-gray-100 rounded-sm">
                          
                          Renting
                        </span>
                      )}
                      {data.orderStatus === "Completed" && (
                        <span className="px-2 py-1 font-semibold leading-tight text-blue-500 bg-gray-100 rounded-sm">
                          
                        Completed
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs border">

                  

                      {data.paymentStatus === "Not paid" ? (
                        data._id === orderId ? (
                          <PayPalButton
                            createOrder={(data, actions) =>
                              createOrder(data, actions)
                            }
                            onApprove={(data, actions) =>
                              onApprove(data, actions)
                            }
                          />
                        ) : (
                          <button
                            onClick={() => payment(data._id , data.totalPrice)
                            }
                            className="cursor-pointer"
                          >
                            <span className="px-2 py-1 font-semibold leading-tight text-blue-400 bg-gray-100 rounded-sm">
                              
                              Pay now
                            </span>
                          </button>
                        )
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          
                          Paid
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Orders;
