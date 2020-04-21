import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function Dough() {
    
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FC6868',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FC6868',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}

  
    return(
    <div style={{
        width: '200px',
        height: '400px'        }}>
    <Doughnut height='400px'width='400px'data={data} />
    </div>
    )

}
export default Dough