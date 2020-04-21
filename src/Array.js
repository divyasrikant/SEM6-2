import React from 'react';
import App1 from './App1';

class Array extends React.Component {
    
    render() {
        const data =[
            {
                label: 'N',
                data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20]]
            },
            {
                label: 'N-1',
                data: [['',0],['Mon', 50], ['Tue',20], ['Wed', 40], ['Thu', 20], ['Fri', 80],['Sat',60],['Sun',30]]
            },
            {
                label: 'N-2',
                data: [['',0],['Mon', 20], ['Tue',30], ['Wed', 25], ['Thu', 30], ['Fri', 80],['Sat',50],['Sun',50]]
            },  
        ];
    return (
        data.map(item => {
            return (<App1 data = {item}/>);
        })
        // <App1 data = {data}/>
    )
    //   return (
    //     <ul>
    //       {data.map(item => {
    //         return <li>{item[0]}</li>;
    //       })}
    //     </ul>
    //   );
    }
  }

  export default Array;