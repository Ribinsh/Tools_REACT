import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import "../../../pagination.css"

function ProdutTable(props) {

    
    const [product, setProduct] = useState([])
    const [tempProduct, setTempProduct] = useState([])
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const dataToRender = tempProduct.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

    const searchData = (product) => {
        return search === ""
          ? product
          : product.productName.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.brandName.toLowerCase().includes(search) 
            
      }

    
    let category = props.category
  
    const filterData =(data)=>{
        if(data === "all"){
            setTempProduct(product)

          }else if(data === "Renting"){
            let products = product.filter((product) => product.rentingStatus === "Renting" )
            setTempProduct(products)
          }
          else{

              let  filtered = product.filter((product) => product.listingStatus === data  )
              
              setTempProduct(filtered)
           }
          }



    const getAllProduct = () =>{
        axios
        .get("http://localhost:3000/admin/getAllproducts")
        .then((response) => {
          const data = response.data.product
          setProduct(data) 
         category ? setTempProduct(data.filter((product)=>product.category == category)): setTempProduct(data);
          
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
       getAllProduct()
    },[])


  return (
    <div>
        <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">All Products</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                         onChange={(e) =>{
                            setItemsPerPage(e.target.value)
                          }}
                            class="appearance-none h-full rounded-l border block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                         onChange={(e) =>{
                            let targetValue = e.target.value
                               filterData(targetValue)
                          }}
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option value="all">All</option>
                            <option value= "List">Listed</option>
                            <option value="Unlist" >Unlisted</option>
                            <option value="Renting"> Renting</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input 
                     onChange={(e) => {
                        let searchValue = e.target.value.toLocaleLowerCase();
                        setSearch(searchValue);
                      }} 
                      placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Product
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Category
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Rent Price
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total Rentings
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Listing
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           {dataToRender.filter(searchData).map((data ,index) =>(

                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src={data.imageUrl}
                                                alt="" />
                                        </div>
                                       
                                        <Link to="/admin/adminSingleProduct" state={data._id} class="ml-3">
                                        <span
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0  bg-orange-200  opacity-50 rounded-md"></span>
                                        <span class="relative">{data.productName}</span>
                                    </span>
                                           
                                        </Link>
                                        
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{data.category}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                   
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {data.rentPrice}/DAY
                                    </p>
                                   
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <p class="text-green-600 font-bold">
                                        {data.totalRentings}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {data.rentingStatus == "Store" && 
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">In store</span>
                                    </span>
                                    }

                                    {data.rentingStatus == "Renting" && 
                                     <span
                                     class="relative   inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                     <span aria-hidden
                                         class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                     <span class="relative">Renting</span>
                                 </span>
                                     }
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {data.listingStatus == "List" && 
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Listed</span>
                                    </span>
                                    }

                                    {data.listingStatus == "Unlist" && 
                                     <span
                                     class="relative   inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                     <span aria-hidden
                                         class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                     <span class="relative">Not listed</span>
                                 </span>
                                     }
                                </td>
                            </tr>
                           ))}

                         
                            
                        </tbody>
                    </table>
                    <ReactPaginate
                         pageCount={Math.ceil(tempProduct.length / itemsPerPage)}
                            marginPagesDisplayed={2}
                             pageRangeDisplayed={5}
                             onPageChange={handlePageChange}
                           containerClassName="pagination"
                             activeClassName="active"
                             previousLabel="Previous"
                              nextLabel="Next"
                              pageLinkClassName="page-link"
                              previousLinkClassName="page-link"
                              nextLinkClassName="page-link"
                              disabledClassName="disabled"
                        />
                </div>
            </div>
        </div>
    </div>
</body>

    </div>
  )
}

export default ProdutTable