import React from 'react'
import SalesReport from './SalesReport'
// import { PDFDownloadLink } from "react-html2pdf";
import { PDFDownloadLink } from '@react-pdf/renderer'


function DownloadButton() {
  return (
    <div className='flex justify-center mb-20 cursor-pointer'>
   
   <PDFDownloadLink document={<SalesReport />} fileName="report.pdf">
  {({ blob, url, loading, error }) =>
    loading ? "Loading document..." : "Download PDF"
  }
<a
  class="group relative inline-block focus:outline-none focus:ring"
  
>
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Download
  </span>
</a>
</PDFDownloadLink>






    </div>
  )
}

export default DownloadButton