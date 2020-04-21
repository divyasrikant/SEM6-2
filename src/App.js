import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import SidePanel from './SidePanel/SidePanel';
import About from './About/About'
import Services from './Services/Services';
import MapContainer  from './MyMap';
import Landing from './Landing/Landing';

import Landing2 from './Landing/Landing2';
import App1 from './App1';
import TestLanding from './TestLanding';
import TestSidePanel from './TestSidepanel';
// import Test from './Test';
// import data_app1 from './Landing/Landing'
const data_app1=[
  {"Mumbai":
      {
        "name":"Mumbai",
        "about":{
          portname:'Chhatrapati Shivaji Maharaj International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates at T2 Terminal',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
        "parking":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'56', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'40', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'67' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'22', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
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
              ]
          
        },
        "customer":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'36', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'69', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'20' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
                {
                  label: 'N',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 80]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 60], ['Tue',20], ['Wed', 50], ['Thu', 20], ['Fri', 30],['Sat',60],['Sun',30]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',30], ['Wed', 55], ['Thu', 30], ['Fri', 50],['Sat',50],['Sun',90]]
                    },  
              ] 
          
        },
        "baggage":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'95', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
                {'pathcolor':'#ABD99E','percentage':'80' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
                {
                  label: 'N',
                  data: [['',0],['Mon', 60], ['Tue',80], ['Wed', 70]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 65], ['Thu', 75], ['Fri', 87],['Sat',76],['Sun',90]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',80], ['Wed', 80], ['Thu', 75], ['Fri', 80],['Sat',90],['Sun',100]]
                    }, 
              ]
          
        }
      }
  }
]
class App extends Component {
  
    state={
      // name:data_app1[0].Mumbai.name,
      // parking:data_app1[0].Mumbai.parking,
      // customer:data_app1[0].Mumbai.customer,
      // baggage:data_app1[0].Mumbai.baggage
      name:'',
      parking:'',
      customer:'',
      baggage:''
          }
  
  render(){ 
    let {parking,customer,baggage,name}=this.state

    return (
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
            <BrowserRouter>
        
        <div>
        
          <Switch>
            <Route path="/" component={()=><Landing /> } exact  />
            <Route path="/about/:name" component={(props)=><div><TestSidePanel {...props} /><About {...props}/></div>}/>
            <Route path="/servicesparking/:name" component={(props)=><div><TestSidePanel {...props}/><Services title='Average Parking Space utilization' {...props}/></div>}/>
            <Route path="/servicescustomer/:name" component={(props)=><div><TestSidePanel {...props}/><Services title='Average Customer Service utilization'{...props}/></div>}/>
            <Route path="/servicesbaggage/:name" component={(props)=><div><TestSidePanel {...props}/><Services title='Average Baggage Service utilization' {...props}/></div>}/>
            <Route path="/map/:name" component={(props)=><div><TestSidePanel {...props}/><MapContainer/></div>} />
          </Switch>
        </div>
      </BrowserRouter>    
        </div>
    );
  }
}

export default App;
