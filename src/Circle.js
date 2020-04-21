import React from 'react'

import {  buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function Circle(props){
  let {pathcolor,percentage,icon,arrow}=props
  let arrowcolor='#ABD99E'
  if (arrow==="up"){
    arrow='fa fa-arrow-up '    
  }
  else{
    arrow='fa fa-arrow-down'
    arrowcolor='#EC5C5C'
  }
 return(
<div style={{width:'120px',margin:'25px'}}>

  <CircularProgressbarWithChildren value={percentage}
    strokeWidth={2}
    styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '10px',
        pathTransitionDuration: 0.5,
        pathColor: pathcolor,
        textColor: '#34495e',
        trailColor: ' rgb(226, 226, 226)',
        backgroundColor: 'white',
    })}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <i className={icon} style={{color:'#5D5C56'}} aria-hidden="true"></i>
  </CircularProgressbarWithChildren>

  <p style={{textAlign:'center',fontSize:'20px',color:'#757575',fontWeight:'bold',margin:'0'}}>
    <i class={arrow} style={{color:arrowcolor,fontSize:'9px'}} aria-hidden="true"></i>{percentage}%
  </p>
</div>
)
}
export default Circle