import React from 'react'
import Calender from '../../Components/admin/home/Calender'
import DashBoard from '../../Components/admin/home/DashBoard'
import AdminNav from'../../Components/admin/home/AdminNav'

function CalenderPage() {
  return (
    <div className='flex'>
        <DashBoard  button="calender"/>
        <div className='w-full'>
            <AdminNav/>
            <Calender/>

        </div>
 
    </div>
  )
}

export default CalenderPage