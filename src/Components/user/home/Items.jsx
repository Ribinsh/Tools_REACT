import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

import construction from '../../../assets/images/work/construction.jpg'
import welding from '../../../assets/images/work/welding.png'
import engineer from '../../../assets/images/work/engineer.png'
import worker from '../../../assets/images/work/worker.png'
import diy from '../../../assets/images/work/diy.png'
import general from '../../../assets/images/work/general.png'
import { Link } from 'react-router-dom';
// import { StarIcon } from '@heroicons/react/solid'

function Items() {
    const [product,setProduct] = useState([])
    const[tempProduct, setTempProduct]= useState([])
    const[categories,setCategories] = useState([])
    
    const[change,setChange] = useState(false)

    const [search, setSearch] = useState("");

    const showSearch =() =>{
        setChange(true)
    }

    const showFilter = () =>{
        setChange(false)
    }

    

    const filterByCategory =(work) => {
         console.log(work);
        const filteredCategory = categories.filter((category) =>
             category.work.includes(work)
           )
           
           if(filteredCategory){
               
               let filtered = []
                filteredCategory.map((category)=>
                    
                       filtered.push( (product.filter((products)=> products.category === category.categoryName) ) 
                      ) 
                )
                 let resultProduct =[]
                for (let [a, b] of filtered) {
                    resultProduct.push(a, b);
                  }
                  console.log(resultProduct);
                 setTempProduct(resultProduct)
           } 
       
      };
    
    const searchData = (product) => {
      return search === ""
        ? product
        : product.productName.toLowerCase().includes(search) ||
            product.brandName.toLowerCase().includes(search) ||
            product.category.toLocaleLowerCase().includes(search) 
           
    };

    const getCategories = ()=>{
        axios
        .get("http://localhost:3000/admin/getCategories")
        .then((response) => {
          const categories = response.data.catogories;
          
          setCategories(categories);
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
    }

    

   
   
    useEffect(()=>{

        getCategories()
        
        axios
        .get("http://localhost:3000/getAllProduct")
        .then((response) => {
          const data = response.data.product
          setProduct(data);
          setTempProduct(data)
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error(error.message);
          }
        });
    },[])
  return (
    <div className='bg-gray-50'>
        <section>
      {change == true &&
        <div className="relative bg-cover bg-[url(https://res.cloudinary.com/dk0cl9vtx/image/upload/v1676526221/Products/ihkeznmllmlvb3wughma.png)] bg-center h-72">
      <div className="  ml-2 opacity-50 ">

        <button 
         
        onClick={
        showFilter
        } className=' bg-white mt-2 p-2 rounded-md  font-bold'> Filter</button> 
      </div>
       
      <div className="relative container mx-auto flex items-center justify-center h-full">
        <form className="w-full max-w-md">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
             onChange={(e) => {
                        let searchValue = e.target.value.toLocaleLowerCase();
                        setSearch(searchValue);
                      }} type="text" placeholder="Search..." aria-label="Search" />
            <button
            onClick={
                showFilter
                }
             className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
      }

      {change == false && 
     

       <div className='relative py-6 px-20  bg-cover bg-[url(https://res.cloudinary.com/dk0cl9vtx/image/upload/v1676526221/Products/ihkeznmllmlvb3wughma.png)] bg-center   bg-gray-100'>
         <div className="absolute top-2 right-2 ">
         <button onClick={showSearch } className=' bg-white opacity-50 p-2 rounded-md  font-bold'> Search</button>
      </div>
       <h1 className='font-sans text-white font-medium text-2xl'>CHOOSE YOUR WORK HERE</h1>

       <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <button onClick={()=>filterByCategory("construction")}>

                <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-gray-300 rounded-lg p-5 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-lg  h-20 w-20" src={construction} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-lg text-gray-700 font-bold mb-2">CONSTRUCTION</p>
                        
                    </div>
                </div>
        </button>

        <button onClick={()=> filterByCategory("welding")}>

            <div class="w-40 h-40 mt-7 hover:bg-cyan-100 hover:translate-y-4 bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-20 w-20" src={welding} alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-lg text-gray-700 font-bold mb-2">WELDING</p>
                    
                </div>
            </div>
        </button>
        <button onClick={()=> filterByCategory("engineer")}>

            <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-20 w-20" src={engineer} alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-lg text-gray-700 font-bold mb-2">ENGINEER</p>
                    
                </div>
            </div>
        </button>
        <button onClick={()=> filterByCategory("worker")}>

            <div class="w-40 h-40 mt-7  hover:bg-cyan-100 hover:translate-y-4 bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-20 w-20" src={worker} alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-lg text-gray-700 font-bold mb-2">WORKER</p>
                    
                </div>
            </div>
        </button>

        <button onClick={()=> filterByCategory("diy")}>

            <div class="w-40 h-40 mt-7 hover:bg-cyan-100 hover:translate-y-4 bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-20 w-24" src={diy} alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-lg text-gray-700 font-bold mb-2">DIY</p>
                    
                </div>
            </div>
        </button>

        <button onClick={()=> filterByCategory("general")}>

            <div class="w-40 h-40 mt-7  hover:bg-teal-100 hover:translate-y-4 bg-gray-200  rounded-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-20 w-20" src={general} alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-lg text-gray-700 font-bold mb-2">GENERAL</p>
                    
                </div>
            </div>
        </button>

       
       
   </div>

   </div>
     
      }


  {/* <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        All Items
      </h2>

     
    </header>

    <ul class="grid gap-4 mt-8 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-6">

        {product.map((product, index)=>(

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src={product.imageUrl}
            alt=""
            class="h-[350px] w-full object-cover  transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              {product.productName}
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> {product.rentPrice}/DAY </span>
            </p>
          </div>
        </a>
      </li>
        ))}



      
    </ul>
  </div> */}

  <div className='grid grid-cols-12'>
    
  
  {tempProduct.filter(searchData).map((product, index)=>(

<div className="flex flex-col col-span-6  items-center justify-between p-4 border rounded-lg shadow-md md:flex-row">
   <img src={product.imageUrl} alt={product.name} className="w-60 max-w-md mb-4 md:mb-0 md:mr-4" />
   <div className="flex flex-col flex-1">
     <h2 className="text-lg font-medium">{product.productName}</h2>
     <p className="text-gray-500">Brand:{product.brandName}</p>
     <h3>{product.category}</h3>
     <div className="flex items-center my-2">
       {/* <StarIcon className="w-5 h-5 text-yellow-500" />
       <StarIcon className="w-5 h-5 text-yellow-500" />
       <StarIcon className="w-5 h-5 text-yellow-500" />
       <StarIcon className="w-5 h-5 text-yellow-500" />
       <StarIcon className="w-5 h-5 text-gray-400" /> */}
       <span className="ml-2 text-gray-600">{product.details}</span>
     </div>
     <p className="text-teal-600 font-medium">Rs.{product.rentPrice}/DAY</p>
     <Link to={'/Booking'} state={product._id}>

     <button className="mt-4 py-2 px-4 bg-teal-300 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
       Book for Your day
     </button>
     </Link>
   </div>
 </div>
  ))}
  </div>

</section>

    </div>
  )
}

export default Items