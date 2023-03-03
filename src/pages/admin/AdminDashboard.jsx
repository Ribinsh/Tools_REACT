import React from 'react'
import Dashboard from '../../Components/admin/home/DashBoard'
import AdminNav from '../../Components/admin/home/AdminNav'
import Reports from '../../Components/admin/home/Reports'
import Graph from '../../Components/admin/home/Graph'

function AdminDashboard() {
  return (
    <div className='flex'>
        <Dashboard  button="dashboard"/>
        <div className=' w-full'>
        <AdminNav/>
        <Reports/>
        <Graph/>
        </div>
    </div>
  )
}

export default AdminDashboard