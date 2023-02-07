import React from 'react'
import DashBoard from '../../Components/admin/home/DashBoard'
import AdminNav from'../../Components/admin/home/AdminNav'
import AddCategory from '../../Components/admin/home/AddCategory'

function AdminAddCategory() {
  return (
    <div className='flex'>
        <DashBoard/>
        <div className='w-full'>
            <AdminNav/>
            <AddCategory/>

        </div>
 
    </div>
  )
}

export default AdminAddCategory