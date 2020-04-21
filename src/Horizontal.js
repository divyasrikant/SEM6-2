import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

function Horizontal() {
    

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      backgroundColor: 'rgb(88, 175, 197)',
      borderColor: 'rgb(88, 175, 197)',
      borderWidth: 0.5,
      data: [65, 59, 80, 85, 56, 55, 40,0]
    }
  ]
}
    return (
      <div>
        <HorizontalBar data={data} />
      </div>
    );
    }
export default Horizontal