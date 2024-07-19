import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js'; 

Chart.register(CategoryScale);

const BarChart = () => {
    return (
        <div>
          <Bar 
          data={{
            labels: ["Sept 10", "Sept 11", "Sept 12", "Sept 13", "Sept 14", "Sept 15", "Sept 16"],
            datasets: [
                {
                    label: 'Sale',
                    data: [200, 300, 100, 50, 80, 400, 150],
                    barThickness: 20, // Adjust the thickness here
                    backgroundColor: '#5570F1' // Adjust the color here
                }
            ]
          }}
          options={{
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
          }}
          />
        </div>
    );
}

export default BarChart;
