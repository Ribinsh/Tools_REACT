import React from 'react'

function AddProduct() {
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
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-green-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="" for="name">Product Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="" for="email">Brand </label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Brand Name"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="" for="phone">Category</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Category"
                type="text"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="" for="email">Price </label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Product Price"
                type="number"
                id="email"
              />
            </div>

            <div>
              <label class="" for="phone">Rent Price</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Rent per day"
                type="number"
                id="phone"
              />
            </div>
            
          </div>
          <div>
            <label class="" for="name">Product Details</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Add details"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label class="" for="name">Work</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Works"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label class="" for="name">Image</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Works"
              type="file"
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

          <div>
            <label class="" for="message">Description</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Description"
              rows="4"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
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
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AddProduct