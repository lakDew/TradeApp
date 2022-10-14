import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
 
  plugins: {
    legend: {
      position: 'top',
      labels:{
        color:"white",
        font:{
            size:14,
            weight:500,
        },
      },
    },
   
   
    
  },

  scales:{
    y:{
        ticks:{
            color:"white",
            font:{
                size:13,
                weight:500,
            },
        },
    },
    x:{
        ticks:{
            color:"white",
            font:{
                size:12,
                weight:500,
            },
        },
    }
  }
  
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Latest Hits',
      data: [88, 70, 79, 56, 50, 55, 72],
      borderColor: 'rgb(113, 243, 113)',
      backgroundColor: 'rgb(113, 243, 113)',
      lineTension: 0.2, 
      
    },
    {
      label: 'Popular Hits',
      data:[32, 47, 38, 21, 55, 75, 70],
      borderColor:  'rgb(235, 95, 80)',
      backgroundColor: 'rgb(235, 95, 80)',
      lineTension: 0.2,
    },
    {
        label: 'Featured',
        data:[43, 20, 39, 46, 86, 66, 80],
        borderColor: 'rgb(180, 29, 180)',
        backgroundColor: 'rgb(180, 29, 180)',
        lineTension: 0.2,
      },
  ],
};

const LineChart=()=> {
  return (
    <div className='line-chart' >
        <p>Latest Hits</p>
        <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;