import React, { Component } from 'react'
// import './SidePanel.css';
import { NavLink,Link } from 'react-router-dom'; 
// import Landing from '../Landing/Landing';
// import App from '../App'
import data_app1 from './data_app1';

class TestSidePanel extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          parking:'',
          customer:'',
          baggage:''
        };
      }
    
    
      componentWillMount() {
        
        console.log('props',this.props.location)
        switch(this.props.location.state.name)
        {
          case "Mumbai":
            { let parking=data_app1[0].Mumbai.parking
              let customer=data_app1[0].Mumbai.customer
              let baggage=data_app1[0].Mumbai.baggage}
                           
          
            // console.log(parking,customer,baggage)
            case "Delhi":
            { let parking=data_app1[1].Delhi.parking
              let  customer=data_app1[1].Delhi.customer
              let  baggage=data_app1[1].Delhi.baggage}
            
        
            case "Seoul":
            { let parking=data_app1[2].Seoul.parking
              let customer=data_app1[2].Seoul.customer
              let baggage=data_app1[2].Seoul.baggage}

            case "Washington":
              { let parking=data_app1[3].Washington.parking
                let customer=data_app1[3].Washington.customer
                let baggage=data_app1[3].Washington.baggage}

            case "Seattle":
              { let parking=data_app1[4].Seattle.parking
                let customer=data_app1[4].Seattle.customer
                let baggage=data_app1[4].Seattle.baggage}
      }
    }
    
      
    
    render(){
    let city=this.props.location.state.name;
    let {parking,customer,baggage}=''
    // let parking=this.state.parking
    switch(this.props.location.state.name){
      case "Mumbai":
         {parking=data_app1[0].Mumbai.parking
         customer=data_app1[0].Mumbai.customer
         baggage=data_app1[0].Mumbai.baggage
        console.log (parking,customer,baggage) }  
        
        // console.log(parking,customer,baggage)

        case "Delhi":
            {parking=data_app1[1].Delhi.parking
            customer=data_app1[1].Delhi.customer
            baggage=data_app1[1].Delhi.baggage
            console.log (parking,customer,baggage)
          }

          case "Seoul":
            {parking=data_app1[2].Seoul.parking
            customer=data_app1[2].Seoul.customer
            baggage=data_app1[2].Seoul.baggage
            console.log (parking,customer,baggage)
          }

          case "Washington":
            {
            parking=data_app1[3].Washington.parking
            customer=data_app1[3].Washington.customer
            baggage=data_app1[3].Washington.baggage
            console.log (parking,customer,baggage)
          }

          case "Seattle":
            {parking=data_app1[4].Seattle.parking
            customer=data_app1[4].Seattle.customer
            baggage=data_app1[4].Seattle.baggage
            console.log (parking,customer,baggage)
          }
    }
    //console.log (parking,customer,baggage)   

    return(
        <div style={{
            display:'flex',flexDirection:'column',boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',
             width:'250px',height:'100vh',position:'absolute',top:'0'}}>
            <div style={{backgroundColor:'#FC6868',color:'white'}}>
              
            <NavLink style={{textDecoration:'none',color:'white'}} to='/'><div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'200px',padding:'10px'}}>{city} </div></NavLink>
            </div>
            <div >
                <Link style={{textDecoration:'none'}}to=
                {{
                  pathname:`/about/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>About</p></Link>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesparking/${city}`,
                  state:{
                    name:city,
                    services:parking}
                }}><p className='p-sidepanel'>Parking Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicescustomer/${city}`,
                  state:{
                    name:city,
                    services:customer}
                }}><p className='p-sidepanel'>Customer Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesbaggage/${city}`,
                  state:{
                    name:city,
                    services:baggage}
                }}><p className='p-sidepanel'>Baggage Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/map/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>Map</p></NavLink>            </div>
            
        </div>
    )
    // else
// return(<div><App/></div>)   
}
}
export default TestSidePanel



