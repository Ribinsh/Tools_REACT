import React from 'react'
import Banner from '../../Components/user/home/Banner'
import FeaturProduct from '../../Components/user/home/FeaturProduct'
import Footer from '../../Components/user/home/Footer'
import Nav from '../../Components/user/home/Nav'
import PremiumProduct from '../../Components/user/home/PremiumProduct'
import Work from '../../Components/user/home/Work'

function HomePage() {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Work/>
        <FeaturProduct/>
        <PremiumProduct/>
        <Footer/>
        
    </div>
  )
}

export default HomePage