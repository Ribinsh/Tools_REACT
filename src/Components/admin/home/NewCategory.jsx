import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function NewCategory() {
    const navigate = useNavigate()
    const cloudAPI ="dk0cl9vtx"

    
    const [categoryName,setCategiryName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState('')
    const [imageUrl,setImageUrl] = useState("")

    const handleUpload = async (e) =>{
        e.preventDefault();

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'Tooolshope');
    await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, formData)
    .then(async(res) => {
       setImageUrl(res.data.secure_url);
      console.log(res.data.secure_url);
      await axios.post("http://localhost:3000/admin/addCategory",{
        categoryName,
        description,
        imageUrl,
      })
      .then((response)=>{ 
          console.log("image added");
          console.log(response);
          if(response){
              toast.success("Category Added Successfully")
              navigate("/addCategory")
  
          }
      })
      .catch(error=>{
          console.log(error);
          if(error.response){
  
            toast.error(error.response.data.error)
          }else{
           toast.error(error.message)
          }
          
        })
    })
      
   
    }


  return (
    <div className=' bg-gray-100 py-10 px-44'>
      

      <div class="rounded-lg bg-green-100 py-3 px-8 shadow-lg lg:col-span-3 lg:p-12">
      
      <h1 className="flex` md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Add new  Category !
        </h1>

        <form action={handleUpload} class="space-y-4">
          <div>
            <label class=""  for="name">Category Name</label>
            <input
            required
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              value={categoryName}
              onChange={(e)=>{
                setCategiryName(e.target.value)
              }}
          
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="" for="email">Description</label>
              <input
               required
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Describe"
                type="text"
                value={description}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                
                id="description"
              />
            </div>

            {/* <div>
              <label class="" for="phone">Details</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Add details"
                type="text"
                id="phone"
              />
            </div> */}
          </div>

         
          
          {/* <div>
            <label class="" for="name">Work</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Works"
              type="text"
              id="name"
            />
          </div> */}
          <div>
            <label class="" for="name">Image</label>
            <input
            required
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder=""
              type="file"
              
              onChange={(e)=>{
               setImage(e.target.files[0]) 
              }}
              id="name"
            />
          </div>

          {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input class="sr-only" id="option1" type="radio" tabindex="-1" />
              <label
                for="option1"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 1 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option2" type="radio" tabindex="-1" />
              <label
                for="option2"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 2 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option3" type="radio" tabindex="-1" />
              <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 3 </span>
              </label>
            </div>
          </div> */}

          
          <div class="mt-4">
            <button
              type="submit"
              onClick={handleUpload}
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Add Category </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
   

    </div>
  )
}

export default NewCategory