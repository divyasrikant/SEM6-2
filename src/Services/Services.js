import React, { Component } from 'react'
import Circle from '../Circle'
import Areachart from '../reactChart2'
import Table from 'react-bootstrap/Table';
// import MyChart from '../reactCharts1'
// import Lines from '../Lines'
// import BarChart from '../BarChart'
// import { map } from 'd3'

class Services extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
    console.log('Props',this.props);
    console.log('Location',this.props.location);
    
    let title=this.props.title;
    let {circledata,chartdata,tableval}=this.props.location.state.services

    //let {tableval} = this.props.location.state.services;

    console.log(tableval);

    let newArray = tableval.map((d) => 
            {
                return `${d.id}${d.floor}${d.service}${d.paid}`;
            }
            
            )
            console.log(newArray);
            
    return(
        <div style={{margin:'20px',marginLeft:'275px',paddingTop:'10px'}}>
            <div>
                    <Areachart subdata={chartdata}/>
            </div>
            <div style={{padding:'25px',margin:'10px',color:'#7E7E7E',fontSize:'20px',fontWeight:'lighter'}}> 
                        {title}
            </div>
            <div style={{boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',padding:'10px'}}>
                    
                    <div style={{display:'flex',flexDirection:'row',paddingRight:'20px',justifyContent:'center'}}>
                        {circledata.map((value)=>{
                           return(<Circle {...value}/>);
                        })}
                    </div>
            </div>

            <div style={{padding:'25px',margin:'10px',color:'#7E7E7E',fontSize:'20px',fontWeight:'lighter'}}> 
                    <p>Facility Usage</p>
            </div>

            <Table responsive>
            <thead>
                <tr>
                {/* <th>#</th> */}
                <th>ID</th>
                <th>Floor</th>
                <th>Service</th>
                <th>Paid</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>1</td> */}
                    <td>{newArray[0][0]}</td>
                    <td>{newArray[0][1]+newArray[0][2]}</td>
                    <td>{newArray[0][3]+newArray[0][4]+newArray[0][5]+newArray[0][6]+newArray[0][7]+newArray[0][8]+newArray[0][9]}</td>
                    <td>{newArray[0][10]+newArray[0][11]+newArray[0][12]}</td>
                </tr> 
                <tr>
                     {/* <td>2</td> */}
                     <td>{newArray[1][0]}</td> 
                    <td>{newArray[1][1]+newArray[1][2]}</td>
                    <td>{newArray[1][3]+newArray[1][4]+newArray[1][5]+newArray[1][6]+newArray[1][7]+newArray[1][8]+newArray[1][9]+newArray[1][10]+newArray[1][11]+newArray[1][12]+newArray[1][13]+newArray[1][14]+newArray[1][15]+newArray[1][16]+newArray[1][17]}</td>
                    <td>{newArray[1][18]+newArray[1][19]+newArray[1][20]}</td>
                </tr>
                <tr>
                    {/* <td>3</td> */}
                    <td>{newArray[2][0]}</td>
                    <td>{newArray[2][1]+newArray[2][2]}</td>
                    <td>{newArray[2][3]+newArray[2][4]+newArray[2][5]+newArray[2][6]+newArray[2][7]+newArray[2][8]+newArray[2][9]}</td>
                    <td>{newArray[2][10]+newArray[2][11]}</td>
                </tr>
                <tr>
                    {/* <td>4</td> */}
                    <td>{newArray[3][0]}</td> 
                    <td>{newArray[3][1]+newArray[3][2]}</td>
                    <td>{newArray[3][3]+newArray[3][4]+newArray[3][5]+newArray[3][6]+newArray[3][7]+newArray[3][8]+newArray[3][9]+newArray[3][10]+newArray[3][11]+newArray[3][12]+newArray[3][13]+newArray[3][14]+newArray[3][15]+newArray[3][16]+newArray[3][17]}</td>
                    <td>{newArray[3][18]+newArray[3][19]}</td>
                </tr>  
                <tr>
                    {/* <td>5</td> */}
                    <td>{newArray[4][0]}</td>
                    <td>{newArray[4][1]+newArray[4][2]}</td>
                    <td>{newArray[4][3]+newArray[4][4]+newArray[4][5]+newArray[4][6]+newArray[4][7]+newArray[4][8]+newArray[4][9]+newArray[4][10]+newArray[4][11]}</td>
                    <td>{newArray[4][12]+newArray[4][13]}</td>
                </tr> 

            </tbody>
            </Table>

            
        </div>
    )
                    }
}
export default Services