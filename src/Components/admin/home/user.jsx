import React from 'react'

function user() {
  return (
    <div>
       
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat"/>
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cat News</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Cats are people's best friends</a>
                    <p class="mt-2 text-gray-500">According to a study, it has been proven that there is a tight bond between cats and humans.</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default user