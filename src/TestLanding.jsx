import React, { Component } from "react";
import {data_app1} from './data_app1';
import { NavLink,Redirect,Link ,Router} from 'react-router-dom'; 
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
const markers = 
[
  { markerOffset: 5, name: "Mumbai", coordinates: [75.7139, 19.7515] },
  { markerOffset: 5, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: -23, name: "Seoul", coordinates: [126.9780, 37.5665] },
  { markerOffset: -25, name: "Washington ", coordinates: [-77.0369, 38.9072] },
  { markerOffset: 5, name: "Seattle", coordinates: [-122.3321, 47.6062] },
];

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class TestLanding extends Component{
  constructor(props){
    super(props);
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
          <Link  style={{textDecoration:'none',color:'white'}} to={`/about/${name}`} >
              <text textAnchor="middle"  y={markerOffset} style={{ fontFamily: "system-ui", fill: 'grey' ,fontSize:'10px' }}>
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

export default TestLanding;
