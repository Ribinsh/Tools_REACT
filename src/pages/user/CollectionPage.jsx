import React from 'react'
import FeaturProduct from '../../Components/user/home/FeaturProduct'
import Footer from '../../Components/user/home/Footer'
import Items from '../../Components/user/home/Items'
import Nav from '../../Components/user/home/Nav'

function CollectionPage() {
  return (
    <div>
        <Nav/>
        <Items/>
        <FeaturProduct/>
       
        <Footer/>
    </div>
  )
}

export default CollectionPage