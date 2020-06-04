import React, {useState} from "react";
import DatePicker from 'react-date-picker';

const Dates = (props) => {
    const [data, setData] = useState({myDate: new Date()});

    const onChange = (value) => {

        setData(
            {
                ...data,
                myDate: value

            }
        )
        props.onDateChange(value);

    }


    return (
        <>

            <DatePicker
                required={true} format={"MMM-yyyy"} maxDetail={"year"} calendarAriaLabel={"Toggle calendar"}
                value={data.myDate} onChange={onChange}/>

        </>
    )

};

export default Dates;