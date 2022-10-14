import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
    radius:120,
}

export const data = {
  labels: ["Used Storage(18.24GB)", "System Storage(6.5GB)", "Avilable Storage(9.15GB)"],
  datasets: [
    {
      
      data: [18.24, 6.5,9.15],
      backgroundColor: [
        "rgb(241, 104, 89)",
        "rgb(99, 196, 196)",
        "rgb(137, 241, 137)",
       
      ],
      borderColor:"white",
      borderWidth: 2,
    },
  ],
};

const PiChart = () => {
  return (
    <div className="pi-chart">
        <p>Storage Information</p>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PiChart;
