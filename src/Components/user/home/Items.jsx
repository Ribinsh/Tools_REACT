import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

function Items() {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        
        axios
        .get("http://localhost:3000/getAllProduct")
        .then((response) => {
          const data = response.data.product
          
          setProduct(data);
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
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        All Items
      </h2>

      <p class="max-w-md mt-4 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
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
  </div>
</section>

    </div>
  )
}

export default Items