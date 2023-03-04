import React from 'react'
import axios from '../../../axios';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as chartjs} from "chart.js/auto"
import { useEffect } from 'react';

function Graph() {
  const [bookingData, setBookingData] = useState([]);
  const [data,setData] = useState({
        
    labels: bookingData?.map((data) => data._id) , 
    datasets: [{
        label:"Last 10 day Orders",
        data: bookingData?.map((data) => data.count)

    }]
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSales = async () => {
      try {
        const response = await axios.get("/admin/lastBookings");
        setBookingData(response.data.lastBookings);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getSales();
  }, []);
  useEffect(() => {
    setData({
        labels: bookingData?.map((data) => data._id) , 
        datasets: [{
            label:"Last 10 day Orders",
            data: bookingData?.map((data) => data.count),
            backgroundColor:['teal'],  
            color:['white'],
            borderColor:'teal',
            borderWidth:1,
            width:7
    
        }]
    })
  },[bookingData.length])

//   const data = {
//     x: bookingData?.map((data) => data._id),
//     y: bookingData?.map((data) => data.count),
//   };

  return (
    <div className='w-full'>  
         <Line data={data} />
    </div>
  );
}

export default Graph;
