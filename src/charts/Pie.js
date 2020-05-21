import React from 'react';
import {Pie} from 'react-chartjs-2';
import util from '../utils/util'

const PieChart = (props) => {
    // console.log(props)
    // const title = util.toUpperCase(Object.keys(props.bill))
    const bill = props.bill;
    const title = props.title
     // console.log(bill)
    const sum = util.billSum(title, bill)
    let size = title.length
    const color = util.RandomColorCode(size)
    // console.log(title, size, sum, color)
    // console.log(color)
    const data = {
        labels: title,
        datasets: [{
            data: sum,
            backgroundColor: color,
            hoverBackgroundColor: color
        }],
        // width: 50,
        // height:50
    };

    return (
        <>
            <h2>Total Bills in $A </h2>
            <Pie data={data}
                 // width="250px"
                 // height="70%"

            // options={{ maintainAspectRatio: true }}

            />
        </>
    )
}

export default PieChart;

