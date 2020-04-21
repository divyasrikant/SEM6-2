import React, { Component } from "react";
import world from './WholeWrold';
import { NavLink,Redirect,Link ,Router} from 'react-router-dom'; 
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import App1 from "../App1";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const markers = 
[
  { markerOffset: 5, name: "Mumbai", coordinates: [75.7139, 19.7515] },
  { markerOffset: 5, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: -23, name: "Seoul", coordinates: [126.9780, 37.5665] },
  //{ markerOffset: -25, name: "Washington ", coordinates: [-77.0369, 38.9072] },
  { markerOffset: 5, name: "Seattle", coordinates: [-122.3321, 47.6062] },
];
const data_app1=[
  {"Mumbai":
      {
        "name":"Mumbai",
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
class Landing extends Component{
  constructor(props){
    super(props);
    this.state = this.props.state
  }
// delaying(){
//   console.log(data_app1)
//   console.log("Delaying",this.state);
// }

handleClick(compName, e){
    console.log(compName);
    this.setState({render:compName});
    console.log('Landing before switch',this.state);

    switch(compName){
      case "Mumbai": this.setState(
        {
        // name:data_app1[0].Mumbai.name,
        // parking:data_app1[0].Mumbai.parking,
        // customer:data_app1[0].Mumbai.customer,
        // baggage:data_app1[0].Mumbai.baggage
        name:compName
      }
    //   ,() => {
    //     this.delaying(); 
    // }
    );
        
 
  }
  // return <Redirect push to="/about" />;  
}
componentWillUpdate(){
  console.log("In component did update")
  console.log("State",this.state)
  return(
    <Router>
      <Link to='/about'/>
    </Router>
  )
}
  render(){
  return (
      <div style={{marginLeft:'-100px',marginTop:'-100px'}}>
      <ComposableMap style={{justifyContent:'center'}}>
        <Geographies geography={geoUrl}>
          {({geographies}) => geographies.map(geo =>
            <Geography key={geo.rsmKey} geography={geo} />
          )}
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}  > 
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <Link  style={{textDecoration:'none',color:'white'}} to={{
            pathname:`/about/${name}`,
            state:
              {name:name}
            }} >
          {/* onClick={this.handleClick.bind(this, name)} > */}
              <text textAnchor="middle" onClick={this.handleClick.bind(this, name)} y={markerOffset} style={{ fontFamily: "system-ui", fill: 'grey' ,fontSize:'10px' }}>
                  {name}
              </text>
          </Link>
        </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};
}

export default Landing;
