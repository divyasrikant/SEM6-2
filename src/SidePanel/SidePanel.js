import React, { Component } from 'react'
import './SidePanel.css';
import { NavLink } from 'react-router-dom'; 
// import Landing from '../Landing/Landing';
import App from '../App'

class SidePanel extends Component{
    constructor(props){
        super(props);
        this.state = {
      showPanel:true}
    }
    handleClick( e){
        
        this.setState({showPanel:false})
    }
    render(){
    let city=this.props.city
    // if (this.state.showPanel===true)
    return(
        <div style={{
            display:'flex',flexDirection:'column',boxShadow:'0px 0px 1px rgba(0,0,0,0.2)',
             width:'250px',height:'100vh',position:'absolute',top:'0'}}>
            <div style={{backgroundColor:'#FC6868',color:'white'}}>
            <NavLink style={{textDecoration:'none',color:'white'}} to='/'><div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',marginTop:'200px',padding:'10px'}}>{city} </div></NavLink>
            </div>
            <div >
                <NavLink style={{textDecoration:'none'}}to="/about"><p className='p-sidepanel'>About</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicesparking"><p className='p-sidepanel'>Parking Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicescustomer"><p className='p-sidepanel'>Customer Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/servicesbaggage"><p className='p-sidepanel'>Baggage Services</p></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/map"><p className='p-sidepanel'>Map</p></NavLink>            </div>
            
        </div>
    )
    // else
// return(<div><App/></div>)   
}
}
export default SidePanel