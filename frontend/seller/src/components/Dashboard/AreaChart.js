import React from 'react';

import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
  datasets: [
    {
      label: 'Sessions',
      lineTension: 0.3,
      backgroundColor: 'rgba(2,117,216,0.2)',
      borderColor: 'rgba(2,117,216,1)',
      pointRadius: 5,
      pointBackgroundColor: 'rgba(2,117,216,1)',
      pointBorderColor: 'rgba(255,255,255,0.8)',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(2,117,216,1)',
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [15, 4, 5, 12, 27, 1, 16, 12, 24, 30, 32, 30, 33]
    }
  ]
};
const options = {
  scales: {
    xAxes: [
      {
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: 'rgba(0, 0, 0, .125)'
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

const AreaChart = () => {
  return (
    <Line
      data={data}
      options={options}
      id="myAreaChart"
      width={100}
      height={20}
    />
  );
};

export default AreaChart;
