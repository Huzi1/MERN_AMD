import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import {ListGroup, Tab} from "react-bootstrap";
import React, {useState} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
// import {postUserData} from "../../redux/actions/dashboardAction";
import {useDispatch, useSelector} from "react-redux";
//
//
const Delete = (props) => {
   const  [item, setItem] = useState({value:''})
    const title = props.cat
    // console.log(props)
//     const [count,setCount] = useState(0)
//     const dispatch = useDispatch();

//     const catAddLoading = useSelector(state => state.dashboardReducer.isLoading);
//
//     const catAddData = useSelector(
//         state => state.dashboardReducer.data
//     );
//
//     const catAdd = useSelector(
//         state => state.dashboardReducer.error
//     );
//
//     if (catAddData.length !== 0) {
//
//         console.log("Inside cat tab",catAddData);
//     }
    const handleChange = (event)=>{
      let valueSelected=  event.target.value
        setItem({value: `${valueSelected}` });

    };
    const handleSubmit = () => {

        console.log(item.value)
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGridState">
                    <Form.Label>Category</Form.Label>
                    <h3>{item.value}</h3>
                    <Form.Control as="select"  value={item.value} onChange={handleChange} >
                        <option>Choose...</option>
                        {title.map((cat) => <option key={Math.random()}>{cat.toUpperCase()}</option>)}
                        {/*<option>...</option>*/}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <div>
                    <br/>
                    <ProgressBar variant="success" now={40} label={'50%'}/>
                </div>
            </Form>


        </>


    )
}

export default Delete;