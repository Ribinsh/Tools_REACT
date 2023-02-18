import React from 'react'
import DashBoard from "../../Components/admin/home/DashBoard"
import AdminNav from "../../Components/admin/home/AdminNav"
import ProdutTable from '../../Components/admin/home/ProdutTable'
import { useLocation } from 'react-router-dom'

function ProductListPage() {
    const location = useLocation()
    const data = location?.state
    
  return (
    <div className='flex'>
        

        <DashBoard/>
        
        <div className='w-full '>
        <AdminNav/>
        {data ?
        <ProdutTable category={data}/>  : <ProdutTable category=''/>
        }
        </div>
    </div>
  )
}

export default ProductListPage