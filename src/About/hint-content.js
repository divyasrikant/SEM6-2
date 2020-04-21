import React from 'react';
export default function HintContent({value}) {
  const {outgoing, year, incoming} = value;
  return <div>
     {/* <style={{backgroundColor: 'lightgrey', backgroundSize: '1000px'}}> */}
    <div style={{
      borderBottom: '1px solid #717171',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingBottom: 5
      //textTransform: 'uppercase'
    }}>{year}</div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute', left: -40}}>Outgoing</div>
      <div style={{position: 'absolute', right: -30}}>{outgoing}</div>
    </div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute', left: -38}}>Incoming</div>
      <div style={{position: 'absolute', right: -30}}>{incoming}</div>
    </div>
  </div>;
}
