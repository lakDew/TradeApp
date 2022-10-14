
  
 

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  indexAxis:"y",
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

const labels = ["Red","Aqua","Green","Yellow","Purple","Orange","Blue"];


export const data = {
  labels,
  datasets: [
    {
        label: '# of Hits',
        data:[40,44,28,38,58,34,48],
       
        barThickness: 3,
       
        backgroundColor: ["Red","Aqua","Green","Yellow","Purple","Orange","Blue"],
      }
   
  ],
};

export function HorizontalChart() {
    return (
      <div className='hori-chart'>
         <p>Performance</p>
          <Bar options={options} data={data} />
      </div>
    );
  }