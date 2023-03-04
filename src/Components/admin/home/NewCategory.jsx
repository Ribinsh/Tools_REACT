import axios from '../../../axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
// import { FileExtension } from 'file-type'

function NewCategory() {
    const navigate = useNavigate()
    const cloudAPI ="dk0cl9vtx"

    const location = useLocation()
    const categoryId = location?.state
   
    const [allCategories,setAllCategories] = useState('')
    const [categoryName,setCategoryName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState('')
    const [works, setWorks] = useState([])
    // const [imageUrl,setImageUrl] = useState("")
    
    const   handleCheckboxChange =(e) =>{
       
        const item = e.target.value;
        if (e.target.checked) {
          setWorks([...works, item]);
        } else {
          setWorks(works.filter((i) => i !== item));
        }
        console.log(works);
    }

   const  getCategory = () => {
    axios.get(`/admin/getSingleCategory/${categoryId}`).then((response) => {
      let result = response.data.cat
      setCategoryName(result.categoryName)
      setImage(result.imageUrl)
      setDescription(result.description)
      setWorks(result.work)
    }) .catch((error) => {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.message);
      }
    })
   }
  

    useEffect(() => {

      if(location?.state){

        getCategory()
      }
      axios
        .get("/admin/getCategoryNames")
        .then((response) => {
          console.log(response);
          const categories = response.data.categoryNames;
          console.log(categories);
       
          setAllCategories(categories);
          
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

    // function handleImageChange(event) {
    //   const file = event.target.files[0];
    //   const reader = new FileReader();
    //   reader.onloadend = function () {
    //     const buffer = Buffer.from(reader.result);
    //     const fileInfo = fileType(buffer);
    //     if (!fileInfo || !/^image\/(jpe?g|png)$/i.test(fileInfo.mime)) {
    //        toast.error("invalid Image type")
    //     }
    //   };
    //   reader.readAsArrayBuffer(file);
    // }

    const handleUpload = async (e) =>{
        e.preventDefault();
        console.log(allCategories);
        toast.loading("category Adding")
        let isSame = allCategories.includes(categoryName)
          console.log(isSame);
        if(isSame ){
          toast.error("Category already exist")
          return
        }

       
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'Tooolshope');
    await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, formData)
    .then(async(res) => {
       const imageUrl = res.data.secure_url
       toast.dismiss()
      console.log(res.data.secure_url);
      await axios.post("/admin/addCategory",{
        categoryName,
        description,
        works,
        imageUrl,
      })
      .then((response)=>{ 
          console.log("image added");
          console.log(response);
          if(response){
              toast.success("Category Added Successfully")
              navigate("/admin/addCategory")
  
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

    const handleUpdation = async (e) =>{
      e.preventDefault();

      toast.loading("category Updating")
      
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'Tooolshope');
  await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, formData)
  .then(async(res) => {
     const imageUrl = res.data.secure_url
     toast.dismiss()
    console.log(res.data.secure_url);
    await axios.post(`/admin/updateCategory/${categoryId}`,{
      categoryName,
      description,
      works,
      imageUrl,
    })
    .then((response)=>{ 
        console.log("image added");
        console.log(response);
        if(response){
            toast.success("Category updated Successfully")
            navigate("/admin/addCategory")

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
      {categoryId ? 
      <h1 className="flex` text-center md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
           Edit Category !
        </h1>
       :
      <h1 className="flex` text-center md:px-10 px-5 md:mx-20 mx-5 font-bold text-2xl text-gray-800">
          Add new  Category !
        </h1>
      }

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
               
        
                setCategoryName(e.target.value)
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

         
          <div>

            <label class="mt-4" for="name">Choose Work</label>
          </div>
          <div className='flex ' >
            <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" id="construction" name="Construction" value="construction" onChange={handleCheckboxChange} />
            <label htmlFor="construction" className="ml-1">Construction</label>
            </div>
            <div className="flex items-center mr-4  mb-4">
            <input type="checkbox" id="engineer" name="Engineer" value="engineer" onChange={handleCheckboxChange} />
            <label htmlFor="engineer" className="ml-1">Engineer</label>
            </div>
            <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" id="welding" name="Welding" value="welding" onChange={handleCheckboxChange} />
            <label htmlFor="welding" className="ml-2">Welding</label>
            </div>
            <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" id="general" name="General" value="general" onChange={handleCheckboxChange} />
            <label htmlFor="general" className="ml-1">General</label>
            </div>
            <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" id="diy" name="DIY" value="diy" onChange={handleCheckboxChange} />
            <label htmlFor="diy" className="ml-1">DIY</label>
            </div>
            <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" id="worker" name="Worker" value="worker" onChange={handleCheckboxChange} />
            <label htmlFor="worker" className="ml-1">Worker</label>
            </div>
          </div>
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

            {categoryId ?
            
            <button
              type="submit"
              onClick={handleUpdation}
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Update Category </span>

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
            :
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
          }
          </div>
        </form>
      </div>
   

    </div>
  )
}

export default NewCategory