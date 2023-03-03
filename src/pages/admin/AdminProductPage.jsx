import React from 'react'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from '../../Components/admin/home/AdminNav'
import AdminSingleProduct from '../../Components/admin/home/AdminSingleProduct'

function adminProductPage() {
  return (
    <div className='flex'>
    <DashBoard  button="products"/>
    <div className='w-full'>
        <AdminNav/>
        <AdminSingleProduct/>
    </div>

</div>
  )
}

export default adminProductPage