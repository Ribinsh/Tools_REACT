import React from 'react'
import Calender from '../../Components/admin/home/Calender'
import DashBoard from '../../Components/admin/home/DashBoard'
import AdminNav from'../../Components/admin/home/AdminNav'

function CalenderPage() {
  return (
    <div className='flex'>
        <DashBoard/>
        <div className='w-full'>
            <AdminNav/>
            <Calender/>

        </div>
 
    </div>
  )
}

export default CalenderPage