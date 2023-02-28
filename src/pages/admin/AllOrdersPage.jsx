import React from 'react'
import DashBoard from '../../Components/admin/home/DashBoard'
import AdminNav from'../../Components/admin/home/AdminNav'
import OrdersTable from '../../Components/admin/home/OrdersTable'

function AllOrdersPage() {
  return (
    <div className='flex'>
    <DashBoard/>
    <div className='w-full'>
        <AdminNav/>
        <OrdersTable/>

    </div>

</div>
  )
}

export default AllOrdersPage