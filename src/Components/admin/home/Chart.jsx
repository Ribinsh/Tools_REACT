import React from 'react'
import axios from '../../../axios';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as chartjs} from "chart.js/auto"
import { useEffect } from 'react';
 

function Chart() {
     const [saleData, setSaleData] = useState([])
    const [sales, setSales] =useState({
        
          
        labels: saleData?.map((data) => data._id) , 
        datasets: [{
            label:"Last 10 day sales",
            data: saleData?.map((data) => data.earnings),
            backgroundColor:['teal'],  
            color:['white'],
            borderColor:'teal',
            borderWidth:1,
            width:7
    

        }]
    })
    console.log(saleData);

    const getSales = () => {
        axios.get("/admin/lastSales").then((response) => {
            console.log(response);
            setSaleData(response.data.sales)
           
            })
         
    }

    useEffect(() => {
        getSales()

    },[])

    useEffect(() => {
    
        setSales({
                   
          
            labels: saleData?.map((data) => data._id) , 
            datasets: [{
                label:"Last 10 day sales",
                data: saleData?.map((data) => data.earnings)
    
            }]
            })
    } ,[saleData.length])
    

 
  return (
    <div className='w-full'>  
         <Bar data={sales} />
    </div>
 )
}

export default Chart