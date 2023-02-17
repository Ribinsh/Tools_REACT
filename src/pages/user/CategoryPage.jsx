import React from 'react'
import AddCategory from '../../Components/admin/home/AddCategory'
import Footer from '../../Components/user/home/Footer'
import Nav from '../../Components/user/home/Nav'

function categoryPage() {
  return (
    <div>
       <Nav/>
       <AddCategory from="user"/>
       <Footer/> 
    </div>
  )
}

export default categoryPage