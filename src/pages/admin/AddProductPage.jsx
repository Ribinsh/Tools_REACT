import React from 'react'
import AddProduct from '../../Components/admin/home/AddProduct'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from "../../Components/admin/home/AdminNav"

function AddProductPage() {
  return (
    <div className='flex'>
        

        <DashBoard  button="addProducts"/>
        
        <div className='w-full '>
        <AdminNav/>
        <AddProduct/>
        </div>
    </div>
  )
}

export default AddProductPage