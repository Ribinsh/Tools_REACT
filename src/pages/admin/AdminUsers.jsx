import React from 'react'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from '../../Components/admin/home/AdminNav'
import UsersList from '../../Components/admin/home/UsersList'

function AdminUsers() {
  return (
    <div className='flex'>
        <DashBoard/>
        <div className='w-full'>
            <AdminNav/>
            <UsersList/>
        </div>

    </div>
  )
}

export default AdminUsers