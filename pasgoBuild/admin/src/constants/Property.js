
export const chartColors = {
    clickColor: 'rgb(255, 99, 132)',
    hoverColor: 'rgb(54, 162, 235)',
    displayColor: 'rgb(153, 102, 255)',
}

export const chartObj = {
    Header: {
        countDisplay: 0,
        countHover: 0,
        countClick: 0
    },
    Data: {
        labels: [],
        datasets: [
            {
                label: 'Total Display',
                backgroundColor: chartColors.displayColor,
                borderColor: chartColors.displayColor,
                data: [],
                fill: false,
            },
            {
                label: 'Total Hover',
                backgroundColor: chartColors.hoverColor,
                borderColor: chartColors.hoverColor,
                data: [],
                fill: false,
            },
            {
                label: 'Total Click',
                backgroundColor: chartColors.clickColor,
                borderColor: chartColors.clickColor,
                data: [],
                fill: false,
            },
        ]
    },
    Options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
            display: true,
            text: ''
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Days'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    weight: 0,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                }
            }]
        }
    },
}