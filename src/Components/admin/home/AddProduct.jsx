import axios from "../../../axios";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function AddProduct() {
  const location = useLocation();
  const productId = location?.state;

  const cloudAPI = "dk0cl9vtx";
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [details, setDetails] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [image, setImage] = useState("");
  const [add, setAdd] = useState(false);
  const [description, setDescription] = useState("");

  const getProduct = () => {
    axios
      .get(`/singleView/${productId}`)
      .then((response) => {
        let products = response.data.product;
        setName(products.productName);
        setBrand(products.brandName);
        setCategory(products.category);
        setPrice(products.price);
        setRentPrice(products.rentPrice);
        setDetails(products.details);
        setDescription(products.description);
        setProductStatus(products.productStatus);
        setImage(products.imageUrl);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  };

  useEffect(() => {
    if (location?.state) {
      getProduct();
    }

    axios
      .get("/admin/getCategories")
      .then((response) => {
        const categories = response.data.categories;

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
  }, [add]);

  const handleUpload = async (e) => {
    e.preventDefault();
    toast.loading("Adding new product");
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "product Image");
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      )
      .then(async (res) => {
        const imageUrl = res.data.secure_url;
        toast.dismiss();
        console.log(res.data.secure_url);
        await axios
          .post("/admin/addProduct", {
            name,
            brand,
            category,
            price,
            rentPrice,
            details,
            productStatus,
            imageUrl,
            description,
          })
          .then((response) => {
            console.log("image added");
            console.log(response);
            if (response) {
              toast.success("Product Added Successfully");
              setAdd(true);
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              toast.error(error.response.data.error);
            } else {
              toast.error(error.message);
            }
          });
      });
  };

  const handleUpdation = async (e) => {
    e.preventDefault();
    toast.loading("product Updating");
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "product Image");
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      )
      .then(async (res) => {
        const imageUrl = res.data.secure_url;
        toast.dismiss();
        console.log(res.data.secure_url);
        await axios
          .post(`/admin/updateProduct/${productId}`, {
            name,
            brand,
            category,
            price,
            rentPrice,
            details,
            productStatus,
            imageUrl,
            description,
          })
          .then((response) => {
          
            if (response) {
              toast.success("Product Updated  Successfully");
              history.back();
            }
          })
          .catch((error) => {

            if (error.response) {
              toast.error(error.response.data.error);
            } else {
              toast.error(error.message);
            }
          });
      });
  };

  return (
    <div>
      <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-pink-600">
                  Add New Tool
                </a>

                <address class="mt-2 not-italic">
                 Toool Calicut store , kerala
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-teal-300 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action={handleUpload} class="space-y-4">
                <div>
                  <label class="" for="name">
                    Product Name
                  </label>
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="" for="email">
                      Brand{" "}
                    </label>
                    <input
                      required
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Brand Name"
                      type="text"
                      value={brand}
                      onChange={(e) => {
                        setBrand(e.target.value);
                      }}
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="" for="phone">
                      Category
                    </label>

                    <select
                      required
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      name=""
                      id=""
                    >
                      <option value="General">Choose category</option>
                      {categories.map((data, index) => (
                        <option value={data.categoryName}>
                          {data.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="" for="email">
                      Price{" "}
                    </label>
                    <input
                      required
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Product Price"
                      type="number"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label class="" for="phone">
                      Rent Price
                    </label>
                    <input
                      required
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Rent per day"
                      type="number"
                      value={rentPrice}
                      onChange={(e) => {
                        setRentPrice(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label class="" for="name">
                    Product Details
                  </label>
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Add details"
                    type="text"
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Product status</label>
                  <select
                    required
                    onChange={(e) => {
                      setProductStatus(e.target.value);
                    }}
                    class="w-full  rounded-lg border-gray-200 p-3 text-sm"
                    name="productStatus"
                    id=""
                  >
                    <option value="none">None</option>
                    <option value="premium">Premium</option>
                    <option value="featured">Featured</option>
                  </select>

                  <div>
                    <label class="" for="name">
                      Image
                    </label>
                  </div>
                  {image && (
                    <div className="w-20 h-20 bg-gray-200 rounded-md">
                      <img src={image} alt="" />
                    </div>
                  )}
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Works"
                    type="file"
                    id="name"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </div>

                <div>
                  <label class="" for="message">
                    Description
                  </label>
                  <textarea
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows="4"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div class="mt-4">
                  {productId ? (
                    <button
                      type="submit"
                      onClick={handleUpdation}
                      class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                      <span class="font-medium"> Update product </span>

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
                  ) : (
                    <button
                      type="submit"
                      onClick={handleUpload}
                      class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                      <span class="font-medium"> Add product </span>

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
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
