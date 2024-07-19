import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './chart.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  return (
    <div className="donghnut">
      <Doughnut
        data={{
          labels: ['Acquisition', 'Purchase', 'Retention'],
          datasets: [{
            label: 'Apica',
            data: [290, 120, 90],
            backgroundColor: ['#5570F1' ,'#FFCC91' ,'#97A5EB'],
            hoverOffset: 4,
          }],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top', // top, left, bottom, right
              align: 'center', // start, center, end
              labels: {
                boxWidth: 20,
                boxHeight: 20,
                padding: 20, // Adjust padding to move labels closer or farther from the chart
                font: {
                  size: 11,
                  color: '#A6A8B1'
                },
                color: '#A6A8B1', // Color of the legend labels
                usePointStyle: true, // Use point style instead of box
                pointStyle: 'circle', // circle, rect, rectRounded, rectRot, cross, crossRot, star, line, dash
              },
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleFont: {
                size: 16,
                weight: 'bold',
              },
              titleColor: '#fff',
              bodyFont: {
                size: 14,
                family: 'Arial',
              },
              bodyColor: '#fff',
              footerFont: {
                size: 12,
              },
              footerColor: '#fff',
              borderColor: 'rgba(0,0,0,0.1)',
              xPadding: 10,
              yPadding: 10,
              displayColors: false, // Hide the color box next to the tooltip text
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          cutout: '70%',
          aspectRatio: 1.2 , 
        }}
      />
    </div>
  );
};

export default Chart;
