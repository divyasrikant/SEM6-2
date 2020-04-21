import React from 'react'
//
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'

function Areachart(props) {
let {subdata}=props
const data = React.useMemo(
  ()=>subdata,
    // () => [
    //   {
    //     label: 'N',
    //     data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20]]
    //       },
    //   {
    //     label: 'N-1',
    //     data: [['',0],['Mon', 50], ['Tue',20], ['Wed', 40], ['Thu', 20], ['Fri', 80],['Sat',60],['Sun',30]]
    //       },
    //   {
    //     label: 'N-2',
    //     data: [['',0],['Mon', 20], ['Tue',30], ['Wed', 25], ['Thu', 30], ['Fri', 80],['Sat',50],['Sun',50]]
    //       },  
    // ],
    []
  )
  const series = React.useMemo(
    () => ({
      type: 'line'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom',type:'ordinal' },
      { position: 'left', type: 'linear' }
    ],
    []
  )
  return (
    <div style={{
        height: '250px',
        margin:'20px',
         marginTop:'20px',
         marginRight:'10px'     
    }}>
        <Chart data={data} series={series} axes={axes} tooltip />
        <p style={{textAlign:'center',fontWeight:'lighter'}}>Trend Chart</p>


    </div>
  )
}
export default Areachart