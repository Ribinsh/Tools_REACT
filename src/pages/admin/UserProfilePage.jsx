import React from 'react'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from "../../Components/admin/home/AdminNav" 
import UserProfile from "../../Components/admin/home/UserProfile"

function UserProfilePage() {
  return (
    <div className='flex'>
        
        <DashBoard  button="customers"/>
        
        <div className='w-full '>
        <AdminNav/>
        <UserProfile/>
        </div>

    </div>
  )
}

export default UserProfilePage