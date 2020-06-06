import React from 'react';
import {Pie} from 'react-chartjs-2';
import util from '../utils/util'

const PieChart = (props) => {

    const bill = props.bill;
    const title = props.title

    const sum = util.billSum(title, bill)
    let size = title.length
    const color = util.RandomColorCode(size)

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

            />
        </>
    )
}

export default PieChart;

