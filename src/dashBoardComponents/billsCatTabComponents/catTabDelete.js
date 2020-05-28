import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Col, Container, ListGroup, Tab} from "react-bootstrap";
import React, {useState} from "react";
import * as Yup from "yup";


import {useDispatch, useSelector} from "react-redux";
import {deleteCat} from "../../redux/actions/dashboardAction";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
//
//
const Delete = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState({value: '', isShow: false})
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
    const handleChange = (event) => {
        let valueSelected = event.target.value
        setItem({
            ...item,
            value: `${valueSelected}`,
            isShow: true
        });

    };
    const handleSubmit = (e) => {

        setItem({
            ...item,
            isShow: true
        });
        console.log(item.value);
        let myObj = {category: item.value.toLowerCase(), id: '', amount: ''}
        dispatch(deleteCat(myObj));

        e.preventDefault()
    }
    return (
        <>
            {
                item.isShow
                    ? <Alert variant={"danger"}>
                        Warning! this action can not be recalled!
                        <Button onClick={() => setItem({
                            ...item,
                            isShow: false
                        })} variant="info">
                            I am Smart!
                        </Button>
                    </Alert>
                    : null

            }
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formGridState">
                    <Container fluid>
                        <Row>
                            <Col sm={4}>
                                <Form.Label>Category</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control as="select" value={item.cat} onChange={handleChange}>
                                    <option>Choose...</option>
                                    {title.map((cat) => <option key={Math.random()}>{cat.toUpperCase()}</option>)}
                                    {/*<option>...</option>*/}

                                </Form.Control>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
                <Button id="submit" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
};
// #6200EE
export default Delete;