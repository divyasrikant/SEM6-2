import React from 'react';
import {Line} from 'react-chartjs-2';
function AreaTest(){
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
    //   lineTension: 0.1,
      backgroundColor: 'rgb(75,192,192)',
      borderColor: 'rgb(75,192,192)',
    //   borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(75,192,192)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(75,192,192)',
      pointHoverBorderColor: 'rgb(220,220,220)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40,43,46,24,68,23]

    },
    {
        label: 'My First dataset',
        fill: true,
        // lineTension: 0.1,
        backgroundColor: '#FF6384',
        // borderColor: '#FF6384',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(75,192,192)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(75,192,192)',
        pointHoverBorderColor: 'rgb(220,220,220)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40,23,68,56,78,98]

      }
  ]
};


    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  
};
export default AreaTest