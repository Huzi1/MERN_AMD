import util from "../../src/utils/util";
import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';


const HorizontalPlot = (props) => {
    const {title, bill} = props

    const sum = util.billSum(title, bill)
    const data = {
        labels: title,
        datasets: [
            {
                label: 'Total Bills in $A',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: sum
            }
        ]
    };


    return (

        <>
            <h2>Horizontal Bar </h2>
            <HorizontalBar data={data}/>

        </>


    )


}
export default HorizontalPlot;