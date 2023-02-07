import React from 'react'

function Graph() {
  return (
    <div>
   
<script src="https://unpkg.com/tailwindcss-jit-cdn"></script>

<section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen">
    <div class="max-w-3xl mx-auto p-4 sm:px-6 h-full">
      
        <div class="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex items-center">
                <h2 class="font-semibold text-gray-800">Analytics</h2>
            </header>
            <div class="px-5 py-1">
                <div class="flex flex-wrap">
                   
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">24.7K</div>
                                <div class="text-sm font-medium text-green-500">+49%</div>
                            </div>
                            <div class="text-sm text-gray-500">Unique Visitors</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">56.9K</div>
                                <div class="text-sm font-medium text-green-500">+7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Total Pageviews</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">54%</div>
                                <div class="text-sm font-medium text-yellow-500">-7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Bounce Rate</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    
                    <div class="flex items-center">
                        <div>
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">2m 56s</div>
                                <div class="text-sm font-medium text-yellow-500">+7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Visit Duration</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex-grow">
                <canvas id="analytics-card-01" width="800" height="300"></canvas>
            </div>
        </div>
    </div>
</section>


<div x-show="open" class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    <div class="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        <div>👉 <a class="hover:underline ml-1" href="https://cruip.com/mosaic/?ref=codepen-cruip-analytics" target="_blank">More components on Cruip.com</a></div>
        <button class="text-gray-500 hover:text-gray-400 ml-5">
            <span class="sr-only">Close</span>
            <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
        </button>
    </div>
</div>
    </div>
  )
}

export default Graph