/*
import React, { Component } from 'react'
// import './SidePanel.css';
import {csv} from 'd3-request';
import baggagecsv from './baggageforecast.csv';
import parkingcsv from './parkingforecast.csv';
import customercsv from './customerforecast.csv';

import { NavLink,Link } from 'react-router-dom'; 
// import Landing from '../Landing/Landing';
// import App from '../App'
import data_app1 from './data_app1';

class TestSidePanel extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          parking:'',
          customer:'',
          baggage:''
        };
      }
    
    
      componentWillMount(){
        // csv(parkingcsv, (error, data2) => {
        //   console.log(data2);
        //   this.setState({
        //     data2: data2.map(d => ({...d, x: Number(d.N_forecast), y: Number(d.a)}))
        //   });
          
        // })
    
        // csv(customercsv, (error, data3) => {
        //   console.log(data3);
        //   this.setState({
        //     data3: data3.map(d => ({...d, x: Number(d.N_forecast), y: Number(d.a)}))
        //   });
          
        // })
    
        // csv(baggagecsv, (error, data4) => {
        //   console.log(data4);
        //   this.setState({
        //     data4: data4.map(d => ({...d, x: Number(d.N_forecast), y: Number(d.a)}))
        //   });

          console.log('props',this.props.location)
        switch(this.props.location.state.name)
        {
          case "Mumbai":
            { let parking=data_app1[0].Mumbai.parking
              let customer=data_app1[0].Mumbai.customer
              let baggage=data_app1[0].Mumbai.baggage}
                           
          
            // console.log(parking,customer,baggage)
            case "Delhi":
            { let parking=data_app1[1].Delhi.parking
              let  customer=data_app1[1].Delhi.customer
              let  baggage=data_app1[1].Delhi.baggage}
            
        
            case "Seoul":
            { let parking=data_app1[2].Seoul.parking
              let customer=data_app1[2].Seoul.customer
              let baggage=data_app1[2].Seoul.baggage}

            case "Washington":
              { let parking=data_app1[3].Washington.parking
                let customer=data_app1[3].Washington.customer
                let baggage=data_app1[3].Washington.baggage}

            case "Seattle":
              { let parking=data_app1[4].Seattle.parking
                let customer=data_app1[4].Seattle.customer
                let baggage=data_app1[4].Seattle.baggage}
      }
          
        }
    
        
    
    
    
      
    
    render(){
    // const {data2,data3,data4}=this.state
    // console.log("DAta1,2,3",data2,data3,data4)
    
    let city=this.props.location.state.name;
    let {parking,customer,baggage}=''
    switch(this.props.location.state.name){
      case "Mumbai":
         parking=data_app1[0].Mumbai.parking
         customer=data_app1[0].Mumbai.customer
         baggage=data_app1[0].Mumbai.baggage
        break

        case "Delhi":
            parking=data_app1[1].Delhi.parking
            customer=data_app1[1].Delhi.customer
            baggage=data_app1[1].Delhi.baggage
          
          break

          case "Seoul":
            parking=data_app1[2].Seoul.parking
            customer=data_app1[2].Seoul.customer
            baggage=data_app1[2].Seoul.baggage
          
          break

          case "Washington":
            
            parking=data_app1[3].Washington.parking
            customer=data_app1[3].Washington.customer
            baggage=data_app1[3].Washington.baggage
          
          break

          case "Seattle":
            parking=data_app1[4].Seattle.parking
            customer=data_app1[4].Seattle.customer
            baggage=data_app1[4].Seattle.baggage
          
          break
    }
    // console.log ('Parking extended',parking.chartdata.push({
    //   label: 'Predicted',
    //   data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20], ['Thu', 50], ['Fri', 80],['Sat',60],['Sun',30]]
    // }))
    // console.log ('Parking After',parking.chartdata)



    return(
        <div style={{
            display:'flex',flexDirection:'column',boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',
             width:'250px',height:'100vh',position:'absolute',top:'0'}}>
            <div style={{backgroundColor:'#FC6868',color:'white'}}>
              
            <NavLink style={{textDecoration:'none',color:'white'}} to='/'><div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'200px',padding:'10px'}}>{city} </div></NavLink>
            </div>
            <div >
                <Link style={{textDecoration:'none'}}to=
                {{
                  pathname:`/about/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>About</p></Link>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesparking/${city}`,
                  state:{
                    name:city,
                    services:parking}
                }}><p className='p-sidepanel'>Parking Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicescustomer/${city}`,
                  state:{
                    name:city,
                    services:customer}
                }}><p className='p-sidepanel'>Customer Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/servicesbaggage/${city}`,
                  state:{
                    name:city,
                    services:baggage}
                }}><p className='p-sidepanel'>Baggage Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to=
                {{
                  pathname:`/map/${city}`,
                  state:{name:city}
                }}><p className='p-sidepanel'>Map</p></NavLink>            </div>
            
        </div>
    )
    // else
// return(<div><App/></div>)   
}
}
export default TestSidePanel

*/