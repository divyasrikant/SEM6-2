import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';
import MapContainer  from './MyMap';
import Landing from './Landing/Landing';
import data_app1 from './Landing/Landing'

class App1 extends Component {
  constructor(props){
    super(props);
    this.state =
    {
      name:data_app1[0].Mumbai.name,
      parking:data_app1[0].Mumbai.parking,
      customer:data_app1[0].Mumbai.customer,
      baggage:data_app1[0].Mumbai.baggage
    }
}

  
  render(){
  let {parking,customer,baggage,name}=this.state
 
  return (
      <BrowserRouter>
        
        <div>
        
          <Switch>
            <Route path="/" component={Landing} exact  />
            <Route path="/about" component={()=><div><SidePanel city={name}/><About/></div>}/>
            <Route path="/servicesparking/" component={()=><Services title='Average Parking Space utilization' {...parking}/>}/>
            <Route path="/servicescustomer/" component={()=><Services title='Average Customer Service utilization'{...customer}/>}/>
            <Route path="/servicesbaggage/" component={()=><Services title='Average Baggage Service utilization' {...baggage}/>}/>
            <Route path="/map/" component={()=><div><MapContainer/></div>} />
          </Switch>
        </div>
      </BrowserRouter>
  );
            }
}

export default App1;
