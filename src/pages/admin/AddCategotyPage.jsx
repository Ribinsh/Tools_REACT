import React from 'react'
import NewCategory from '../../Components/admin/home/NewCategory'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from "../../Components/admin/home/AdminNav"

function AddCategotyPage() {
  return (
    <div>
         <div className='flex'>
        

        <DashBoard/>
        
        <div className='w-full '>
        <AdminNav/>
        <NewCategory/>
        </div>
    </div>
    </div>
  )
}

export default AddCategotyPage