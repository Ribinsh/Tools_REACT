import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddCategory(props) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/getCategories")
      .then((response) => {
        const categories = response.data.catogories;
        
        setCategory(categories);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  }, []);
  
  const navigate = useNavigate();
  return (
    <div>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 class="text-2xl font-extrabold text-gray-900">CATEGORIES</h2>
          <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {category.map((data) => (
             
             <Link to={"/adminProducts" } state={data.categoryName}>
              <article
                class={`relative w-full h-64 bg-cover bg-center  group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out`}
                 style= {{backgroundImage: `url(${data.imageUrl})`}}
              >
                <div class="absolute bottom-0 right-0 inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"> <button className="bg-white font-semibold text-gray-600 rounded-md ml-2 mt-2 p-2 ">{data.products}</button></div>
                <div class="relative  w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 class="text-center">
                    <a
                      class="text-white text-2xl font-bold text-center"
                     
                    >
                      <span class=" text-white text-2xl font-bold text-center absolute inset-0"></span>
                      {data.categoryName}
                    </a>
                  </h3>
                 
                </div>
                
              </article>
             </Link>
            ))
            }

            <button
              onClick={() => {
                navigate("/newCategory");
              }}
            >
                {props.from === "admin" && 
              <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div class="absolute inset-0 bg-black group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 class="text-center">
                    <a
                      class="text-white text-2xl font-bold text-center"
                      href="#"
                    >
                      <span class="absolute inset-0"></span>
                      ADD NEW CATEGORY
                    </a>
                  </h3>
                </div>
              </article>
                }
            </button>
          </section>
        </article>
      </section>
    </div>
  );
}

export default AddCategory;
