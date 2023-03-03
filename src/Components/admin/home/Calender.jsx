import React from 'react'
import axios from "../../../axios"
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import {Fragment, useState , useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 
let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]


  
function Calender() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  const [updation,setUpdation] = useState('')
  const[ allOrders,setAllOrders] = useState([])
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })
  const getAllOreders = () => {
      axios.get("/admin/getAllBookingsCalander").then((response) => {
        console.log(response);
        let orders = response.data.allOrders
        setAllOrders(orders)
      }) .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  }
  useEffect(() => {
    getAllOreders()
    
  },[updation])
    
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }
  let selectedDayOrders = allOrders.filter((orders) =>
isSameDay(parseISO(orders.dates[0]), selectedDay))

let selectedDayReturns = allOrders.filter((orders) =>
isSameDay(parseISO(orders.dates[orders.dates.length-1]), selectedDay)
)
console.log(allOrders);



  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14 p-5 h-96  rounded-sm  md:sticky top-10 ">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500 font-bold">
              <div className='text-red-600'>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm font-bold">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500 font-bold',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) && ! isPast(day)&&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-blue-800 ',
                        isPast(day)  && !isToday(day) &&" text-gray-400" , 
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {allOrders.some((orders) =>
                      isSameDay(parseISO(orders.dates[0]), day)
                    ) && (
                      <div className="w-2 h-1 rounded-full bg-sky-500"></div>
                    )}
                     {allOrders.some((orders) =>
                      isSameDay(parseISO(orders.dates[orders.dates.length-1]), day)
                    ) && (
                      <div className="w-2 h-1 rounded-full bg-red-700"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayOrders.length > 0 ? (
                
                selectedDayOrders.map((orders , index) => (
                  
                  <Booking orders={orders} updateData={setUpdation}  />

                ))
              ) : (
                <p>No Orders for today.</p>
                
              )}
            </ol>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayReturns.length > 0 ? (
                selectedDayReturns.map((orders , index) => (
                  <Returns orders={orders} updateData={setUpdation}    />
                ))
              ) : (
                <p>No Returns for today.</p>
                
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Booking({ orders ,updateData  }) {
  let orderId = orders._id
 

  const changeOrderStatus = (update) =>{
    
    axios.post("/admin/changeOrderStatus",{update,orderId})
    .then((response) => {
        toast.success("Product delivered")
        updateData("Delivered")
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
 

  return (
    <div>
       
    <li className="flex items-center px-4 py-2 space-x-4 group  shadow-xl rounded-xl bg-sky-200 focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={orders.productId.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900 font-semibold">{orders.productId.productName}</p>
        <p className="mt-0.5">
          {orders.productId.brandName}
        </p>
        <p className="text-gray-900 "> Ordered by {orders.userId.name}</p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                  to="/admin/singleOrder"
                  state={orderId}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    View
                  </Link>
                )}
              </Menu.Item>
              
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={()=> {
                     changeOrderStatus("Renting")
                    }}
                    className={classNames(
                      active ? 'bg-gray-100 cursor-pointer text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Delivered
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
    </div>
  )
}

function Returns({ orders ,updateData }) {
  let orderId = orders._id
 
  const changeOrderStatus = (update) =>{
    
    axios.post("/admin/changeOrderStatus",{update,orderId})
    .then((response) => {
        toast.success("Order Completed")
        updateData("Order Completed")
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

 
  return (
    <div>
      
    <li className="flex items-center px-4 py-2 space-x-4 group  shadow-xl bg-orange-200 rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={orders.productId.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900 font-semibold">{orders.productId.productName}</p>
        <p className="mt-0.5">
          {orders.productId.brandName}
        </p>
        <p className="text-gray-900 "> Ordered by {orders.userId.name}</p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                  to="/admin/singleOrder"
                  state={orderId}
                    className={classNames(
                      active ? 'bg-gray-100 cursor-pointer text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                   View
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={()=> {
                      changeOrderStatus("Completed")
                    }}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                   Completed
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
    </div>
  )
}


export default Calender