import React, {useEffect} from 'react';
import util from "../../src/utils/util";
import {Radar} from 'react-chartjs-2';


const RadarPlot = (props) => {
    const {title, bills} = props
    let radarData1 = []
    let radarData2 = []
    let tempArr;
    let prevYear = "2020"
    let currYear = "2021"
    tempArr = title && bills && util.sortBillByYear(title, "2020", "2021", bills)
    radarData1 = tempArr.first

    radarData2 = tempArr.second

    useEffect(() => {


    }, [props])

    const data = {
        labels: title,
        datasets: [
            {
                label: ` Year ${prevYear}`,
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: radarData1
            },
            {
                label: `Year ${currYear}`,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: radarData2
            }
        ]
    };

    return (

        <>
            <h2>Total Bills in $A </h2>
            <Radar data={data}/>

        </>
    )
}

export default RadarPlot;