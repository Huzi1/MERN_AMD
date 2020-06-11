import React, {useState} from "react";
import {deleteBill} from "../../redux/actions";
import {Formik} from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import util from '../../utils/util'

import {useDispatch} from "react-redux";


const DeleteBill = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({catSelected: "", displayBill: [], isShow: false})
    const {active, title} = props

    const validationSchema = Yup.object()
    let display = []
    const handleBillChange = (e) => {

        const val = e.target.value
        if (val.toLowerCase() !== "choose a bill category...") {
            display = util.sortSelectedBill(val.toLowerCase(), active);
            setState({
                ...state,
                catSelected: val.toLowerCase(),
                displayBill: display,
                isShow: true
            })
        } else {
            setState({
                ...state,
                isShow: false
            })
        }


    }
    // useEffect(() => {
    //         console.log("working", state)
    //     }, [state]
    // )
    return (
        <>
            <Formik validationSchema={validationSchema}

                    initialValues={{
                        id: '',
                        cat: ""
                    }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {


                        setSubmitting(true);

                        // alert(JSON.stringify(values, null, 2));
                        const obj = {category: values.cat.toLowerCase(), id: values.id, amount: 0};
                        dispatch(deleteBill(obj));

                        resetForm();
                        setState({
                            ...state,
                            catSelected: 'choose a bill category...',
                            displayBill: [],
                            isShow: false
                        })
                        setSubmitting(false);

                    }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      isSubmitting,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,

                  }) => (
                    // <Container>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Row>
                                <Form.Control as="select"
                                              value={values.cat}
                                              name="cat"
                                              id="cat"
                                              onChange={(e) => {
                                                  handleChange(e);
                                                  handleBillChange(e)
                                              }}>
                                    <option>Choose a bill category...</option>
                                    {title.map((cat) => <option key={Math.random()}>{cat.toUpperCase()}</option>)}

                                </Form.Control>
                            </Row>
                            <br/>
                            <Row className="justify-content-md-center">
                                {
                                    state.isShow
                                        ? <Form.Control as="select"
                                                        value={values.id}
                                                        name="id"
                                                        id="id"
                                                        onChange={handleChange}
                                        >
                                            <option>Choose a bill from list...</option>
                                            {
                                                state.displayBill.map((cat) => <option
                                                    key={Math.random()}>{cat.id}</option>)}

                                        </Form.Control>
                                        : <p>Select a category first</p>}


                            </Row>
                        </Form.Group>
                        <Button variant="primary" id="submit" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                    // </Container>
                )}
            </Formik>

        </>
    )

};

export default DeleteBill;