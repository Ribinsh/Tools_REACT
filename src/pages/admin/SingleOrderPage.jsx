import React from 'react'
import DashBoard from '../../Components/admin/home/DashBoard'
import AdminNav from'../../Components/admin/home/AdminNav'
import OrderManagement from '../../Components/admin/home/OrderManagement'

function singleOrderPage() {
  return (
    <div className='flex'>
    <DashBoard  button="allOrders"/>
    <div className='w-full'>
        <AdminNav/>
       <OrderManagement/>

    </div>

</div>
  )
}

export default singleOrderPage