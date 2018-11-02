import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ContentComponent extends Component {

  render() {

    let labelDate = this.props.labelDate;

    let dataChart = this.props.dataChartt

    const data = {
      labels: labelDate,
      datasets: [
        {
          label: 'Dishplay',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(189, 11, 11, 0.63)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataChart.display
        },
        {
          label: 'Hover',
          backgroundColor: 'rgba(0,255,0,0.3)',
          borderColor: 'rgba(99,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(63, 236, 63, 0.616)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataChart.hover
        },
        {
          label: 'Click',
          backgroundColor: 'rgba(0,0,255,0.3)',
          borderColor: 'rgba(99,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(4, 4, 190, 0.623)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataChart.click
        },
      ]
    };

    return (
      <React.Fragment>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{

          }}

        />
      </React.Fragment>
    );
  }
}

export default ContentComponent;