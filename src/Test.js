import React from 'react'
class Test extends React.Component {
    constructor(){
        super();
        this.state = {render:''}
    }
    handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});        
    }
    _renderSubComp(){
        console.log('in rendersub')

        switch(this.state.render){

            case 'chockers': return <Chokers/>
            case 'bracelets' : return <Bracelets/>
            case 'rings': return <FRings/>
        }
    }
    render() {
        return (
            <div className="App">
                <ul style={{display: 'inline'}}>
                    <li onClick={this.handleClick.bind(this, 'chockers')}>Chokers</li>
                    <li onClick={this.handleClick.bind(this, 'bracelets')}>Bracelets</li>
                    <li onClick={this.handleClick.bind(this, 'rings')}>Rings for Women</li>
                </ul>
                {this._renderSubComp()}
            </div>
        );
    }
}
class Chokers extends React.Component {
    render(){
        return <div>Inside Chockers</div>
    }
}
class FRings extends React.Component {
    render(){
        return <div>Inside FRings</div>
    }
}
class Bracelets extends React.Component {
    render(){
        return <div>Inside Bracelets</div>
    }
}

export default Test