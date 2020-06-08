import React from 'react';
import {Line} from 'react-chartjs-2';
import util from "../utils/util";

const LinePlot = (props) => {
    const {bill} = props
    const sum = util.yearlyTotalBillSum(bill)
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Total Bills in $A',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: sum
            }
        ]
    };


    return (

        <>

            <Line data={data}/>
        </>
    )


};

export default LinePlot;