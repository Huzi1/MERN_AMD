import React, {useState} from "react";
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';

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