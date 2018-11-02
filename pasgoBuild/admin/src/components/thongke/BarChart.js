import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {

    render() {          
        return (
            <div>
                <Bar
                    data={this.props.data}
                    width={900}
                    height={350}
                    options={this.props.options}
                />
            </div>
        )
    }
}

export default BarChart;