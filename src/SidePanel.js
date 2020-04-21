import React from 'react'
import './SidePanel.css'

function SidePanel(){
    return(
        <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
            <div style={{height:'190px',width:'190px',backgroundColor:'#FC6868',color:'white'}}>
                <p style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'140px'}}>Mumbai  </p>
            </div>
            <div>
                <p>About</p>
            </div>
        </div>
    )
}
export default SidePanel