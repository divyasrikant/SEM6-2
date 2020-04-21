import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';



class Piechart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['1', '2', '3'],
            datasets: [{
                data: [50, 35, 60],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    }

    render() {
        return (
            <div>
                <h4>Pie Chart</h4>
                <Pie
                data = {{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height = '50%'
                />
                <br/>
            </div>
        );
    }

}

export default Piechart;