import React from 'react'
import construction from '../../../assets/images/work/construction.jpg'
import welding from '../../../assets/images/work/welding.png'
import engineer from '../../../assets/images/work/engineer.png'
import worker from '../../../assets/images/work/worker.png'
import diy from '../../../assets/images/work/diy.png'
import general from '../../../assets/images/work/general.png'


function work() {
  return (
    <div className='py-6 px-20   w-screen  bg-gray-100'>
        <h1 className='font-sans font-medium text-2xl'>CAN CHOOSE DEFFERENT WORK </h1>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-5 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg  h-20 w-20" src={construction} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">CONSTRUCTION</p>
                
            </div>
        </div>
        <div class="w-40 h-40 mt-7 hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-20 w-20" src={welding} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">WELDING</p>
                
            </div>
        </div>
        <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-20 w-20" src={engineer} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">ENGINEER</p>
                
            </div>
        </div>

        <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-20 w-20" src={worker} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">WORKER</p>
                
            </div>
        </div>
        <div class="w-40 h-40 mt-7 hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-20 w-24" src={diy} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">DIY</p>
               
            </div>
        </div>
        <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-20 w-20" src={general} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-lg text-gray-700 font-bold mb-2">GENERAL</p>
               
            </div>
        </div>
        
        
    </div>

    </div>
  )
}

export default work