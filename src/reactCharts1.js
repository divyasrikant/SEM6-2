import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
    const data = React.useMemo(
        () => [
          [[1, 10], [2, 1], [3, 9]],
          
        ],
        []
      )
      const series = React.useMemo(
        () => ({
          showPoints: true
        }),
        []
      )
    const axes = React.useMemo(
      () => [
        { primary:true, type: 'linear', position: 'bottom',display:false },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          height: '300px',
          margin:'20px'
        }}
      >
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    )
  }
export default MyChart;