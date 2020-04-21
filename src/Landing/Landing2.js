import React,{Component} from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import india from '../worldLowRes.json';
import world from './WholeWrold'


class Landing2 extends React.Component {
    // onClick( target ) => {setClicked(target.attributes.name.value)},
    constructor() {
        super()
        this.state = {
          clickedstate:''
        }
      }
    
    render(){
        const style = { margin: '1rem auto', width: '850px' };
        const layerProps={onClick: ({ target }) => this.setState({clickedstate:target.attributes.name.value}),
    }
        return (
            <div style={style}>
            <VectorMap {...india} layerProps={layerProps} />
            <hr />
            <p style={{textAlign:'center'}}>Clicked: {this.state.clickedstate}</p>
            </div>
        );
    }
  }
export default Landing2