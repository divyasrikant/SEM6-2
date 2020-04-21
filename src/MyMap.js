// import React,{Component} from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// function MapContainer(props){
//   // if (!props.loaded) return <div style={{float:'right'}}>Loading...</div>;


//   return (
//     <Map
//       centerAroundCurrentLocation
//       className="map"
//       // google={props.google}
//       google='https://api.google.com/some/script.js'
//       initialCenter={{
//         lat: 40.854885,
//         lng: -88.081807
//       }}
//       style={{ height: '100%', position: 'relative', width: '100%' }}
//       zoom={14}
//     />
//   );
// };
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
// })(MapContainer)

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// ))

// <MyMapComponent
//   isMarkerShown
//   googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//   // loadingElement={<div style={{ height: `100%` }} />}
//   // containerElement={<div style={{ height: `400px` }} />}
//   // mapElement={<div style={{ height: `100%` }} />}
// />
// export default MyMapComponent

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: 'auto',
  height: 'auto',
  margin:'10px',
  marginLeft:'260px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 19.099640,
         lng: 72.874715
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer);